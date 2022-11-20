const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
	evento.preventDefault();
	const nombre = document.querySelector("[data-nombre]").value;
	const mail = document.querySelector("[data-email]").value;
	console.log("nombre:", nombre);
	console.log("mail:", mail);
});

// export const formas = {
// 	formulario
// };
