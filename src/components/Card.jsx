import missing from "../assets/images/missing_image.png"
export default function Card() {
    return (
        <div className="col mb-5">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={missing}
              class="card-img-top"
              alt="image"
            />
          </div>
        </div>
      );
}