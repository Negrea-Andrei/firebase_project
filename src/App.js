import NavBar from "./components/NavBar";
import Card from "./components/Card";
import UploadForm from "./components/uploadform";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import "./App.css";

const photos = [
  "https://picsum.photos/id/1001/200/200",
  "https://picsum.photos/id/1002/200/200",
  "https://picsum.photos/id/1003/200/200",
  "https://picsum.photos/id/1004/200/200",
  "https://picsum.photos/id/1005/200/200",
  "https://picsum.photos/id/1006/200/200",
  "https://picsum.photos/id/1009/200/200",
  "https://picsum.photos/id/1008/200/200",
];

function App() {
  const [input, setInput] = useState();
  const [items, setItems] = useState(photos);
  const [isCollapsed, collapse] = useState(false);
  const toggle = () => collapse(!isCollapsed);
  const handleOnChange = (e) => {setInput(e.target.value)}
  const handleOnSubmit = (e) => {e.preventDefault(); setItems([...items,input])}
  return (
    <>
      <NavBar />
      <div className="container text-center mt-5">
        <button className="btn btn-success float-end" onClick={toggle}>
          {isCollapsed ? "Close" : "Add +"}
        </button>
        <div className="clearfix mb-4"></div>
        <UploadForm isCollapsed={isCollapsed}
        onChange={handleOnChange}
        onSubmit={handleOnSubmit} />
        <h1>Polaroids</h1>
        <div className="row d-flex align-items-center justify-content-center">
          {items.map((photo) => (
            <Card key={uuid()} photo={photo} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
