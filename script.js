let qrcode = new QRCode(document.getElementById("qrcode"));

function makeCode() {		
    let elText = document.getElementById("text").value.trim();  // Trim whitespace

    if (elText) {
        qrcode.makeCode(elText);  // Only generate if there is input
    }
}

// Remove the initial makeCode() call to prevent alert on load

document.getElementById("text").addEventListener("blur", makeCode);
document.getElementById("text").addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
        makeCode();
    }
});
