import React from "react";

import List from "./List.jsx";

const ListItem= (props) => {
    
    return(
            <li className="list-group-item">{props.text}</li> 
    )
}

export default ListItem;