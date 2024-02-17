export default function Card({ photo }) {
    // Generate a unique identifier for the card using uuid

    return (
        //! Card container
        <div className="col mb-5">
            <div className="card" style={{ width: "18rem" }}>
                
                {/* Card Image */}
                <img
                    src={photo}
                    className="card-img-top"
                    alt={photo}
                />
                
            </div>
        </div>
    );
}
