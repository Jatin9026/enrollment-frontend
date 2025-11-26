import { FaUser, FaBook } from "react-icons/fa";
import "./EnrollmentList.css";

export default function EnrollmentList({ enrollments }) {
  return (
    <div className="card enrollment-list">
      <h3>All Enrollments</h3>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Student</th>
              <th>Course</th>
            </tr>
          </thead>
          <tbody>
            {enrollments.length === 0 ? (
              <tr>
                <td colSpan="3" className="no-data">No enrollments yet. Enroll a student above!</td>
              </tr>
            ) : (
              enrollments.map((e) => (
                <tr key={e.enrollment_id}>
                  <td><span className="id-badge">{e.enrollment_id}</span></td>
                  <td className="student-cell">
                    <FaUser className="icon" /> {e.student}
                  </td>
                  <td className="course-cell">
                    <FaBook className="icon" /> {e.course}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
