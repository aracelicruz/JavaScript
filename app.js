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
