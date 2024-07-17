document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todas las imágenes dentro de la galería
    const imagenes = document.querySelectorAll('.galeria-img');

    // Añadir evento de clic a cada imagen
    imagenes.forEach(imagen => {
        imagen.addEventListener('click', () => {
            // Cambiar el estilo para agrandar la imagen
            imagen.style.transform = 'scale(1.5)';
            imagen.style.transition = 'transform 0.3s ease';
        });

        // Restablecer el tamaño original al hacer clic nuevamente
        imagen.addEventListener('mouseleave', () => {
            imagen.style.transform = 'scale(1)';
        });
    });
});
