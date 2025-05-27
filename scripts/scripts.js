// Versión corregida y probada
const bsModal = new bootstrap.Modal(document.getElementById('recordModal'));
let currentExerciseType = '';

document.querySelectorAll('[data-bs-target="#recordModal"]').forEach(button => {
    button.addEventListener('click', () => {
        currentExerciseType = button.closest('.card').querySelector('[data-ejercicio]').dataset.ejercicio;
    });
});

function agregarRegistroDesdeModal() {
    const peso = document.getElementById('input-peso').value.trim();
    const nombre = document.getElementById('input-nombre').value.trim();

    if (!peso || !nombre) {
        alert('¡Completa ambos campos!');
        return;
    }

    // Crear elemento
    const nuevoRegistro = document.createElement('div');
    nuevoRegistro.className = 'alert alert-success w-100 mb-2';
    nuevoRegistro.innerHTML = `
        <strong>${peso}kg</strong><br>
        ${nombre}
    `;

    // Encontrar contenedor
    const targetCard = document.querySelector(`[data-ejercicio="${currentExerciseType}"]`).closest('.card');
    const cardBody = targetCard.querySelector('.card-body');
    
    // Insertar antes del botón
    const boton = cardBody.querySelector('button');
    cardBody.insertBefore(nuevoRegistro, boton);

    // Limpiar y cerrar
    document.getElementById('input-peso').value = '';
    document.getElementById('input-nombre').value = '';
    bsModal.hide();
}
/*
let tipoEjercicioActual = '';

function mostrarModal(tipo) {
    tipoEjercicioActual = tipo;
    const modal = document.getElementById('modal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

function agregarRegistroDesdeModal() {
    const pesoInput = document.getElementById('input-peso');
    const nombreInput = document.getElementById('input-nombre');
    const modal = document.getElementById('modal');

    if (!pesoInput || !nombreInput || !modal) return; // Evitar errores en otras páginas

    let peso = pesoInput.value;
    let nombre = nombreInput.value;

    if (peso && nombre) {
        let nuevaTarjeta = document.createElement("div");
        nuevaTarjeta.classList.add("tarjeta");
        nuevaTarjeta.innerHTML = `${peso}KG<br>${nombre}`;

        if (tipoEjercicioActual === "banca") {
            document.querySelector(".columna:nth-child(1)").insertBefore(nuevaTarjeta, document.querySelector(".columna:nth-child(1) .boton-agregar"));
        } else if (tipoEjercicioActual === "sentadilla") {
            document.querySelector(".columna:nth-child(2)").insertBefore(nuevaTarjeta, document.querySelector(".columna:nth-child(2) .boton-agregar"));
        } else if (tipoEjercicioActual === "peso") {
            document.querySelector(".columna:nth-child(3)").insertBefore(nuevaTarjeta, document.querySelector(".columna:nth-child(3) .boton-agregar"));
        }

        // Limpiar inputs y cerrar modal
        pesoInput.value = '';
        nombreInput.value = '';
        modal.style.display = 'none';
    } else {
        alert("Por favor, complete ambos campos.");
    }
}

// Cerrar modal al hacer clic fuera de él
const modal = document.getElementById('modal');
if (modal) {
    modal.addEventListener('click', function(event) {
        if (event.target === this) {
            document.getElementById('modal').style.display = 'none';
            document.getElementById('input-peso').value = '';
            document.getElementById('input-nombre').value = '';
        }
    });
}
    */