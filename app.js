function capturarDatos() {
    // Capturar datos del usuario con prompt
    let nombre = prompt("¿Cuál es tu nombre?");
    let edad = prompt("¿Cuántos años tienes?");
    let lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?");

    // Validar que no estén vacíos
    if (nombre && edad && lenguaje) {
        // Mostrar mensaje inicial
        alert(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`);

        // Segunda pregunta
        let gusto = prompt(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`);
        let mensajeGusto = "";

        if (gusto == "1") {
            mensajeGusto = "Sí, me gusta";
            alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
        } else if (gusto == "2") {
            mensajeGusto = "No, no me gusta";
            alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
        } else {
            mensajeGusto = "Respuesta no válida";
            alert("Respuesta no válida. Por favor, ingresa 1 para SÍ o 2 para NO.");
        }

        // Agregar datos a la tabla
        let tabla = document.getElementById("tablaDatos");
        let nuevaFila = tabla.insertRow(-1); // Insertar al final

        let celdaNombre = nuevaFila.insertCell(0);
        let celdaEdad = nuevaFila.insertCell(1);
        let celdaLenguaje = nuevaFila.insertCell(2);
        let celdaGusto = nuevaFila.insertCell(3);

        celdaNombre.innerText = nombre;
        celdaEdad.innerText = edad;
        celdaLenguaje.innerText = lenguaje;
        celdaGusto.innerText = mensajeGusto;
    } else {
        alert("Por favor, completa todas las preguntas.");
    }
}
