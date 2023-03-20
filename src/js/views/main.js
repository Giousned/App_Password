import React from "react";

import "../../styles/home.css";

import Hero from "../component/Hero.jsx";
import Options from "../component/Options.jsx";


export const Main = () => (
	<div className="text-center mt-5">
		<Hero/>	
		<Options />
	</div>
);