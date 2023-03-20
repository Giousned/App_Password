import React from "react";

import List from "./List.jsx";

const ListItem= (props) => {
    return(
            <ul className="list-group">
                <List >
                    {props.text}
                </List>
            </ul>
    )
}

export default ListItem;