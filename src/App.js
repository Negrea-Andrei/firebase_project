import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import List from "./components/List";
import Public from "./components/Public";
import NotFound from "./components/NotFound";
import UploadForm from "./components/uploadform";
import Profile from "./components/Profile";
import { useAuthContext } from "./context/AuthContext";
import Storage from "./handlers/storage";
import Firestore from "./handlers/firestore";
import "./App.css";

const { writeDoc, readDocs } = Firestore;

const photos = [];


function App() {
  const [input, setInput] = useState({ title: null, file: null, path: null });
  const [items, setItems] = useState([]);
  const [isCollapsed, collapse] = useState(false);
  const { authenticate, currentUser } = useAuthContext();
  const { uploadFile, downloadFile } = Storage;

  const toggle = () => collapse(!isCollapsed);

  const handleOnChange = (e) => {
    if (e.target.name === "file") {
      setInput({
        ...input,
        file: e.target.files[0],
        path: URL.createObjectURL(e.target.files[0]),
      });
    } else {
      setInput({
        ...input,
        title: e.target.value,
      });
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    uploadFile(input)
      .then(downloadFile)
      .then((url) => {
        const newItem = { path: url };
        const userDisplayName = currentUser?.displayName
          .split(" ")
          .join("")
          .toLowerCase();

        if (userDisplayName) {
          writeDoc({ ...input, path: url, user: userDisplayName }, "stocks")
            .then((result) => {
              console.log(result);
              setItems([newItem, ...items]);
              setInput({ title: null, file: null, path: null });
              toggle();
            })
            .catch((error) => console.error(error));
        } else {
          console.error("User does not have a valid displayName.");
        }
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemsFromDatabase = await readDocs("stocks");
        setItems([...itemsFromDatabase, ...photos]);
      } catch (error) {
        console.error(error);
      }
    };

    authenticate();
    fetchData();
  }, []); // Empty dependency array

  return (
    <Router>
      <NavBar />
      <div className="container text-center mt-5">
        <button className="btn btn-success float-end" onClick={toggle}>
          {isCollapsed ? "Close" : "Add +"}
        </button>
        <div className="clearfix mb-4"></div>
        <UploadForm
          isCollapsed={isCollapsed}
          onChange={handleOnChange}
          onSubmit={handleOnSubmit}
          input={input}
        />

        <Routes>
          <Route path="/public" element={<Public items={items} />} />
          <Route path="/" element={<List items={items} />} />
          <Route path="*" element={<NotFound />}/>
          <Route path="/profile" element={<Profile />}/>
        </Routes>


      </div>
    </Router>
  );
}

export default App;
