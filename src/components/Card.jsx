import React, { useMemo } from "react";

export default function Card({ photo, username }) {
  const timeCreated = useMemo(() => {
    if (photo.createdAt) {
      const date = `${new Date(photo.createdAt.seconds * 1000)}`.split(" ");
      return `${date[1]} ${date[2]}  ${date[3]}`;
    } else {
      return "Timestamp not available";
    }
  }, [photo.createdAt]);

  return (
    <div className="col mb-5">
      <div className="card">
        <div
          style={{
            height: "300px",
            backgroundImage: `url(${photo.path})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <h2 className="text-center" style={{ fontFamily: "Polaroids" }}>
          {photo.title}
        </h2>
        <div className="d-flex justify-content-between m-1">
            <p>@{username}</p>
            <p>{timeCreated}</p>
          </div>
      </div>
    </div>
  );
}
