import React from "react";
import Card from "./Card";
import { v4 as uuid } from "uuid";

const Public = ({ items }) => {
  if (items.length === 0) {
    return (
      <>
      <h1>Polaroids</h1>
        <p>No images available.</p>
      </>
    );
  }

  return (
    <>
      <h1>Polaroids</h1>
      <div className="row d-flex align-items-center justify-content-center">
        {items.map((photo) => (
          <Card key={uuid()} photo={photo} username={photo.user} />
        ))}
      </div>
    </>
  );
};

export default Public;
