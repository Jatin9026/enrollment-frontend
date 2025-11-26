import api from "../api";
import { FaTrash } from "react-icons/fa";
import "./StudentList.css";

export default function StudentList({ students, refresh }) {
  const deleteStudent = async (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      await api.delete(`/students/${id}`);
      refresh();
    }
  };

  return (
    <div className="card student-list">
      <h3>All Students</h3>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.length === 0 ? (
              <tr>
                <td colSpan="5" className="no-data">No students found. Add your first student above!</td>
              </tr>
            ) : (
              students.map((s) => (
                <tr key={s.student_id}>
                  <td><span className="id-badge">{s.student_id}</span></td>
                  <td className="name-cell">{s.name}</td>
                  <td className="email-cell">{s.email}</td>
                  <td>{s.contact}</td>
                  <td>
                    <button className="btn-delete" onClick={() => deleteStudent(s.student_id)}>
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
