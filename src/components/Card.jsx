import React, { useMemo } from "react";

export default function Card({ photo }) {
  const timeCreated = useMemo(() => {
    const date = `${new Date(photo.createdAt.seconds*1000)}`.split(' ')
    return `${date[1]} ${date[2]}  ${date[3]}`
  }, [])

  return (
    <div className="col mb-5">
      <div className="card" style={{ width: "18rem" }}>
        <div
          style={{
            height: "220px",
            backgroundImage: `url(${photo.path})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <h2 className="text-center" style={{fontFamily:"Polaroids"}}>{photo.title}</h2>
        <p>{timeCreated}</p>
      </div>
    </div>
  );
}