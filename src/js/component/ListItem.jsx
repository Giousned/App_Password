import React from "react";

import useAppProvider from "../store/Context";


const ListItem= (props) => {

    const {store, actions} = useAppProvider();
    
    return(
        <div>
            <li className="list-group-item">{props.children}
            <i onClick={() => actions.borrarContraseña(props.children)} class="fa-solid fa-trash ms-5"></i>
            </li>
        </div>
    )
}

export default ListItem;