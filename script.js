// Cambiar la imagen principal en la galería
function changeImage(imageSrc) {
    const mainImage = document.getElementById('main-image');
    mainImage.src = imageSrc;
}

// Validación básica del formulario de contacto
document.querySelector('form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Por favor, complete todos los campos antes de enviar el formulario.');
        event.preventDefault();
    } else if (!validateEmail(email)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        event.preventDefault();
    }
});

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
