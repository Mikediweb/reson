const videoElement = document.getElementById('video');

// Función para acceder a la cámara
async function startCamera() {
    try {
        // Solicita acceso al video de la cámara
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        // Asigna el stream al elemento <video>
        videoElement.srcObject = stream;
    } catch (err) {
        console.error('Error al acceder a la cámara: ', err);
        alert('No se puede acceder a la cámara. Asegúrate de que tu navegador tiene permiso para usar la cámara.');
    }
}

// Inicia la cámara cuando se carga la página
window.addEventListener('load', startCamera);
