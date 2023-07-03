import React from 'react'
import "./App.css"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {LoginPage,SignupPage} from "./Routes.js";
const App = () =>{
  return(
    <BrowserRouter>
    <Routes>
      {/* when user navigate to '/login' the login page will be rendered using the element  */}
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/Sign-up' element={<SignupPage/>}/>
    </Routes>
    </BrowserRouter>
)
}
export default App