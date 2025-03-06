import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';

interface ProtectedRouteProps {
  children: JSX.Element;
  role?: string; // Optional role prop to check for specific roles
  checkEnrollment?: boolean; // Optional prop to check if the user is enrolled in the course
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  role,
  checkEnrollment,
}) => {
  const currentUser = useSelector(
    (state: any) => state.accountReducer.currentUser
  );
  const enrollments = useSelector(
    (state: any) => state.enrollmentReducer.enrollments
  );
  const { courseId } = useParams(); // Get the courseId from the URL

  // Redirect to sign-in if the user is not authenticated
  if (!currentUser) {
    return <Navigate to="/Kambaz/Account/Signin" />;
  }

  // If a role is specified and the current user's role doesn't match, return null or a placeholder
  if (role && currentUser.role !== role) {
    return null; // or return <></>; to render nothing
  }

  // If enrollment check is required and the user is not enrolled in the course, redirect to the dashboard
  if (checkEnrollment && currentUser.role === 'STUDENT') {
    const isEnrolled = enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser._id && enrollment.course === courseId
    );

    if (!isEnrolled) {
      return <Navigate to="/Kambaz/Dashboard" />;
    }
  }

  return children;
};

export default ProtectedRoute;
