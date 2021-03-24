let array = [5, 5, 0, 1, 2, 2, 2, 2, 2, 2];
let shuffle = [];
let cnt = 0;
let card = document.getElementsByClassName('card');

Ready();

function Ready(){
    while(array.length > 0) {
        let name = array.splice(Math.floor(Math.random()* array.length), 1)[0];
        shuffle.push(name);
    }
}

document.querySelector(".logoImg").onclick = function() {
    console.log(shuffle);
    let num = shuffle[cnt++];
    console.log(num);
    if(num == 5) {
        console.log("das");
        document.querySelector(".mafiaCard").style.visiblity = "visible";
        document.querySelector(".black").style.visibility="visible";
    }
}

// document.querySelector("#hideBtn").onclick = function() {
//     document.querySelector(".black").style.visibility="hidden";
//     document.querySelector(".card").style.visibility="hidden";
// }