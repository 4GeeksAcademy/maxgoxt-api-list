import React, { useState, useEffect } from "react";

//create your first component

const Home = () => {

	const [todos, setTodos] = useState([])
	// const tareas = [{ label: "Make the bed", done: false }, { label: "Walk the dog", done: false },{ label: "Do the replits", done: false }]
	const [tarea, setTarea] = useState('')

	async function addUser() {
		try {
			let response = await fetch('https://playground.4geeks.com/apis/fake/todos/user/maxgoxt', {
				method: 'POST',
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify([]),
			})
			let data = await response.json()
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	}

	async function addTask() {
		console.log(todos);
		try {
			let response = await fetch('https://playground.4geeks.com/apis/fake/todos/user/maxgoxt', {
				method: 'PUT',
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(todos),
			})
			let data = await response.json()
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	}

	async function getTask() {
		try {
			const response = await fetch('https://playground.4geeks.com/apis/fake/todos/user/maxgoxt')
			const data = await response.json()
			setTodos(data);
			console.log(data);
			console.log(todos);
		} catch (error) {
			console.log("error");
		}
	}

	useEffect(() => {
		// addUser()
		getTask()
	}, [])

	useEffect(() => {
		addTask()
	}, [todos])

	function add(e) {
		if (e.key === "Enter" && tarea !== "") {
			setTodos(todos.concat({ label: tarea, done: false }))
			setTarea("")
		}
	}

	function del(item) {
		setTodos(todos.filter((x, newIndex) =>
			item != newIndex
		))
	}

	return (
		<div className="w-50 mx-auto">
			<h1 className="contatiner fw-light">To Do List</h1>
			<input className="form-control fst-italic" type="text" placeholder='¿Que tarea pendiente tenés?'
				value={tarea}
				onChange={(e) => { setTarea(e.target.value) }}
				onKeyDown={add} />
			<ul className="list-group">
				{
					todos.map((item, index) => {
						return (
							<li className="list-group-item d-flex justify-content-between fst-italic" key={index}>{item.label}
								<i className="fa fa-trash" style={{ color: '#c70000' }} onClick={() => del(index)}></i>
							</li>)
					})}
			</ul>
			<small className="fw-light">{todos.length} tareas pendientes</small>
			<button onClick={() =>{setTodos([{label:'terminé todo'}])}}>Terminé todo</button>
		</div>
	);
};

export default Home;




	// async function getTask() {
	// 	const response = await fetch('https://playground.4geeks.com/apis/fake/todos/user/maxgoxt')
	// 	// , {
	// 	// 	method: "POST",
	// 	// 	body: JSON.stringify([]),
	// 	// 	headers: {
	// 	// 		"Content-Type": "application/json"
	// 	// 	}
	// 	// })
	// 	const data = await response.json()
	// 	console.log(data);}

	// async function addUser() {
	// 	const response = await fetch('https://playground.4geeks.com/apis/fake/todos/user/maxgoxt', {
	// 		method: "POST",
	// 		body: JSON.stringify([]),
	// 		headers: {
	// 			"Content-Type": "application/json"
	// 		}
	// 	})
	// 	const data = await response.json()
	// 	console.log(data);



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