// Selecciona el elemento del interruptor de modo oscuro
const bdark = document.querySelector('.form-check-input');

// Selecciona el elemento body
const body = document.querySelector('body');

// Llama a la función load al cargar la página
load();

// Agrega un evento de clic al interruptor de modo oscuro
bdark.addEventListener('click', e => {
    // Alterna la clase 'darkmode' en el elemento body
    body.classList.toggle('darkmode');
    
    // Almacena el estado actual del modo oscuro en el almacenamiento local
    store(body.classList.contains('darkmode'));
});

// Función para cargar el estado del modo oscuro al cargar la página
function load() {
    // Obtiene el valor actual del modo oscuro desde el almacenamiento local
    const darkmode = localStorage.getItem('darkmode');

    // Si no hay un valor en el almacenamiento local, establece el modo oscuro en 'false'
    if (!darkmode) {
        store('false');
    } 
    // Si el modo oscuro está establecido en 'true', agrega la clase 'darkmode' al body
    else if (darkmode == 'true') {
        body.classList.add('darkmode');
    }
}

// Función para almacenar el estado del modo oscuro en el almacenamiento local
function store(value) {
    localStorage.setItem('darkmode', value);
}
