import React, { useContext, useMemo } from "react";
import { useAuthContext } from "../context/AuthContext";
import Card from "./Card";
import { v4 as uuid } from "uuid";

const List = ({ items }) => {
  const { currentUser } = useAuthContext();
  const name = currentUser

  const userItems = useMemo(() => {
    return items.filter((photo) => photo.user === currentUser?.displayName.split(" ").join("").toLowerCase());
  }, [items, currentUser]);

  if (userItems.length === 0) {
    return (
      <>
        <h1>My Polaroids</h1>
        <p>No images available for {currentUser?.displayName}.</p>
      </>
    );
  }

  return (
    <>
      <h1>My Polaroids</h1>
      <div className="row d-flex align-items-center justify-content-center">
        {userItems.map((photo) => (
          <Card key={uuid()} photo={photo} username={photo.user} />
        ))}
      </div>
    </>
  );
};

export default List;
