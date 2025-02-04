import React from "react";
import { BsPlus } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";

export default function Assignments() {
  return (
    <div id="wd-assignments" style={{ padding: "20px" }}>
      {/* Header */}
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h2 className="fw-bold">Assignments</h2>
        <div>
          <button className="btn btn-secondary me-2 d-flex align-items-center">
            <BsPlus className="me-1" /> Group
          </button>
          <button className="btn btn-success d-flex align-items-center">
            <BsPlus className="me-1" /> Assignment
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="input-group mb-4">
        <span className="input-group-text bg-white border-end-0">
          <FaSearch className="text-muted" />
        </span>
        <input
          type="text"
          className="form-control border-start-0"
          placeholder="Search for Assignments"
        />
      </div>

      {/* Assignments Section */}
      <div>
        <h3 className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
          <span>ASSIGNMENTS 40% of Total</span>
          <div className="d-flex align-items-center">
            <GreenCheckmark />
            <BsPlus className="fs-5 text-secondary ms-2" />
          </div>
        </h3>

        {/* Assignment List */}
        <ul className="list-group">
          {/* Assignment 1 */}
          <li className="list-group-item d-flex align-items-start">
            <div
              className="border-start border-success border-4 me-3"
              style={{ height: "100%" }}
            ></div>
            <div className="flex-grow-1">
              <h5 className="mb-1">
                <a
                  href="#/Kambaz/Courses/1234/Assignments/123"
                  className="text-decoration-none text-dark"
                >
                  A1
                </a>
              </h5>
              <p className="text-muted mb-1 small">
                Due May 13, 2024, 11:59 PM | 100 points
              </p>
              <p className="text-muted small">Not available until May 6 at 12:00 AM</p>
            </div>
            <div className="d-flex align-items-center">
              <GreenCheckmark />
              <IoEllipsisVertical className="text-muted fs-4 ms-2" />
            </div>
          </li>

          {/* Assignment 2 */}
          <li className="list-group-item d-flex align-items-start">
            <div
              className="border-start border-success border-4 me-3"
              style={{ height: "100%" }}
            ></div>
            <div className="flex-grow-1">
              <h5 className="mb-1">
                <a
                  href="#/Kambaz/Courses/1234/Assignments/124"
                  className="text-decoration-none text-dark"
                >
                  A2
                </a>
              </h5>
              <p className="text-muted mb-1 small">
                Due May 20, 2024, 11:59 PM | 100 points
              </p>
              <p className="text-muted small">Not available until May 13 at 12:00 AM</p>
            </div>
            <div className="d-flex align-items-center">
              <GreenCheckmark />
              <IoEllipsisVertical className="text-muted fs-4 ms-2" />
            </div>
          </li>

          {/* Assignment 3 */}
          <li className="list-group-item d-flex align-items-start">
            <div
              className="border-start border-success border-4 me-3"
              style={{ height: "100%" }}
            ></div>
            <div className="flex-grow-1">
              <h5 className="mb-1">
                <a
                  href="#/Kambaz/Courses/1234/Assignments/125"
                  className="text-decoration-none text-dark"
                >
                  A3
                </a>
              </h5>
              <p className="text-muted mb-1 small">
                Due May 27, 2024, 11:59 PM | 100 points
              </p>
              <p className="text-muted small">Not available until May 20 at 12:00 AM</p>
            </div>
            <div className="d-flex align-items-center">
              <GreenCheckmark />
              <IoEllipsisVertical className="text-muted fs-4 ms-2" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
