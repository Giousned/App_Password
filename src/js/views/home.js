import React from "react";
import "../../styles/home.css";
import Hero from "../component/Hero.jsx";
import CheckList from "../component/CheckList.jsx";

export const Home = () => (
	<div className="text-center mt-5">
		<Hero/>
		<CheckList label="checked"  initiallyChecked="true"/>
	</div>
);
