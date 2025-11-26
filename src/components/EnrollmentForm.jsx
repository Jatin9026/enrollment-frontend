import { useState } from "react";
import api from "../api";
import "./EnrollmentForm.css";

export default function EnrollmentForm({ students, courses, refresh }) {
  const [student_id, setStudentID] = useState("");
  const [course_id, setCourseID] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/enrollments", { student_id, course_id });
    setStudentID("");
    setCourseID("");
    refresh();
  };

  return (
    <form className="card enrollment-form" onSubmit={handleSubmit}>
      <h3>Enroll Student</h3>

      <div className="form-group">
        <label htmlFor="student-select">Select Student</label>
        <select 
          id="student-select"
          value={student_id} 
          onChange={(e) => setStudentID(e.target.value)}
          required
        >
          <option value="">-- Choose a student --</option>
          {students.map((s) => (
            <option key={s.student_id} value={s.student_id}>
              {s.name} ({s.email})
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="course-select">Select Course</label>
        <select 
          id="course-select"
          value={course_id} 
          onChange={(e) => setCourseID(e.target.value)}
          required
        >
          <option value="">-- Choose a course --</option>
          {courses.map((c) => (
            <option key={c.course_id} value={c.course_id}>
              {c.course_name} ({c.credit_hours} credits)
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="btn-submit">Enroll Student</button>
    </form>
  );
}
