import { Link, useLocation } from "react-router-dom";

type CourseNavigationProps = {
  id: string; // Ensure the id is always a string
};
export default function CourseNavigation({ id }: CourseNavigationProps) {
  // const { id } = useParams(); 
  const { pathname } = useLocation(); 

  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const linkPath = `/Kambaz/Courses/${id}/${link}`;
        const isActive = pathname === linkPath;

        return (
          <Link
            key={link}
            to={linkPath}
            id={`wd-course-${link.toLowerCase()}-link`}
            className={`list-group-item border border-0 ${isActive ? "active bg-primary text-white" : "text-danger"}`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}
