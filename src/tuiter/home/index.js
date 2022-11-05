import React from "react";

import TuitsList from "../tuits/tuits-list";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return(
        <div>
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitsList/>
        </div>
    );
};
export default HomeComponent;

