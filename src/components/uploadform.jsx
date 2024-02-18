import Preview from "./Preview";
import { useMemo } from "react";

export default function UploadForm({ isCollapsed, onChange, onSubmit, input }) {
  const isDisabled = useMemo(() => {
    return !!Object.values(input).some((value) => !value);
  }, [input]);

  return (
    isCollapsed && (
      <>
        <p className="display-6 text-center mb-3">Upload a Memory</p>
        <div className="mb-5 d-flex align-items-center justify-content-center">
          <Preview {...input}/>
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
      </>
    )
  );
}
