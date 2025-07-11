// Mostrar datos almacenados al cargar
function showStoredData() {
    const name = localStorage.getItem('name');
    const age = localStorage.getItem('age');
    const dataDiv = document.getElementById('storedData');
    if (name && age) {
        dataDiv.textContent = `Name: ${name} | Age: ${age}`;
    } else {
        dataDiv.textContent = 'No data stored.';
    }
}

// Contador de interacciones con Session Storage
function updateInteractionCount() {
    let count = sessionStorage.getItem('interactionCount');
    count = count ? parseInt(count) + 1 : 1;
    sessionStorage.setItem('interactionCount', count);
    document.getElementById('interactionCount').textContent = `Interactions this session: ${count}`;
}

// Validación y guardado de datos
window.addEventListener('DOMContentLoaded', function() {
    document.getElementById('userForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const age = document.getElementById('age').value.trim();
        const feedback = document.getElementById('feedback');
        feedback.textContent = '';
        feedback.style.color = 'red';
        if (!name) {
            feedback.textContent = 'Name is required.';
            return;
        }
        if (!age || isNaN(age) || age < 1 || age > 120) {
            feedback.textContent = 'Age must be a number between 1 and 120.';
            return;
        }
        localStorage.setItem('name', name);
        localStorage.setItem('age', age);
        showStoredData();
        updateInteractionCount();
        feedback.textContent = 'Data saved successfully.';
        feedback.style.color = 'green';
    });

    // boton para limpiar datos
    document.getElementById('clearBtn').addEventListener('click', function() {
        localStorage.removeItem('name');
        localStorage.removeItem('age');
        showStoredData();
        const feedback = document.getElementById('feedback');
        feedback.textContent = 'Data cleared.';
        feedback.style.color = 'red';
    });

    // Initialization on page load
    showStoredData();
    updateInteractionCount();
});
