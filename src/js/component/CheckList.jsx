import React from "react";
import { useState } from "react"; 



const CheckList = (props) => {
 const [checked,setChecked]=useState(props.initiallyChecked); 
    return(
        <div>
        <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={handleCheck}/>
  <label className="form-check-label" htmlFor="flexCheckChecked">
    {props.label}
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" onClick={handleCheck}/>
  <label className="form-check-label" htmlFor="flexCheckChecked">
    {props.label}
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" onClick={handleCheck}/>
  <label className="form-check-label" htmlFor="flexCheckChecked">
    {props.label}
  </label>
</div>
</div>
    )
 }
 export default CheckList;