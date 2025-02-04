import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import { Route, Routes } from "react-router";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import { useParams } from "react-router";

export default function Courses() {
  const { cid } = useParams();
  return (
    <div id="wd-courses">
        <h2 className="text-danger">
          <FaAlignJustify className="me-4 fs-4 mb-1" />
          Course {cid}</h2><hr />
          <div className="d-flex">
            <div className="d-none d-md-block">
              <CourseNavigation />
              </div>
              <div className="flex-fill">
              <Routes>
                <Route path="Home" element={<Home />} />
                <Route path="Modules" element={<Modules />} />
                <Route path="Assignments" element={<Assignments />} />
                <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                <Route path="People" element={<PeopleTable />} />
              </Routes>
              </div></div>
    </div>
  );
}