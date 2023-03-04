import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import StudentLoginForm from "./components/Student/StudentLoginForm";
import AdminLoginForm from "./components/Admin/AdminLoginForm"
import Index from "./components/Index/Index";
import AboutUs from "./components/AboutUs/AboutUs";
import ProfilePage from "./components/ProfilePage/ProfilePage"
import SignupTemplate from "./components/NewStudent/SignupTemplate"
import Feedback from "./components/Feedback/Feedback";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"
import { useSelector } from "react-redux";

function App() {
  const isAuth = useSelector(store=>store.login.isAuth);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<StudentLoginForm/>} />
        <Route path="about" exact element={<AboutUs/>}/>
        <Route path="admin" exact element={<AdminLoginForm/>} />
        <Route path="student/:id" exact element={<Index/>}/>
        <Route path="student/:id/profile" exact element={<ProfilePage/>} />
        <Route path="student/:id/feedback" exact element={<ProtectedRoute isAuth={isAuth}>{<Feedback/>}</ProtectedRoute>}/>
        <Route path="signup" exact element={<ProtectedRoute isAuth={isAuth}>{<SignupTemplate/>}</ProtectedRoute>}></Route>
        
        
        <Route path="*" element={<p style={{color : "white", fontSize : '40px'}}>Path not resolved</p>} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
