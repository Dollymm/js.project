let imgBox=document.getElementById("imageBox");
let qrImage=document.getElementById("qrImage");
let qrText=document.getElementById("qrText");

function generateQR(){
    qrImage.src=" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value;

imgBox.classList.add("show-img");
}