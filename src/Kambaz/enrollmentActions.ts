export const enrollCourse = (userId: string, courseId: string) => ({
  type: 'ENROLL_COURSE',
  payload: { _id: Date.now().toString(), user: userId, course: courseId }, // Simulate unique ID
});

export const unenrollCourse = (userId: string, courseId: string) => ({
  type: 'UNENROLL_COURSE',
  payload: { user: userId, course: courseId },
});

export const toggleShowAllCourses = () => ({
  type: 'TOGGLE_SHOW_ALL_COURSES',
});
