import { useState } from "react";
import api from "../api";
import "./StudentForm.css";

export default function StudentForm({ refresh }) {
  const [form, setForm] = useState({ name: "", email: "", contact: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/students", form);
    setForm({ name: "", email: "", contact: "" });
    refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="card student-form">
      <h3>Add Student</h3>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Enter student name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter email address"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="contact">Contact</label>
        <input
          id="contact"
          type="text"
          placeholder="Enter contact number"
          value={form.contact}
          onChange={(e) => setForm({ ...form, contact: e.target.value })}
          required
        />
      </div>
      <button type="submit" className="btn-submit">Add Student</button>
    </form>
  );
}
