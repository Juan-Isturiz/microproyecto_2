import {Route,Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";


const Routering =()=>{
    return(
        <Routes>
            <Route  path="/" element={<HomePage/>}></Route>
        </Routes>
    )
}
export default Routering