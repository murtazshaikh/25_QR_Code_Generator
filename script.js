const btn = document.querySelector("#generate");

function qrgenerate(e){
    e.preventDefault();

    const userinput = document.getElementById("input");

    document.getElementById("qr").innerHTML = "";

    new QRCode(document.getElementById("qr"), userinput.value);

    userinput.value = "";
}

btn.addEventListener("click", qrgenerate);