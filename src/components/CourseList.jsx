import api from "../api";
import { FaTrash } from "react-icons/fa";
import "./CourseList.css";

export default function CourseList({ courses, refresh }) {
  const deleteCourse = async (id) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      await api.delete(`/courses/${id}`);
      refresh();
    }
  };

  return (
    <div className="card course-list">
      <h3>All Courses</h3>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Course Name</th>
              <th>Credit Hours</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {courses.length === 0 ? (
              <tr>
                <td colSpan="4" className="no-data">No courses found. Add your first course above!</td>
              </tr>
            ) : (
              courses.map((c) => (
                <tr key={c.course_id}>
                  <td><span className="id-badge">{c.course_id}</span></td>
                  <td className="course-name-cell">{c.course_name}</td>
                  <td><span className="credit-badge">{c.credit_hours} hrs</span></td>
                  <td>
                    <button className="btn-delete" onClick={() => deleteCourse(c.course_id)}>
                      <FaTrash /> Delete
                    </button>
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
