import React, { useMemo } from "react";
import Preview from "./Preview";

export default function UploadForm({ isCollapsed, onChange, onSubmit, input, currentUser }) {
  const isDisabled = useMemo(() => {
    return !!Object.values(input).some((value) => !value);
  }, [input]);

  return (
    isCollapsed && (
      <>
        <p className="display-6 text-center mb-3">
          {currentUser ? "Upload a Memory" : "Please log in first"}
        </p>

        <div className="mb-5 row">
          {/* Column for Preview component on small screens */}
          <div className="col-12 col-md-6 mb-md-0 mb-3 d-flex align-items-center justify-content-center">
            <Preview {...input} />
          </div>

          {/* Column for the form */}
          <div className="col-12 col-md-6">
            <form
              className="mb-2"
              style={{ textAlign: "left" }}
              onSubmit={onSubmit}
            >
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  placeholder="title"
                  aria-describedby="text"
                  onChange={onChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="file"
                  className="form-control"
                  name="file"
                  onChange={onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-success float-end"
                disabled={isDisabled}
              >
                Add Polaroid
              </button>
            </form>
          </div>
        </div>
      </>
    )
  );
}
