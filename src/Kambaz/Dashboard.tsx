import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProtectedRoute from './Account/ProtectedRoute';
import { FormControl } from 'react-bootstrap';
import { enrollCourse, unenrollCourse } from './Enrollments/client';

export default function Dashboard({
  enrolledCourses,
  allCourses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
  fetchEnrolledCourses,
}: {
  enrolledCourses: any[];
  allCourses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: () => void;
  fetchEnrolledCourses: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const { showAllCourses } = useSelector(
    (state: any) => state.enrollmentReducer
  );
  // Added new state
  const dispatch = useDispatch();

  // Toggle between showing all courses and enrolled courses
  const handleToggleShowAllCourses = () => {
    dispatch({ type: 'TOGGLE_SHOW_ALL_COURSES' });
  };

  // Handle enrollment/unenrollment
  const handleEnrollment = async (courseId: string, isEnrolled: boolean) => {
    if (isEnrolled) {
      await unenrollCourse(currentUser._id, courseId);
    } else {
      await enrollCourse(currentUser._id, courseId);
    }
    await fetchEnrolledCourses();
  };

  const filteredCourses = showAllCourses ? allCourses : enrolledCourses;

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <ProtectedRoute role="FACULTY">
        <div>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />
          <FormControl
            value={course.name}
            className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <FormControl
            as="textarea"
            value={course.description}
            rows={3}
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <hr />
        </div>
      </ProtectedRoute>
      {/* Enrollments Toggle Button for Students */}
      {currentUser.role === 'STUDENT' && (
        <button
          className="btn btn-primary float-end"
          onClick={handleToggleShowAllCourses}
        >
          {showAllCourses ? 'Show Enrolled Courses' : 'Show All Courses'}
        </button>
      )}
      <h2 id="wd-dashboard-published">Published Courses</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {filteredCourses?.map((course) => {
            const isEnrolled = enrolledCourses.some(
              (enrolledCourse) => enrolledCourse._id === course._id
            );

            return (
              <div
                className="wd-dashboard-course col"
                style={{ width: '300px' }}
                key={course._id}
              >
                <div className="card rounded-3 overflow-hidden">
                  <Link
                    to={`/Kambaz/Courses/${course._id}`}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
                    <img
                      src={course.image || '/images/CS1234.png'}
                      alt={course.name}
                      width="100%"
                      height={160}
                    />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">
                        {course.name}
                      </h5>
                      <p
                        className="wd-dashboard-course-title card-text overflow-y-hidden"
                        style={{ maxHeight: '100px' }}
                      >
                        {course.description}
                      </p>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginTop: '10px',
                        }}
                      >
                        <button className="btn btn-primary">Go</button>
                        <ProtectedRoute role="FACULTY">
                          <div style={{ display: 'flex', gap: '10px' }}>
                            <button
                              id="wd-edit-course-click"
                              className="btn btn-warning me-2"
                              onClick={(event) => {
                                event.preventDefault();
                                setCourse(course);
                              }}
                            >
                              Edit
                            </button>
                            <button
                              id="wd-delete-course-click"
                              className="btn btn-danger"
                              onClick={(event) => {
                                event.preventDefault();
                                deleteCourse(course._id);
                              }}
                            >
                              Delete
                            </button>
                          </div>
                        </ProtectedRoute>
                      </div>
                    </div>
                  </Link>

                  {/* Enrollment/Unenrollment Button for Students */}
                  {currentUser.role === 'STUDENT' && (
                    <button
                      className={`btn ${
                        isEnrolled ? 'btn-danger' : 'btn-success'
                      }`}
                      onClick={(event) => {
                        event.preventDefault();
                        handleEnrollment(course._id, isEnrolled);
                      }}
                    >
                      {isEnrolled ? 'Unenroll' : 'Enroll'}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
