import React from "react";
import "../../styles/home.css";
import Hero from "../component/Hero.jsx";
import Checkbox from "../component/Checkbox.jsx";
import Options from "../component/Options.jsx";


export const Home = () => (
	<div className="container text-center mt-5">
		<Hero/>	
		<Options />
	</div>
);
