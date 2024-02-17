import NavBar from "./components/NavBar";
import Card from "./components/Card";
import { v4 as uuid } from 'uuid';
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
  return (
      <>
          <NavBar />
          <div className="container text-center mt-5">
              <h1>Polaroid</h1>
              <div className="row">
                  {photos.map((photo) =>
                      <Card key={uuid()} photo={photo} />
                  )}
              </div>
          </div>
      </>
  );
}

export default App;
