import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";

export default function AssignmentEditor() {
  const assignments = db.assignments;
  const { cid, aid } = useParams(); 
  const assignment = assignments.find((a) => a._id === aid); 

  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  return (
    <div id="wd-assignments-editor" style={{ padding: "20px" }}>
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-3">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to={`/Kambaz/Courses/${cid}/Assignments`}>Assignments</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {assignment.title}
          </li>
        </ol>
      </nav>

      <form>
        {/* Assignment Name */}
        <div className="row mb-3">
          <div className="col-md-3">
            <label htmlFor="wd-name" className="form-label">
              Assignment Name
            </label>
          </div>
          <div className="col-md-9">
            <input
              id="wd-name"
              type="text"
              className="form-control"
              defaultValue={assignment.title}
            />
          </div>
        </div>

        {/* Description */}
        <div className="row mb-3">
          <div className="col-md-3">
            <label htmlFor="wd-description" className="form-label">
              Description
            </label>
          </div>
          <div className="col-md-9">
            <textarea
              id="wd-description"
              className="form-control"
              rows={5}
              defaultValue={assignment.description}
            ></textarea>
          </div>
        </div>

        {/* Points */}
        <div className="row mb-3">
          <div className="col-md-3">
            <label htmlFor="wd-points" className="form-label">
              Points
            </label>
          </div>
          <div className="col-md-9">
            <input
              id="wd-points"
              type="number"
              className="form-control"
              defaultValue={assignment.points}
            />
          </div>
        </div>

        {/* Assignment Group */}
        <div className="row mb-3">
          <div className="col-md-3">
            <label htmlFor="wd-group" className="form-label">
              Assignment Group
            </label>
          </div>
          <div className="col-md-9">
            <select id="wd-group" className="form-control">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            </select>
          </div>
        </div>

        {/* Display Grade As */}
        <div className="row mb-3">
          <div className="col-md-3">
            <label htmlFor="wd-display-grade-as" className="form-label">
              Display Grade as
            </label>
          </div>
          <div className="col-md-9">
            <select id="wd-display-grade-as" className="form-control">
              <option value="Percentage">Percentage</option>
            </select>
          </div>
        </div>

        {/* Submission Type */}
        <div className="row mb-3">
          <div className="col-md-3">
            <label htmlFor="wd-submission-type" className="form-label">
              Submission Type
            </label>
          </div>
          <div className="col-md-9">
            <select id="wd-submission-type" className="form-control">
              <option value="Online">Online</option>
            </select>
            <fieldset className="mt-3">
              <legend>Online Entry Options</legend>
              <div>
                <label>
                  <input type="checkbox" id="wd-text-entry" className="me-2" />
                  Text Entry
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" id="wd-website-url" className="me-2" />
                  Website URL
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    id="wd-media-recordings"
                    className="me-2"
                  />
                  Media Recordings
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    id="wd-student-annotation"
                    className="me-2"
                  />
                  Student Annotation
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" id="wd-file-upload" className="me-2" />
                  File Uploads
                </label>
              </div>
            </fieldset>
          </div>
        </div>

        {/* Due Date */}
        <div className="row mb-3">
          <div className="col-md-3">
            <label htmlFor="wd-due-date" className="form-label">
              Due Date
            </label>
          </div>
          <div className="col-md-9">
            <input
              id="wd-due-date"
              type="datetime-local"
              className="form-control"
              defaultValue={assignment.dueDate}
            />
          </div>
        </div>

        {/* Available From */}
        <div className="row mb-3">
          <div className="col-md-3">
            <label htmlFor="wd-available-from" className="form-label">
              Available From
            </label>
          </div>
          <div className="col-md-9">
            <input
              id="wd-available-from"
              type="datetime-local"
              className="form-control"
              defaultValue={assignment.availableFrom}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-end">
          <Link
            to={`/Kambaz/Courses/${cid}/Assignments`}
            className="btn btn-secondary me-2"
          >
            Cancel
          </Link>
          <button type="submit" className="btn btn-success">Save</button>
        </div>
      </form>
    </div>
  );
}
