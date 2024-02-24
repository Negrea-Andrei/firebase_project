export default function Preview ({path}) {
  return (
    path && <div
      className="rounded p-1 m-5"
      style={{
        width: "60%",
        height: "300px",
        backgroundImage: `url(${path}`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    ></div>
  );
};