import { useState } from "react";
import api from "../api";
import "./CourseForm.css";

export default function CourseForm({ refresh }) {
  const [form, setForm] = useState({ course_name: "", credit_hours: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/courses", form);
    setForm({ course_name: "", credit_hours: "" });
    refresh();
  };

  return (
    <form className="card course-form" onSubmit={handleSubmit}>
      <h3>Add Course</h3>
      <div className="form-group">
        <label htmlFor="course-name">Course Name</label>
        <input
          id="course-name"
          type="text"
          placeholder="Enter course name"
          value={form.course_name}
          onChange={(e) => setForm({ ...form, course_name: e.target.value })}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="credit-hours">Credit Hours</label>
        <input
          id="credit-hours"
          type="number"
          placeholder="Enter credit hours"
          value={form.credit_hours}
          onChange={(e) => setForm({ ...form, credit_hours: e.target.value })}
          required
          min="1"
          max="10"
        />
      </div>
      <button type="submit" className="btn-submit">Add Course</button>
    </form>
  );
}
