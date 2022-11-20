const listaClientes = () => fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

const crearCliente = (nombre, email) => {
	return fetch("http://localhost:3000/perfil", {
		method: "POST",
		headers: {
			//encabezado para que el servidor sepa que tipo de archivos va a recibir
			"Content-Type": "application/json"
		},
		body: JSON.stringify({ nombre, email, id: uuid.v4() }) //Aquí escribimos toda la información que queremos enviar, RECUERDA que el servidor maneja la información en forma de string ( JSON.stringify()).
	});
};

const eliminarCliente = (id) => {
	return fetch(`http://localhost:3000/perfil/${id}`, {
		method: "DELETE"
	});
};

export const clientServices = {
	listaClientes,
	crearCliente,
	eliminarCliente
};
