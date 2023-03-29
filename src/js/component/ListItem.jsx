import React from "react";

import useAppProvider from "../store/Context";


const ListItem= (props) => {

    const { actions } = useAppProvider();
    
    return(
        <div>
            <li className="list-group-item d-flex justify-content-evenly">{props.children}
                <i onClick={() => actions.borrarContraseña(props.children)} className="fa-solid fa-trash d-flex align-items-center"></i>
            </li>
        </div>
    )
}

export default ListItem;