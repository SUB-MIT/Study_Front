document.querySelector(".logoImg").onclick = function() {
    document.querySelector(".black").style.visibility="visible";
    document.querySelector(".card").style.visibility="visible";
}

document.querySelector("#hideBtn").onclick = function() {
    document.querySelector(".black").style.visibility="hidden";
    document.querySelector(".card").style.visibility="hidden";
}