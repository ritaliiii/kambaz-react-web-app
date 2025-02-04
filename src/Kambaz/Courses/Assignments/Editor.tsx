export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" style={{ padding: "20px" }}>
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-3">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#/Kambaz/Courses/1234/Assignments">Assignments</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            A1 - ENV + HTML
          </li>
        </ol>
      </nav>

      <form>
        {/* Assignment Name */}
        <div className="row mb-3">
          <div className="col-md-3">
            <label htmlFor="wd-name" className="form-label">
              Assignment Name
            </label>
          </div>
          <div className="col-md-9">
            <input
              id="wd-name"
              type="text"
              className="form-control"
              defaultValue="A1"
            />
          </div>
        </div>

        {/* Description */}
        <div className="row mb-3">
          <div className="col-md-3">
            <label htmlFor="wd-description" className="form-label">
              Description
            </label>
          </div>
          <div className="col-md-9">
            <textarea
              id="wd-description"
              className="form-control"
              rows={5}
              defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following:
- Your full name and section
- Links to each of the tab assignments
- Links to relevant source code repositories."
            ></textarea>
          </div>
        </div>

        {/* Points */}
        <div className="row mb-3">
          <div className="col-md-3">
            <label htmlFor="wd-points" className="form-label">
              Points
            </label>
          </div>
          <div className="col-md-9">
            <input
              id="wd-points"
              type="number"
              className="form-control"
              defaultValue={100}
            />
          </div>
        </div>

        {/* Assignment Group */}
        <div className="row mb-3">
          <div className="col-md-3">
            <label htmlFor="wd-group" className="form-label">
              Assignment Group
            </label>
          </div>
          <div className="col-md-9">
            <select id="wd-group" className="form-control">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            </select>
          </div>
        </div>

        {/* Display Grade As */}
        <div className="row mb-3">
          <div className="col-md-3">
            <label htmlFor="wd-display-grade-as" className="form-label">
              Display Grade as
            </label>
          </div>
          <div className="col-md-9">
            <select id="wd-display-grade-as" className="form-control">
              <option value="Percentage">Percentage</option>
            </select>
          </div>
        </div>

        {/* Submission Type */}
        <div className="row mb-3">
          <div className="col-md-3">
            <label htmlFor="wd-submission-type" className="form-label">
              Submission Type
            </label>
          </div>
          <div className="col-md-9">
            <select id="wd-submission-type" className="form-control">
              <option value="Online">Online</option>
            </select>
            <fieldset className="mt-3">
              <legend>Online Entry Options</legend>
              <div>
                <label>
                  <input type="checkbox" id="wd-text-entry" className="me-2" />
                  Text Entry
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" id="wd-website-url" className="me-2" />
                  Website URL
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    id="wd-media-recordings"
                    className="me-2"
                  />
                  Media Recordings
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    id="wd-student-annotation"
                    className="me-2"
                  />
                  Student Annotation
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" id="wd-file-upload" className="me-2" />
                  File Uploads
                </label>
              </div>
            </fieldset>
          </div>
        </div>

        {/* Assign To */}
        <div className="row mb-3">
          <div className="col-md-3">
            <label htmlFor="wd-assign-to" className="form-label">
              Assign to
            </label>
          </div>
          <div className="col-md-9">
            <select id="wd-assign-to" className="form-control">
              <option value="Everyone">Everyone</option>
            </select>
          </div>
        </div>

        {/* Due Date */}
        <div className="row mb-3">
          <div className="col-md-3">
            <label htmlFor="wd-due-date" className="form-label">
              Due
            </label>
          </div>
          <div className="col-md-9">
            <input
              id="wd-due-date"
              type="datetime-local"
              className="form-control"
              defaultValue="2024-05-13T23:59"
            />
          </div>
        </div>

        {/* Available From */}
        <div className="row mb-3">
          <div className="col-md-3">
            <label htmlFor="wd-available-from" className="form-label">
              Available from
            </label>
          </div>
          <div className="col-md-9">
            <input
              id="wd-available-from"
              type="datetime-local"
              className="form-control"
              defaultValue="2024-05-06T00:00"
            />
          </div>
        </div>

        {/* Available Until */}
        <div className="row mb-3">
          <div className="col-md-3">
            <label htmlFor="wd-available-until" className="form-label">
              Until
            </label>
          </div>
          <div className="col-md-9">
            <input
              id="wd-available-until"
              type="datetime-local"
              className="form-control"
              defaultValue="2024-05-20T23:59"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-end">
          <button className="btn btn-secondary me-2">Cancel</button>
          <button className="btn btn-success">Save</button>
        </div>
      </form>
    </div>
  );
}
