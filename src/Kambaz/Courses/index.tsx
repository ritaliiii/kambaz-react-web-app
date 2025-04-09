import CourseNavigation from './Navigation';
import Modules from './Modules';
import Home from './Home';
import { Route, Routes, useParams, useLocation } from 'react-router';
import Assignments from './Assignments';
import AssignmentEditor from './Assignments/Editor';
import { FaAlignJustify } from 'react-icons/fa';
import PeopleTable from './People/Table';
import { findUsersForCourse } from './client';
import { useEffect, useState } from 'react';

export default function Courses({ courses }: { courses: any[] }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      const users = await findUsersForCourse(course._id);
      setPeople(users);
    };

    if (course) {
      fetchPeople();
    }
  }, [course]);

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name}&gt; {pathname.split('/')[4]}
      </h2>
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation id={cid || ''} />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/new"
              element={<AssignmentEditor createNew={true} />}
            />
            <Route
              path="Assignments/:aid"
              element={<AssignmentEditor createNew={false} />}
            />
            <Route path="People" element={<PeopleTable users={people} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
