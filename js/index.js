//************** variable globales ***********
let cardColors =  ["red","yellow", "green", "pink", "purple", "blue", "brown", "red","yellow", "green", "pink", "purple", "blue", "brown"];
let cardAssociate = [];
let score = 0;
var time = 30;

let card = document.getElementsByClassName("card");
for(let i = 0;i < card.length;i++) {
    card[i].onclick= function(){
        card[i].classList.remove("bg-dark");
        card[i].style.backgroundColor = cardColors[i];
        cardAssociate.push(card[i]);
        Intervalles ();
    }
};

function Intervalles () {
    if (cardAssociate.length === 2) {
        setTimeout(function () {comparaison()}, 1000);
    }
     else if (cardAssociate.length > 2){
         alert("Ne choisissez que deux cartes");
         cardAssociate[0].classList.add("bg-dark");
         cardAssociate[1].classList.add("bg-dark");
         cardAssociate[2].classList.add("bg-dark");
     };
}

 function comparaison () {
    if (cardAssociate[0].style.backgroundColor === cardAssociate[1].style.backgroundColor){
        score += 1;
        cardAssociate.length = 0;
    }
    else {
        for(let i = 0;i < cardAssociate.length;i++) {
        score += 0;
        cardAssociate[0].classList.add("bg-dark");
        cardAssociate[1].classList.add("bg-dark");
        cardAssociate.length = 0;
    }
    };
}

function winner () {
    if (score = 7){
        alert ("bravo");
    }
}
//     function choixPlayer() {
//     if (cardAssociate[0] === cardAssociate[1]) {
//         card[i].style.visibility = "visible";
//           score ++;
//         }

// function timer() {
//     let seconds = 45;
//     let timer = document.getElementById("timer");
//     timer.innerHTML = "<i class='fas fa-hourglass-start ml-2'></i> Temps restant : " + seconds + " s";
//     setInterval(function(){
//       if(seconds >= 1) {
//         seconds --;
//         timer.innerHTML = "<i class='fas fa-hourglass-start ml-2'></i> Temps restant : " + seconds + " s";
//       }
//       else {
//         restartGame(false);
//       }
//     }, 1000);
//   }

//   let startingMinute = 1;
//   let time = startingMinute * 60;









