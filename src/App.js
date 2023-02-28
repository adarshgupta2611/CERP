import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import StudentLoginForm from "./components/Student/StudentLoginForm";
import AdminLoginForm from "./components/Admin/AdminLoginForm"
import Index from "./components/Index/Index";


function App(props) {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<StudentLoginForm/>} />
      <Route path="/admin" exact element={<AdminLoginForm/>} />
      <Route path="/student/:id" exact element={<Index/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
