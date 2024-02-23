import React from "react";
import { useAuthContext } from "../context/AuthContext";

const Welcome = () => {
  const { login } = useAuthContext();

  return (
    <div className="container text-center mt-5">
      <h1>Welcome to Polaroids!</h1>
      <p className="lead">
        A place where you can share, save, and search through your memories.
        Connect with friends and relive your favorite moments captured in
        polaroids.
      </p>
      <p>
        Polaroids is a user-friendly platform that allows you to create and
        organize your photo albums effortlessly.
      </p>
      <button className="btn btn-success btn-lg btn-block" onClick={() => login()}>
        Log in
      </button>

      {/* Grid of 4 pictures in 2 rows */}
      <div className="row mt-4">
        <div className="col-md-6">
          <img
            src="https://shotkit.com/wp-content/uploads/bb-plugin/cache/How-to-Turn-Photos-into-Polaroids_3-landscape-42c2324ac2bbd95ca81f92b96bd10b0f-zybravgx2q47.jpg"
            alt="Placeholder 1"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <img
            src="https://www.inspiringindians.in/wp-content/uploads/2023/06/ff27fbd3-e153-4d8d-81bc-c5633b91dd19.jpeg"
            alt="Placeholder 2"
            className="img-fluid"
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <img
            src="https://acdn.mitiendanube.com/stores/003/136/320/products/img_36221-d6ea04c0913b70c5c116831756508763-1024-1024.webp"
            alt="Placeholder 3"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <img
            src="https://www.printbebo.in/wp-content/uploads/2020/09/Polaroid-Images-Printbebo.jpg"
            alt="Placeholder 4"
            className="img-fluid"
          />
        </div>
      </div>

      {/* Wrapping heading and button in a div */}
      <div className="mt-4" style={{ height: "400px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <h3>Want to see more of my projects?</h3>

        <button
          className="btn btn-success btn-lg btn-block"          
          onClick={() =>
            window.open("https://andrei-negrea-contact.onrender.com/", "_blank")
          }
        >
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Welcome;
