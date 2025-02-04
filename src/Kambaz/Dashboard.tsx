import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      
      {/* Published Courses subtitle */}
      <h2 id="wd-dashboard-published">Published Courses (12)</h2>
      <hr />

      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          
          {/* CS1234 React JS */}
          <div className="wd-dashboard-course col" style={{ width: "260px", minWidth: "250px", maxWidth: "270px" }}>
            <div className="card rounded-3 overflow-hidden shadow-sm">
              <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <img src="/images/CS1234.png" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS1234 React JS</h5>
                  <p className="wd-dashboard-course-title card-text">Fall 2024, Section 1</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          {/* CS1235 Data Mining */}
          <div className="wd-dashboard-course col" style={{ width: "260px", minWidth: "250px", maxWidth: "270px" }}>
            <div className="card rounded-3 overflow-hidden shadow-sm">
              <Link to="/Kambaz/Courses/1235/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <img src="/images/CS1235.png" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS1235 Data Mining</h5>
                  <p className="wd-dashboard-course-title card-text">Spring 2024, Section 2</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          {/* CS1236 Intro to Data Management */}
          <div className="wd-dashboard-course col" style={{ width: "260px", minWidth: "250px", maxWidth: "270px" }}>
            <div className="card rounded-3 overflow-hidden shadow-sm">
              <Link to="/Kambaz/Courses/1236/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <img src="/images/CS1236.png" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS1236 Data Management</h5>
                  <p className="wd-dashboard-course-title card-text">Summer 2024, Section 3</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          {/* CS1237 Algorithms */}
          <div className="wd-dashboard-course col" style={{ width: "260px", minWidth: "250px", maxWidth: "270px" }}>
            <div className="card rounded-3 overflow-hidden shadow-sm">
              <Link to="/Kambaz/Courses/1237/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <img src="/images/CS1237.png" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS1237 Algorithms</h5>
                  <p className="wd-dashboard-course-title card-text">Fall 2023, Section 1</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          {/* CS1238 Object Oriented Design */}
          <div className="wd-dashboard-course col" style={{ width: "260px", minWidth: "250px", maxWidth: "270px" }}>
            <div className="card rounded-3 overflow-hidden shadow-sm">
              <Link to="/Kambaz/Courses/1238/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <img src="/images/CS1238.png" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS1238 Object Oriented Design</h5>
                  <p className="wd-dashboard-course-title card-text">Spring 2023, Section 2</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          {/* CS1239 Data Structure */}
          <div className="wd-dashboard-course col" style={{ width: "260px", minWidth: "250px", maxWidth: "270px" }}>
            <div className="card rounded-3 overflow-hidden shadow-sm">
              <Link to="/Kambaz/Courses/1239/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <img src="/images/CS1239.png" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS1239 Data Structure</h5>
                  <p className="wd-dashboard-course-title card-text">Summer 2023, Section 3</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          {/* CS1240 Discrete Structures */}
          <div className="wd-dashboard-course col" style={{ width: "260px", minWidth: "250px", maxWidth: "270px" }}>
            <div className="card rounded-3 overflow-hidden shadow-sm">
              <Link to="/Kambaz/Courses/1240/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <img src="/images/CS1240.png" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS1240 Discrete Structures</h5>
                  <p className="wd-dashboard-course-title card-text">Fall 2022, Section 4</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
