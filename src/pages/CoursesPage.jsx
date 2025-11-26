import { useEffect, useState } from "react";
import api from "../api";
import CourseForm from "../components/CourseForm";
import CourseList from "../components/CourseList";
import "./CoursesPage.css";

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    const res = await api.get("/courses");
    setCourses(res.data);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="courses-page">
      <h2 className="page-title">Course Management</h2>
      <CourseForm refresh={fetchCourses} />
      <CourseList courses={courses} refresh={fetchCourses} />
    </div>
  );
}
