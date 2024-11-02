// script.js file

function domReady(fn) {
    if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
    ) {
        setTimeout(fn, 1000);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

domReady(function () {

    // If found you qr code
    function onScanSuccess(decodeText, decodeResult) {
        alert("You Qr is : " + decodeText, decodeResult);
    }

    let htmlscanner = new Html5QrcodeScanner(
        "my-qr-reader",
        { fps: 10, qrbos: 250 }
    );
    htmlscanner.render(onScanSuccess);
});

// Get the audio element
const scanSound = document.getElementById("scan-sound");

// Function to handle successful QR scan
function onScanSuccess(decodedText) {
    document.getElementById("result-text").innerText = "QR Code Result: " + decodedText;

    // Play sound after scanning
    scanSound.play();

    // Optionally stop the scanner after a successful scan
    html5QrcodeScanner.stop().then(() => {
        console.log("QR Code scanning stopped.");
    }).catch(err => console.log("Error stopping scanner:", err));
}