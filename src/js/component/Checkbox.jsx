import React from "react";

import PropTypes from "prop-types";


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

Checkbox.propTypes = {
	includeMajus: PropTypes.bool,
	includeNumbers: PropTypes.bool,
	includeSymbols: PropTypes.bool,
  handleCheckMajus: PropTypes.func,
  handleCheckNumbers: PropTypes.func,
  handleCheckSymbols: PropTypes.func,
};