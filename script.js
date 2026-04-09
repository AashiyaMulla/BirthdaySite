let input = document.getElementById("inputField");
let btn = document.getElementById("btnAction");
let qrImg = document.getElementById("qrImg");

btn.addEventListener("click", () => {

    if(input.value.trim() === ""){
        alert("Please enter a link!");
        return;
    }

    let data = encodeURIComponent(input.value);

    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${data}`;
});