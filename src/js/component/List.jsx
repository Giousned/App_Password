import React from "react";


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