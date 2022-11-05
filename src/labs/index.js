
import React  from 'react';
import Assignment6 from "./a6";
import Assignment7 from "./a7/index.js";
import Nav from "../nav";
import {Route,Routes} from "react-router-dom";
function Labs() {
    return(
        <div>
            <Nav/>
            <Routes>
                <Route index element={<Assignment6/>}/>
                <Route  path="/a7" element={<Assignment7/>}/>
            </Routes>

        </div>
    );
}
export default Labs;

