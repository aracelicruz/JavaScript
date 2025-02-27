<<<<<<< HEAD
// Arreglo para almacenar los libros leídos
let librosLeidos = [];

// Función para agregar un libro
function agregarLibro() {
    const tituloInput = document.getElementById("tituloLibro");
    const titulo = tituloInput.value.trim();

    if (titulo) {
        librosLeidos.push(titulo);
        tituloInput.value = ""; // Limpiar el campo de entrada
        alert("Libro agregado: " + titulo);
    } else {
        alert("Por favor, ingrese un título válido.");
    }
}

// Función para mostrar los libros leídos
function mostrarLibrosLeidos() {
    const listaLibros = document.getElementById("listaLibros");
    listaLibros.innerHTML = ""; // Limpiar la lista

    if (librosLeidos.length === 0) {
        listaLibros.innerHTML = "<li>No se han agregado libros todavia.</li>";
    } else {
        librosLeidos.forEach((libro) => {
            const li = document.createElement("li");
            li.textContent = libro;
            listaLibros.appendChild(li);
        });
    }
}
=======
let nota = 85; 

// Validar si 'nota' es un número válido
if (nota >= 0 && nota <= 100) {
    // Evaluar el rango de la nota
    if (nota >= 90) {
        console.log(`Nota: ${nota} - Excelente, ¡sigue así!`);
    } else if (nota >= 75) {
        console.log(`Nota: ${nota} - Bien, buen trabajo.`);
    } else if (nota >= 60) {
        console.log(`Nota: ${nota} - Suficiente, pero puedes mejorar.`);
    } else {
        console.log(`Nota: ${nota} - Insuficiente, necesitas esforzarte más.`);
    }
} else {
    console.log("Error: La nota debe estar entre 0 y 100.");
}

// Pruebas con diferentes valores
[45, 60, 75, 90, 0].forEach(notaPrueba => {
    if (notaPrueba >= 0 && notaPrueba <= 100) {
        if (notaPrueba >= 90) {
            console.log(`Nota: ${notaPrueba} - Excelente, ¡sigue así!`);
        } else if (notaPrueba >= 75) {
            console.log(`Nota: ${notaPrueba} - Bien, buen trabajo.`);
        } else if (notaPrueba >= 60) {
            console.log(`Nota: ${notaPrueba} - Suficiente, pero puedes mejorar.`);
        } else {
            console.log(`Nota: ${notaPrueba} - Insuficiente, necesitas esforzarte más.`);
        }
    } else {
        console.log("Error: La nota debe estar entre 0 y 100.");
    }
});
>>>>>>> 62a672388f7adec30fc51adcb2376245fdf36c74
