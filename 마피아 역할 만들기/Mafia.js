let array = [5, 5, 0, 1, 2, 2, 2, 2, 2, 2];
let shuffle = [];
let cnt = 0;
let card = document.getElementsByClassName('card');
let mafiaCard = document.querySelector(".mafiaCard");
let mainBox = document.querySelector(".mainBox");
let hideBtn = document.querySelectorAll(".hideBtn");
let mafiaHideBtn = document.querySelector("#mafiaHideBtn");

Ready();

mafiaHideBtn.addEventListener("click", () => {
    mafiaCard.style.visibility = "hidden";
    mainBox.style.visibility = "visible";
});

for(let i = 0; i< hideBtn.length; i++) {
    hideBtn[i].addEventListener("click", () => {
        card[i].style.visibility = "hidden";
        mainBox.style.visibility = "visible";
    })
}

function Ready(){
    while(array.length > 0) {
        let name = array.splice(Math.floor(Math.random()* array.length), 1)[0];
        shuffle.push(name);
    }
}

document.querySelector(".logoImg").onclick = function() {
    if(cnt > shuffle.length) {
        alert("역할 선택 끝");
        window.location.reload();
    }
    let num = shuffle[cnt++];
    mainBox.style.visibility = "hidden";
    if(num == 5) {
        mafiaCard.style.visibility = "visible";
    }
    else {
        card[num].style.visibility = "visible";
    }
    
}

// document.querySelector("#hideBtn").onclick = function() {
//     document.querySelector(".black").style.visibility="hidden";
//     document.querySelector(".card").style.visibility="hidden";
// }