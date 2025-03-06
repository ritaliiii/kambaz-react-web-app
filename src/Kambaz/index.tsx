import { Routes, Route, Navigate } from 'react-router';
import Dashboard from './Dashboard';
import KambazNavigation from './Navigation';
import Courses from './Courses';
import Account from './Account';
import './styles.css';
import * as db from './Database';
import { useState } from 'react';
import store from './store';
import { Provider } from 'react-redux';
import ProtectedRoute from './Account/ProtectedRoute';
import { enrollCourse } from './enrollmentActions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function Kambaz() {
  const [courses, setCourses] = useState<any[]>(db.courses);
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [course, setCourse] = useState<any>({
    _id: '1234',
    name: 'New Course',
    number: 'New Number',
    startDate: '2023-09-10',
    endDate: '2023-12-15',
    description: 'New Description',
  });
  const addNewCourse = () => {
    const newCourse = {
      ...course,
      _id: new Date().getTime().toString(),
      name: course.name,
      description: course.description,
      image: '/images/CS1234.png',
    };
    setCourses([...courses, newCourse]);
    dispatch(enrollCourse(currentUser._id, newCourse._id));
  };
  const deleteCourse = (courseId: any) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <Provider store={store}>
      <div id="wd-kambaz">
        <KambazNavigation />
        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="Account" />} />
            <Route path="Account/*" element={<Account />} />
            <Route
              path="Dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard
                    courses={courses}
                    course={course}
                    setCourse={setCourse}
                    addNewCourse={addNewCourse}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="Courses/:cid/*"
              element={<Courses courses={courses} />}
            />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
