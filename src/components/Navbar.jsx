import { FaUserGraduate, FaBook, FaClipboardList, FaGraduationCap } from "react-icons/fa";
import "./Navbar.css";
import ThemeToggle from './ThemeToggle';

export default function Navbar({ currentPage, setPage }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <FaGraduationCap className="brand-icon" />
        <h1>Student Enrollment System</h1>
      </div>
      <div className="navbar-links">
        <button 
          className={currentPage === "students" ? "nav-btn active" : "nav-btn"}
          onClick={() => setPage("students")}
        >
          <FaUserGraduate className="nav-icon" />
          <span>Students</span>
        </button>
        <button 
          className={currentPage === "courses" ? "nav-btn active" : "nav-btn"}
          onClick={() => setPage("courses")}
        >
          <FaBook className="nav-icon" />
          <span>Courses</span>
        </button>
        <button 
          className={currentPage === "enrollments" ? "nav-btn active" : "nav-btn"}
          onClick={() => setPage("enrollments")}
        >
          <FaClipboardList className="nav-icon" />
          <span>Enrollments</span>
        </button>
        <ThemeToggle />
      </div>
    </nav>
  );
}
