import { useParams } from "react-router";
import Modules from "../Modules";
import CourseStatus from "./Status";


export default function Home() {
  const { cid } = useParams(); 
  return (
    <div className="d-flex" id="wd-home">
      <div className="flex-fill">
          <Modules />
        </div>
        <div className="d-none d-md-block">
          <CourseStatus />
        </div>
      </div>
);}