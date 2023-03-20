import React from "react";


const Checkbox = (props) => {

  return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          onChange={props.handleCheckMajus ? props.handleCheckMajus : props.handleCheckNumbers ? props.handleCheckNumbers : props.handleCheckSymbols ? props.handleCheckSymbols : null}
          checked={props.includeMajus ? props.includeMajus : props.includeNumbers ? props.includeNumbers : props.includeSymbols ? props.includeSymbols : null}
        />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          {props.label}
        </label>
      </div>
    </div>
  );
};
export default Checkbox;
