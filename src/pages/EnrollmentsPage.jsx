import { useEffect, useState } from "react";
import api from "../api";
import EnrollmentForm from "../components/EnrollmentForm";
import EnrollmentList from "../components/EnrollmentList";
import "./EnrollmentsPage.css";

export default function EnrollmentsPage() {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [enrollments, setEnrollments] = useState([]);

  const fetchAll = async () => {
    setStudents((await api.get("/students")).data);
    setCourses((await api.get("/courses")).data);
    setEnrollments((await api.get("/enrollments")).data);
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <div className="enrollments-page">
      <h2 className="page-title">Enrollment Management</h2>
      <EnrollmentForm
        students={students}
        courses={courses}
        refresh={fetchAll}
      />
      <EnrollmentList enrollments={enrollments} />
    </div>
  );
}
