const initialState = {
  enrollments: [
    { _id: '1', user: '123', course: 'RS101' },
    { _id: '2', user: '234', course: 'RS101' },
    { _id: '3', user: '345', course: 'RS101' },
    { _id: '4', user: '456', course: 'RS101' },
    { _id: '5', user: '567', course: 'RS101' },
    { _id: '6', user: '234', course: 'RS102' },
    { _id: '7', user: '789', course: 'RS102' },
    { _id: '8', user: '890', course: 'RS102' },
    { _id: '9', user: '123', course: 'RS102' },
  ], // Initial enrollment data
  showAllCourses: false,
};

export default function enrollmentReducer(state = initialState, action: any) {
  switch (action.type) {
    case 'ENROLL_COURSE':
      return {
        ...state,
        enrollments: [...state.enrollments, action.payload],
      };
    case 'UNENROLL_COURSE':
      return {
        ...state,
        enrollments: state.enrollments.filter(
          (enrollment) =>
            !(
              enrollment.user === action.payload.user &&
              enrollment.course === action.payload.course
            )
        ),
      };
    case 'TOGGLE_SHOW_ALL_COURSES':
      return {
        ...state,
        showAllCourses: !state.showAllCourses,
      };
    default:
      return state;
  }
}
