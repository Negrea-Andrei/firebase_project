import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import List from "./components/List";
import Public from "./components/Public";
import NotFound from "./components/NotFound";
import UploadForm from "./components/uploadform";
import Profile from "./components/Profile";
import { useAuthContext } from "./context/AuthContext";
import Storage from "./handlers/storage";
import Firestore from "./handlers/firestore";
import "./App.css";

// Destructure functions from Firestore
const { writeDoc, readDocs } = Firestore;

// Sample photos data
const photos = [];

function App() {
  // State hooks
  const [input, setInput] = useState({ title: null, file: null, path: null });
  const [items, setItems] = useState([]);
  const [placeholder, setPlaceholder] = useState([]);
  const [isCollapsed, collapse] = useState(false);

  // Auth context and storage functions
  const { authenticate, currentUser } = useAuthContext();
  const { uploadFile, downloadFile } = Storage;

  // Toggle collapse state
  const toggle = () => collapse(!isCollapsed);

  // Handle input changes
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

  // Handle form submission
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
              setItems([newItem, ...items]);
              setPlaceholder([newItem, ...items]);
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

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemsFromDatabase = await readDocs("stocks");
        setItems([...itemsFromDatabase, ...photos]);
        setPlaceholder([...itemsFromDatabase, ...photos]);
      } catch (error) {
        console.error(error);
      }
    };

    // Authenticate and fetch data
    authenticate();
    fetchData();
  }, []);

  return (
    <Router>
      {/* Navigation Bar */}
      <NavBar
        placeholder={placeholder}
        setItems={setItems}
        items={items}
        setPlaceholder={setPlaceholder}
      />

      <div className="container text-center mt-5">
        {/* Toggle Add Form */}
        <button className="btn btn-success float-end" onClick={toggle}>
          {isCollapsed ? "Close" : "Add +"}
        </button>
        <div className="clearfix mb-4"></div>

        {/* Upload Form */}
        <UploadForm
          currentUser={currentUser}
          isCollapsed={isCollapsed}
          onChange={handleOnChange}
          onSubmit={handleOnSubmit}
          input={input}
        />

        {/* React Router Routes */}
        <Routes>
          <Route path="/" element={<Welcome currentUser={currentUser}/>} />
          <Route path="/public" element={<Public items={items} />} />
          <Route path="/my_list" element={<List items={items} />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
