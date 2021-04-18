//************** variable globales ***********
let cardColors =  ["red","yellow", "green", "pink", "purple", "blue", "brown", "red","yellow", "green", "pink", "purple", "blue", "brown"];
let cardAssociate = [];
let score = 0;
let timeleft = 30;
let card = document.getElementsByClassName("card");
let countDownDate = document.getElementById("timer");

function timer () {
    let downloadTimer = setInterval(function(){
    timeleft--;
    countDownDate.textContent = timeleft;
    if(timeleft <= 0)
        clearInterval(downloadTimer);
        card[i].classList.remove("bg-dark");
    },1000);
}
//Apply the Fisher-Yates method to "randomize" cardColors Array
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
};
shuffle(cardColors);

//Gme is beggining when the player pick a card
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
        setTimeout(function () {comparaison()}, 1100);
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
        findWinner(); 
    }
    // else if (cardAssociate[0].style.backgroundColor === cardAssociate[0].style.backgroundColor) {

    //     score += 0;
    //     alert("c'est complètement idiot de sélectionner la même carte");
    //     cardAssociate.length = 0;
        
    // }
    else {
        for(let i = 0;i < cardAssociate.length;i++) {
        score += 0;
        cardAssociate[0].classList.add("bg-dark");
        cardAssociate[1].classList.add("bg-dark");
        cardAssociate.length = 0;
    }
    };
}

function findWinner(){
    if (score === 7){
        alert ("bravo vous avez gagné !");
    };
}


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



// Set the date we're counting down to














