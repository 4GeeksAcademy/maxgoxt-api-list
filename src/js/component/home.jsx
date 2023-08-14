import React,{useState, useEffect} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {

	const [todos, setTodos] = useState('')
	const tareas = [{ label: "Make the bed", done: false }, { label: "Walk the dog", done: false },{ label: "Do the replits", done: false }]

	// fetch('https://playground.4geeks.com/apis/fake/todos/user/max', {
	// 	method: "PUT",
	// 	body: tareas,
	// 	headers: {
	// 		"Content-Type": "application/json"
	// 	}
	// })

	useEffect(() => {
		// addUser()
		getTask()
	},[])

	async function getTask() {
		const response = await fetch('https://playground.4geeks.com/apis/fake/todos/user/maxgoxt')
		// , {
		// 	method: "POST",
		// 	body: JSON.stringify([]),
		// 	headers: {
		// 		"Content-Type": "application/json"
		// 	}
		// })
		const data = await response.json()
		console.log(data);}

	async function addUser() {
		const response = await fetch('https://playground.4geeks.com/apis/fake/todos/user/margotxt', {
			method: "POST",
			body: JSON.stringify([]),
			headers: {
				"Content-Type": "application/json"
			}
		})
		const data = await response.json()
		console.log(data);
			// .then(resp => {
			// 	console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
			// 	console.log(resp.status); // el código de estado = 200 o código = 400 etc.
			// 	console.log(resp.text()); // Intentará devolver el resultado exacto como cadena (string)
			// 	return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
			// })
			// .then(data => {
			// 	//Aquí es donde debe comenzar tu código después de que finalice la búsqueda
			// 	console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
			// })
			// .catch(error => {
			// 	//manejo de errores
			// 	console.log(error);
			// });
		}

	return (
		<div className="text-center">
			<h1>Hello World</h1>
		</div>
	);
};

export default Home;
