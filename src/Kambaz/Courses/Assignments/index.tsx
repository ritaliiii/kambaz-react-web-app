import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BsPlus, BsPencil, BsTrash } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';
import GreenCheckmark from '../Modules/GreenCheckmark';
import ProtectedRoute from '../../Account/ProtectedRoute';
import { deleteAssignment, updateAssignment } from './reducer';
import { Modal, Button } from 'react-bootstrap'; // Import Modal and Button from react-bootstrap
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Assignments() {
  type Assignment = {
    _id: string;
    title: string;
    course: string;
    dueDate: string;
    points: string;
    availableFrom: string;
    description: string;
  };

  const { cid } = useParams();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const assignmentsForThisCourse = assignments.filter(
    (assignment: any) => assignment.course === cid
  );
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] =
    useState<Assignment | null>(null);

  // Function to handle deleting an assignment
  const handleDeleteAssignment = (assignmentId: string) => {
    // Open modal with assignment to delete
    const assignmentToDelete = assignments.find(
      (a: Assignment) => a._id === assignmentId
    );
    if (assignmentToDelete) {
      setAssignmentToDelete(assignmentToDelete);
      setIsModalOpen(true);
    }
  };

  // Function to handle updating an assignment
  const handleUpdateAssignment = (assignment: Assignment) => {
    const updatedAssignment = { ...assignment, title: 'Updated Title' }; // Example change
    dispatch(updateAssignment(updatedAssignment));
  };

  const confirmDelete = () => {
    if (assignmentToDelete) {
      // Dispatch delete action
      dispatch(deleteAssignment(assignmentToDelete));
      setIsModalOpen(false);
      navigate(`/Kambaz/Courses/${cid}/Assignments`);
    }
  };

  // Function to cancel the delete action
  const cancelDelete = () => {
    setAssignmentToDelete(null); // Reset the assignment to delete
    setIsModalOpen(false); // Close the modal without deleting
  };

  return (
    <div id="wd-assignments" style={{ padding: '20px' }}>
      <div className="d-flex align-items-center mb-4">
        <div className="flex-grow-1 me-2">
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0">
              <FaSearch className="text-muted" />
            </span>
            <input
              type="text"
              className="form-control border-start-0"
              placeholder="Search for Assignments"
            />
          </div>
        </div>
        <ProtectedRoute role="FACULTY">
          <div className="d-flex gap-2">
            <button className="btn btn-outline-secondary d-flex align-items-center">
              <BsPlus className="me-1" /> Group
            </button>
            <Link
              to={`/Kambaz/Courses/${cid}/Assignments/new`}
              className="btn btn-danger d-flex align-items-center text-white"
            >
              <BsPlus className="me-1" /> Assignment
            </Link>
          </div>
        </ProtectedRoute>
      </div>

      <div>
        <h3 className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
          <span>ASSIGNMENTS</span>
        </h3>
        <ul className="list-group">
          {assignmentsForThisCourse.map(
            (assignment: typeof assignmentsForThisCourse) => (
              <li
                key={assignment._id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
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
                  <ProtectedRoute role="FACULTY">
                    <button
                      className="btn btn-primary me-2"
                      onClick={() => handleUpdateAssignment(assignment)}
                    >
                      <BsPencil />
                    </button>
                  </ProtectedRoute>
                  <ProtectedRoute role="FACULTY">
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeleteAssignment(assignment._id)}
                    >
                      <BsTrash />
                    </button>
                  </ProtectedRoute>
                </div>
              </li>
            )
          )}
        </ul>
      </div>

      {/* React-Bootstrap Modal for delete confirmation */}
      <Modal show={isModalOpen} onHide={cancelDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete the assignment:{' '}
          {assignmentToDelete?.title}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cancelDelete}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
