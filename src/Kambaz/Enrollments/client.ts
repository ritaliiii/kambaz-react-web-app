import axios from 'axios';
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/enrollments`;

export const enrollCourse = async (userId: string, courseId: string) => {
  const response = await axios.post(`${ENROLLMENTS_API}/enroll`, {
    userId,
    courseId,
  });
  return response.data;
};

export const unenrollCourse = async (userId: string, courseId: string) => {
  const response = await axios.post(`${ENROLLMENTS_API}/unenroll`, {
    userId,
    courseId,
  });
  return response.data;
};

export const findEnrollmentsByUser = async (userId: string) => {
  const response = await axios.get(`${ENROLLMENTS_API}/user/${userId}`);
  return response.data;
};
