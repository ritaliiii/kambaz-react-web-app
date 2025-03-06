import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import ProtectedRoute from "../../Account/ProtectedRoute";

export default function CourseStatus() {
  return (
    <ProtectedRoute role="FACULTY">
    <div id="wd-course-status" style={{ width: "300px" }}>
      <h2>Course Status</h2>
      <div>
      <div className="d-flex flex-column">
        <div className="mb-2">
          <button className="btn btn-secondary w-100 text-nowrap d-flex align-items-center">
            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish
          </button>
        </div>
        <div className="mb-2">
          <button className="btn btn-success w-100 text-nowrap d-flex align-items-center">
            <FaCheckCircle className="me-2 fs-5" /> Publish
          </button>
        </div>
        <div className="mb-2">
          <button className="btn btn-secondary w-100 text-nowrap d-flex align-items-center">
            <BiImport className="me-2 fs-5" /> Import Existing Content
          </button>
        </div>
        <div className="mb-2">
          <button className="btn btn-secondary w-100 text-nowrap d-flex align-items-center">
            <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons
          </button>
        </div>
        </div>
        <div className="mb-2">
          <button className="btn btn-secondary w-100 text-nowrap d-flex align-items-center">
            <MdDoNotDisturbAlt className="me-2 fs-5" /> View Course Notifications
          </button>
        </div>
        </div>
      </div>
      </ProtectedRoute>
  );
}