import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
export default function KambazNavigation() {
  return (
    <div>
      <div
        id="wd-courses-navigation"
        style={{ width: 120 }}
        className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
      >
        {/* Northeastern Logo */}
        <a
          id="wd-neu-link"
          target="_blank"
          href="https://www.northeastern.edu/"
          className="list-group-item bg-black border-0 text-center"
        >
          <img src="/images/NEU.png" width="75px" />
        </a>
        
         {/* Account Link */}
         <NavLink
          to="/Kambaz/Account"
          id="wd-account-link"
          className={({ isActive }) =>
            `list-group-item text-center border-0 ${isActive ? "bg-white text-danger" : "bg-black text-white"}`
          }
        >
          <FaRegCircleUser className="fs-1" />
          <br />
          Account
        </NavLink>

        {/* Dashboard Link */}
        <NavLink
          to="/Kambaz/Dashboard"
          id="wd-dashboard-link"
          className={({ isActive }) =>
            `list-group-item text-center border-0 ${isActive ? "bg-white text-danger" : "bg-black text-white"}`
          }
        >
          <AiOutlineDashboard className="fs-1" />
          <br />
          Dashboard
        </NavLink>

        {/* Courses Link */}
        <NavLink
          to="/Kambaz/Courses"
          id="wd-course-link"
          className={({ isActive }) =>
            `list-group-item text-center border-0 ${isActive ? "bg-white text-danger" : "bg-black text-white"}`
          }
        >
          <LiaBookSolid className="fs-1" />
          <br />
          Courses
        </NavLink>

        {/* Calendar Link */}
        <NavLink
          to="/Kambaz/Calendar"
          id="wd-calendar-link"
          className={({ isActive }) =>
            `list-group-item text-center border-0 ${isActive ? "bg-white text-danger" : "bg-black text-white"}`
          }
        >
          <IoCalendarOutline className="fs-1" />
          <br />
          Calendar
        </NavLink>

        {/* Inbox Link */}
        <NavLink
          to="/Kambaz/Inbox"
          id="wd-inbox-link"
          className={({ isActive }) =>
            `list-group-item text-center border-0 ${isActive ? "bg-white text-danger" : "bg-black text-white"}`
          }
        >
          <FaInbox className="fs-1" />
          <br />
          Inbox
        </NavLink>

        {/* Labs Link */}
        <NavLink
          to="/Labs"
          id="wd-labs-link"
          className={({ isActive }) =>
            `list-group-item text-center border-0 ${isActive ? "bg-white text-danger" : "bg-black text-white"}`
          }
        >
          <LiaCogSolid className="fs-1" />
          <br />
          Labs
        </NavLink>

      </div>
    </div>
);
}