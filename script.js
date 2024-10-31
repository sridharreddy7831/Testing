// Get references to HTML elements
const openCameraButton = document.getElementById('open-camera');
const video = document.getElementById('video');
const captureButton = document.getElementById('capture');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// Open the camera when "Open Camera" button is clicked
openCameraButton.addEventListener('click', () => {
    // Access the webcam
    navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
            video.srcObject = stream;
            video.style.display = 'block';
            captureButton.style.display = 'block';
            canvas.style.display = 'block';
        })
        .catch((error) => {
            console.error("Error accessing the webcam:", error);
        });
});

// Capture the image when "Capture Image" button is clicked
captureButton.addEventListener('click', () => {
    // Set canvas dimensions to match video dimensions
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    // Draw the current video frame to the canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
});
