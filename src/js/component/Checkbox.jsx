import React from "react";
import { useState } from "react";

const Checkbox = (props) => {
  const [checked, setChecked] = useState(props.initiallyChecked);

  console.log(checked);

  const handleCheck = () => { setChecked(!checked);}

  return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          onChange={handleCheck}
          checked={checked}
        />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          {props.label}
        </label>
      </div>
    </div>
  );
};
export default Checkbox;
