import React from "react";


const ListItem= (props) => {
    
    return(
            <li className="list-group-item">{props.children}</li> 
    )
}

export default ListItem;