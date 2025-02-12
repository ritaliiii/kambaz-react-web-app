import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";
import { BsPlus } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import GreenCheckmark from "../Modules/GreenCheckmark";

export default function Assignments() {
  const assignment = db.assignments;
  const { cid } = useParams();
  const courseAssignments = assignment.filter((a) => a.course === cid); 

  return (
    <div id="wd-assignments" style={{ padding: "20px" }}>
      {/* Header */}
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h2 className="fw-bold">Assignments</h2>
        <div>
          <button className="btn btn-secondary me-2 d-flex align-items-center">
            <BsPlus className="me-1" /> Group
          </button>
          <button className="btn btn-success d-flex align-items-center">
            <BsPlus className="me-1" /> Assignment
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="input-group mb-4">
        <span className="input-group-text bg-white border-end-0">
          <FaSearch className="text-muted" />
        </span>
        <input
          type="text"
          className="form-control border-start-0"
          placeholder="Search for Assignments"
        />
      </div>

      {/* Assignments Section */}
      <div>
        <h3 className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
          <span>ASSIGNMENTS</span>
          <div className="d-flex align-items-center">
            <GreenCheckmark />
          </div>
        </h3>

        {/* Assignment List */}
        <ul className="list-group">
          {courseAssignments.map((assignment) => (
            <li key={assignment._id} className="list-group-item d-flex align-items-start">
              <div
                className="border-start border-success border-4 me-3"
                style={{ height: "100%" }}
              ></div>
              <div className="flex-grow-1">
                <h5 className="mb-1">
                  <Link
                    to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                    className="text-decoration-none text-dark"
                  >
                    {assignment.title}
                  </Link>
                </h5>
                <p className="text-muted mb-1 small">
                  Due {assignment.dueDate} | {assignment.points} points
                </p>
                <p className="text-muted small">
                  Not available until {assignment.availableFrom}
                </p>
              </div>
              <div className="d-flex align-items-center">
                <GreenCheckmark />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
