import {Route,Routes } from "react-router-dom";
import MovieViewPage from "./Pages/MovieViewPage";
import HomePage from "./Pages/HomePage";
import LogPage from "./Pages/LogPage"
import MovieDash from "./Pages/MovieDash";


const Routering =()=>{
    return(
        <Routes>
            <Route  path="/" element={<HomePage/>}></Route>
            <Route path="/MovieDash" element={<MovieDash />}></Route>
            <Route  path="/MovieView" element={<MovieViewPage/>}></Route>
            <Route path="/Login" element ={<LogPage/>}/>
        </Routes>
    )
}
export default Routering