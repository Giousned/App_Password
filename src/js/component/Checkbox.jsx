import React from "react";

import PropTypes from "prop-types";


const Checkbox = (props) => {

  return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value={props.valor}
          onChange={props.handleClick}
          checked={props.valor}
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
	value: PropTypes.bool,
  handleClick: PropTypes.func,
  label: PropTypes.string,
};