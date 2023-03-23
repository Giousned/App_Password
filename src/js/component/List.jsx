import React from "react";

import useAppProvider from "../store/Context.js";

const List= (props) => {

    return(
        <div className="container">
            <ul className="list-group">
                {props.children}
            </ul>
        </div>
    )
}

export default List;