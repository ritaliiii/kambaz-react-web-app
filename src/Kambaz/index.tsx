import { Routes, Route, Navigate } from 'react-router';
import Dashboard from './Dashboard';
import KambazNavigation from './Navigation';
import Courses from './Courses';
import Account from './Account';
import './styles.css';
import { useState, useEffect } from 'react';
import store from './store';
import { Provider } from 'react-redux';
import ProtectedRoute from './Account/ProtectedRoute';
// import { enrollCourse } from './enrollmentActions';
// import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Session from './Account/Session';
import * as userClient from './Account/client';
import * as courseClient from './Courses/client';
import { v4 as uuidv4 } from 'uuid';

export default function Kambaz() {
  const [enrolledCourses, setEnrolledCourses] = useState<any[]>([]);
  const [allCourses, setAllCourses] = useState<any[]>([]);
  // const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [course, setCourse] = useState<any>({
    _id: uuidv4(),
    name: 'New Course',
    number: 'New Number',
    startDate: '2023-09-10',
    endDate: '2023-12-15',
    description: 'New Description',
  });
  const addNewCourse = async () => {
    const newCourse = await courseClient.createCourse(course);
    setAllCourses([...allCourses, newCourse]);
  };
  const deleteCourse = async (courseId: string) => {
    const status = await courseClient.deleteCourse(courseId);
    setEnrolledCourses(
      enrolledCourses.filter((course) => course._id !== courseId)
    );
    fetchAllCourses();
  };
  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    setEnrolledCourses(
      enrolledCourses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
    fetchAllCourses();
  };
  const fetchEnrolledCourses = async () => {
    try {
      const enrolledCourses = await userClient.findMyCourses();
      // const enrolledCourses = await courseClient.
      setEnrolledCourses(enrolledCourses);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchAllCourses = async () => {
    try {
      //TODO
      const allCourses = await courseClient.fetchAllCourses();
      setAllCourses(allCourses);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchEnrolledCourses();
    fetchAllCourses();
  }, [currentUser]);

  return (
    <Session>
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
                      enrolledCourses={enrolledCourses}
                      allCourses={allCourses}
                      course={course}
                      setCourse={setCourse}
                      addNewCourse={addNewCourse}
                      deleteCourse={deleteCourse}
                      updateCourse={updateCourse}
                      fetchEnrolledCourses={fetchEnrolledCourses}
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path="Courses/:cid/*"
                element={<Courses courses={enrolledCourses} />}
              />
            </Routes>
          </div>
        </div>
      </Provider>
    </Session>
  );
}
