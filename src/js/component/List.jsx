import React, { useContext } from "react";
import useAppProvider from "../store/Context.js";

const List= (props) => {

    const {store, actions} = useAppProvider();

    console.log(store.pepino)

    return(
        <div className="container">
            <ul className="list-group">
                {props.children}
            </ul>
        </div>
    )
}

export default List;