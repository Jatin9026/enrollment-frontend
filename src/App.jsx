import { useState } from "react";
import StudentsPage from "./pages/StudentsPage";
import CoursesPage from "./pages/CoursesPage";
import EnrollmentsPage from "./pages/EnrollmentsPage";
import Navbar from "./components/Navbar";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("students");

  return (
    <div className="container">
      <Navbar currentPage={page} setPage={setPage} />

      {page === "students" && <StudentsPage />}
      {page === "courses" && <CoursesPage />}
      {page === "enrollments" && <EnrollmentsPage />}
    </div>
  );
}
