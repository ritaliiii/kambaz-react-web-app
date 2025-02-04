import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";

export default function Modules() {
  return (
    <div id="wd-modules" className="list-group rounded-0">
      <ModulesControls />
      <br /><br /><br /><br />

      {/* Week 1 */}
      <div className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
        <div className="d-flex justify-content-between align-items-center">
          <div className="wd-title p-3 ps-2 bg-secondary">Week 1</div>
          <ModuleControlButtons />
        </div>
        <ul className="wd-lessons list-group rounded-0">
          <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between">
            <span>LEARNING OBJECTIVES</span>
            <LessonControlButtons />
          </li>
          <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between">
            <span>Introduction to the course</span>
            <LessonControlButtons />
          </li>
          <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between">
            <span>Learn what is Web Development</span>
            <LessonControlButtons />
          </li>
          <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between">
            <span>LESSON 1</span>
            <LessonControlButtons />
          </li>
        </ul>
      </div>

      {/* Week 2 */}
      <div className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
        <div className="d-flex justify-content-between align-items-center">
          <div className="wd-title p-3 ps-2 bg-secondary">Week 2</div>
          <ModuleControlButtons />
        </div>
        <ul className="wd-lessons list-group rounded-0">
          <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between">
            <span>LEARNING OBJECTIVES</span>
            <LessonControlButtons />
          </li>
          <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between">
            <span>LESSON 1</span>
            <LessonControlButtons />
          </li>
          <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between">
            <span>LESSON 2</span>
            <LessonControlButtons />
          </li>
        </ul>
      </div>
    </div>
  );
}
