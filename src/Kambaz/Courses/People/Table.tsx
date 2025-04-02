import { FaUserCircle } from 'react-icons/fa';
import PeopleDetails from './Details';
import { Link } from 'react-router-dom';

export default function PeopleTable({ users = [] }: { users?: any[] }) {
  return (
    <div id="wd-people-table" style={{ padding: '20px' }}>
      <table className="table table-striped">
        <PeopleDetails />
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
            // Map through the filtered users to generate table rows for each user
            .map((user: any) => (
              <tr key={user._id}>
                {/* Full name column */}
                <td className="wd-full-name text-nowrap">
                  <Link
                    to={`/Kambaz/Account/Users/${user._id}`}
                    className="text-decoration-none"
                  >
                    {/* User icon */}
                    <FaUserCircle className="me-2 fs-1 text-secondary" />
                    {/* First and last name of the user */}
                    <span className="wd-first-name">{user.firstName}</span>
                    <span className="wd-last-name">{user.lastName}</span>
                  </Link>
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
