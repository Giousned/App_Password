import React from "react";

import useAppProvider from "../store/Context.js";

import Hero from "../component/Hero.jsx";
import List from "../component/List.jsx";
import ListItem from "../component/ListItem.jsx";


export const MyPassword = () => {

	const {store, actions} =useAppProvider();

	return (
		<div className="text-center mt-5">

			<Hero title="Generador de Contraseñas" subtitle="Esta app guarda contraseñas y es super divertida!"/>
			<h1>Contraseñas guardadas</h1>

			{store.contraseñasSaved.map((item, index) => {
				
				return(
					<List key={index}>
						<ListItem>
							{item}
						</ListItem>
					</List>);
			})}
			
		</div>
	);
}