import React from "react";

import Hero from "../component/Hero.jsx";
import Options from "../component/Options.jsx";
import Slider from "../component/Slider.jsx";



export const Main = () => {

	return (
		<div className="text-center mt-5">
		<Hero title="Generador de Contraseñas" subtitle="Esta es una app para crear y guardar contraseña!" />	
		<Options />

		<div className="container my-5">
			<Slider />
		</div>
		
		
	</div>

	);
}