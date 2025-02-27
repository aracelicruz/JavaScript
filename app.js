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
