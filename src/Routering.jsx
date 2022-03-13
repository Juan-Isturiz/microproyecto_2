import {Route,Routes } from "react-router-dom";
import MovieViewPage from "./Pages/MovieViewPage";
import HomePage from "./Pages/HomePage";


const Routering =()=>{
    return(
        <Routes>
            <Route  path="/" element={<HomePage/>}></Route>
            <Route  path="/MovieView" element={<MovieViewPage/>}></Route>
        </Routes>
    )
}
export default Routering