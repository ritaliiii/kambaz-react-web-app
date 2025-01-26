export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <table> 
            <tr>
                <td align="right" valign="top">
                    <label htmlFor="wd-points">Points</label>
                    </td> 
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
            </tr>
            <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option value="Percentage">Percentage</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option value="Online">Online</option>
                        </select>
                        <fieldset>
                            <legend>Online Entry Options</legend>
                            <label htmlFor="wd-text-entry">
                                <input id="wd-text-entry" type="checkbox" /> Text Entry
                            </label><br />
                            <label htmlFor="wd-website-url">
                                <input id="wd-website-url" type="checkbox" /> Website URL
                            </label><br />
                            <label htmlFor="wd-media-recordings">
                                <input id="wd-media-recordings" type="checkbox" /> Media Recordings
                            </label><br />
                            <label htmlFor="wd-student-annotation">
                                <input id="wd-student-annotation" type="checkbox" /> Student Annotation
                            </label><br />
                            <label htmlFor="wd-file-upload">
                                <input id="wd-file-upload" type="checkbox" /> File Uploads
                            </label>
                        </fieldset>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign to</label>
                    </td>
                    <td>
                        <select id="wd-assign-to">
                            <option value="Everyone">Everyone</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-due-date">Due</label>
                    </td>
                    <td>
                        <input id="wd-due-date" type="date" value="2024-05-13" />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-available-from">Available from</label>
                    </td>
                    <td>
                        <input id="wd-available-from" type="date" value="2024-05-06" />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-available-until">Until</label>
                    </td>
                    <td>
                        <input id="wd-available-until" type="date" value="2024-05-20" />
                    </td>
                </tr>
            </table>
            <br />
            <button>Cancel</button>
            <button>Save</button>
    </div>
);}