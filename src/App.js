import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import StudentLoginForm from "./components/Student/StudentLoginForm";
import AdminLoginForm from "./components/Admin/AdminLoginForm"
import Index from "./components/Index/Index";
import AboutUs from "./components/AboutUs/AboutUs";
import ProfilePage from "./components/ProfilePage/ProfilePage"
import SignupTemplate from "./components/NewStudent/SignupTemplate"
import Feedback from "./components/Feedback/Feedback";
import AddFeedback from "./components/AddFeedback/AddFeedback"
import IndexAdmin from "./components/Admin/IndexAdmin/IndexAdmin";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"
import AttendanceAdmin from "./components/Admin/AttendanceAdmin/AttendanceAdmin";
import { useSelector } from "react-redux";
import CourseAdmin from "./components/Admin/CourseAdmin/CourseAdmin"
import StudentsAttendanceAdmin from "./components/Admin/StudentsAttendanceAdmin/StudentsAttendanceAdmin";
import AddAttendanceAdmin from "./components/Admin/AddAttendanceAdmin/AddAttendanceAdmin";
import StudentsFeedbackAdmin from "./components/Admin/StudentsFeedbackAdmin/StudentsFeedbackAdmin";
import TimeTableAdmin from "./components/Admin/TimeTableAdmin/TimeTableAdmin";

function App() {
  const isAuth = useSelector(store=>store.login.isAuth);
  const isAdminAuth = useSelector(store=>store.adminLogin.isAuth)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<StudentLoginForm/>} />
        <Route path="about" exact element={<AboutUs/>}/>

        {/* Admin Routes */}
        <Route path="admin" exact element={<AdminLoginForm/>} />
        <Route path="admin/:id" exact element={<IndexAdmin/>} />
        <Route path="admin/:id/attendance" exact element={<ProtectedRoute isAuth={isAdminAuth}>{<AttendanceAdmin/>}</ProtectedRoute>} />
        <Route path="admin/:id/feedback" exact element={<ProtectedRoute isAuth={isAdminAuth}>{<AttendanceAdmin/>}</ProtectedRoute>} />
        <Route path="admin/:id/timetable" exact element={<ProtectedRoute isAuth={isAdminAuth}>{<AttendanceAdmin/>}</ProtectedRoute>}/>
        <Route path="admin/:id/timetable/:cn" exact element={<ProtectedRoute isAuth={isAdminAuth}>{<TimeTableAdmin/>}</ProtectedRoute>}/>
        <Route path="admin/:id/attendance/:cn" exact element={<ProtectedRoute isAuth={isAdminAuth}>{<CourseAdmin/>}</ProtectedRoute>} />
        <Route path="admin/:id/feedback/:cn" exact element={<ProtectedRoute isAuth={isAdminAuth}>{<CourseAdmin/>}</ProtectedRoute>} />
        <Route path="admin/:id/attendance/:cn/:sn" exact element={<ProtectedRoute isAuth={isAdminAuth}>{<StudentsAttendanceAdmin/>}</ProtectedRoute>} />
        <Route path="admin/:id/feedback/:cn/:sn" exact element={<ProtectedRoute isAuth={isAdminAuth}>{<StudentsFeedbackAdmin/>}</ProtectedRoute>} />
        <Route path="admin/:id/attendance/:cn/:sn/add" exact element={<ProtectedRoute isAuth={isAdminAuth}>{<AddAttendanceAdmin/>}</ProtectedRoute>} />



        {/* Student Routes */}
        <Route path="student/:id" exact element={<Index/>}/>
        <Route path="student/:id/profile" exact element={<ProtectedRoute isAuth={isAuth}>{<ProfilePage/>}</ProtectedRoute>} />
        <Route path="student/:id/feedback" exact element={<ProtectedRoute isAuth={isAuth}>{<Feedback/>}</ProtectedRoute>}/>
        <Route path="student/:id/feedback/:sn" exact element={<ProtectedRoute isAuth={isAuth}>{<AddFeedback/>}</ProtectedRoute>}/>
        <Route path="signup" exact element={<SignupTemplate/>} />
        
        
        <Route path="*" element={<p style={{color : "white", fontSize : '40px'}}>Path not resolved</p>} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
