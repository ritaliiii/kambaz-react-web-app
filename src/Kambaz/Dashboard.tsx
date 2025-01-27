import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/CS1234.png" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
        <Link to="/Kambaz/Courses/1235/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/CS1235.png" width={200} />
            <div>
              <h5> CS1235 Data Mining </h5>
              <p className="wd-dashboard-course-title">
                Data Science </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
        <Link to="/Kambaz/Courses/1236/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/CS1236.png" width={200} />
            <div>
              <h5> CS1236 Intro to Data Management </h5>
              <p className="wd-dashboard-course-title">
                Data Management </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
        <Link to="/Kambaz/Courses/1237/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/CS1237.png" width={200} />
            <div>
              <h5> CS1237 Algorithms </h5>
              <p className="wd-dashboard-course-title">
                Algorithms </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
        <Link to="/Kambaz/Courses/1238/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/CS1238.png" width={200} />
            <div>
              <h5> CS1238 Object Oriented Design </h5>
              <p className="wd-dashboard-course-title">
                OOD </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
        <Link to="/Kambaz/Courses/1239/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/CS1239.png" width={200} />
            <div>
              <h5> CS1239 Data Structure </h5>
              <p className="wd-dashboard-course-title">
                Data Structure, Algorithms </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
        <Link to="/Kambaz/Courses/1240/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/CS1240.png" width={200} />
            <div>
              <h5> CS1240 Discrete Structures </h5>
              <p className="wd-dashboard-course-title">
                Discrete Structures </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
);}
