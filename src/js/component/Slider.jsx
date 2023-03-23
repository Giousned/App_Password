import React from "react";

import useAppProvider from "../store/Context.js";

const Slider = () => {
  const { store, actions } = useAppProvider();

  return (
    <form>
      <label htmlFor="customRange3" className="form-label fs-3">
        Length of Passwords
      </label>
      <input
        type="range"
        className="form-range"
        min="8"
        max="18"
        step="1"
        value={store.slider}
        id="customRange3"
        onChange={() => actions.handleChangeSlider(store.slider)}
      ></input>
      <output>{store.slider}</output>
    </form>
  );
};

export default Slider;
