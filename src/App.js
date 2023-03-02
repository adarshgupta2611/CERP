import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import StudentLoginForm from "./components/Student/StudentLoginForm";
import AdminLoginForm from "./components/Admin/AdminLoginForm"
import Index from "./components/Index/Index";
import AboutUs from "./components/AboutUs/AboutUs";
import ProfilePage from "./components/ProfilePage/ProfilePage"
import SignupTemplate from "./components/NewStudent/SignupTemplate"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<StudentLoginForm/>} />
        <Route path="about" exact element={<AboutUs/>}/>
        <Route path="admin" exact element={<AdminLoginForm/>} />
        <Route path="student/:id" exact element={<Index/>}>
            <Route path="profile" exact element={<ProfilePage/>} />
        </Route>
        <Route path="signup" exact element={<SignupTemplate/>}></Route>
        
        
        <Route path="*" element={<p style={{color : "white", fontSize : '40px'}}>Path not resolved</p>} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
