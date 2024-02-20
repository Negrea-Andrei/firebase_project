import NavBar from "./components/NavBar";
import Card from "./components/Card";
import UploadForm from "./components/uploadform";
import { useAuthContext } from "./context/AuthContext";
import { v4 as uuid } from "uuid";
import { useState, useEffect } from "react";
import Storage from "./handlers/storage";

import "./App.css";
import Firestore from "./handlers/firestore";

const { writeDoc, readDocs } = Firestore;

const photos = [];

function App() {
  const [input, setInput] = useState({ title: null, file: null, path: null });
  const [items, setItems] = useState([]);
  const [isCollapsed, collapse] = useState(false);
  const { authenticate } = useAuthContext();
  const {currentUser} = useAuthContext();
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
        const userDisplayName = currentUser?.displayName.split(" ").join("").toLowerCase();
  
        if (userDisplayName) {
          writeDoc({ ...input, path: url, user: userDisplayName}, "stocks")
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
  }, [items]);

  return (
    <>
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
        <div className="row d-flex align-items-center justify-content-center">
          {items.map((photo) => (
            <Card key={uuid()} photo={photo} username={currentUser?.displayName} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
