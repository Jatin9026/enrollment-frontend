import { useEffect, useState } from "react";
import api from "../api";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
import "./StudentsPage.css";

export default function StudentsPage() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const res = await api.get("/students");
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="students-page">
      <h2 className="page-title">Student Management</h2>
      <StudentForm refresh={fetchStudents} />
      <StudentList students={students} refresh={fetchStudents} />
    </div>
  );
}
