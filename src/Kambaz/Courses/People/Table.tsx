import { FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import * as db from "../../Database";

export default function PeopleTable() {
  const { cid } = useParams();
  const { users, enrollments } = db;

  return (
    <div id="wd-people-table" style={{ padding: "20px" }}>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
          <tbody>
            {users
              .filter((usr) =>
                enrollments.some(
                  (enrollment) =>
                    enrollment.user === usr._id && enrollment.course === cid
                )
              )
              // Map through the filtered users to generate table rows for each user
              .map((user: any) => (
                <tr key={user._id}>
                  {/* Full name column */}
                  <td className="wd-full-name text-nowrap">
                    {/* User icon */}
                    <FaUserCircle className="me-2 fs-1 text-secondary" />
                    {/* First and last name of the user */}
                    <span className="wd-first-name">{user.firstName}</span>
                    <span className="wd-last-name">{user.lastName}</span>
                  </td>
                  
                  {/* Login ID column */}
                  <td className="wd-login-id">{user.loginId}</td>
                  
                  {/* Section column */}
                  <td className="wd-section">{user.section}</td>
                  
                  {/* Role column */}
                  <td className="wd-role">{user.role}</td>
                  
                  {/* Last activity column */}
                  <td className="wd-last-activity">{user.lastActivity}</td>
                  
                  {/* Total activity column */}
                  <td className="wd-total-activity">{user.totalActivity}</td>
                </tr>
              ))}
          </tbody>
      </table>
    </div>
  );
}
