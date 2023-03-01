import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import StudentLoginForm from "./components/Student/StudentLoginForm";
import AdminLoginForm from "./components/Admin/AdminLoginForm"
import Index from "./components/Index/Index";
import SignupTemplate from "./components/NewStudent/SignupTemplate"
import ProfilePage from "./components/ProfilePage/ProfilePage";
import AboutUs from "./components/AboutUs/AboutUs";

function App(props) {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<StudentLoginForm/>} />
      <Route path="/about" exact element={<AboutUs/>}/>
      <Route path="/admin" exact element={<AdminLoginForm/>} />
      <Route path="/student/:id" exact element={<Index/>}/>
      <Route path="/student/:id/profile" exact element={<ProfilePage/>}/>
      <Route path="/student/signup" exact element={<SignupTemplate/>}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
