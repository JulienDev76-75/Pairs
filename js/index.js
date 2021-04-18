//************** variable globales ***********

let cardColors =  ["red","yellow", "green", "pink", "purple", "blue", "brown", "red","yellow", "green", "pink", "purple", "blue", "brown"];
let cardAssociate = [];
let score = 0;
let timeleft = 40;
let card = document.getElementsByClassName("card");
let countDownDate = document.getElementById("timer");

//************** functions ***********

//The player push on button to activate the timer function
function timer () {
    let downloadTimer = setInterval(function(){
    //every second, the timeleft decrease until 0
    timeleft--;
    countDownDate.textContent = timeleft;
    //if timeleft <= 0, the game restart and timer too
    if(timeleft <= 0) {
        clearInterval(downloadTimer);
        EndofGame();
    }
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

//Game is beggining when the player pick a card
for(let i = 0;i < card.length;i++) {
    card[i].onclick= function(){
        card[i].classList.remove("bg-dark");
        card[i].style.backgroundColor = cardColors[i];
        cardAssociate.push(card[i]);
        Intervalles ();
    }
};

function Intervalles () {
    //if the player is chosing 2 cards only, cardAssociate contains 2 items, comparaison start
    if (cardAssociate.length === 2) {
        setTimeout(function () {comparaison()}, 1100);
    }
    //if the player is chosing more than 2 cards cardAssociate will have 3 items, so this condition is applied
     else if (cardAssociate.length > 2){
         alert("Ne choisissez que deux cartes");
         score += 0;
         cardAssociate[0].classList.add("bg-dark");
         cardAssociate[1].classList.add("bg-dark");
         cardAssociate[2].classList.add("bg-dark");
     };
}

 function comparaison () {
    //if style.background items in CardAssociate array are same
    if (cardAssociate[0].style.backgroundColor === cardAssociate[1].style.backgroundColor){
        //the victory is defined by score declared as variable upside, score start at zero and increase if pairs are found
        score += 1;
        //we empty the cardAssociate array, if we don't do that : we can't continue to compare cards, because the array contains too much items (more than 2)
        cardAssociate.length = 0;
        findWinner(); 
    }

    else {
        for(let i = 0;i < cardAssociate.length;i++) {
        score += 0;
        //if the pairs are not same, so cards will recover his bg-dark
        cardAssociate[0].classList.add("bg-dark");
        cardAssociate[1].classList.add("bg-dark");
        cardAssociate.length = 0;
    }
    };
}

function findWinner(){
    if (score === 7){
        alert ("bravo vous avez gagné !");
        //the function is avoided to start
        timeleft = 40;
    };
}

function EndofGame ()
{
    if (timeleft === 0 && score <7){
        alert ("*soupir*loser");
        document.location.reload();
    }
}

//************** Code ***********

shuffle(cardColors);

//Game is beggining when the player pick a card
for(let i = 0;i < card.length;i++) {
    card[i].onclick= function(){
        card[i].classList.remove("bg-dark");
        card[i].style.backgroundColor = cardColors[i];
        cardAssociate.push(card[i]);
        Intervalles ();
    }
};

//if the player appuie sur Jouer alors il peut jouer, sinon les cards sont en display : none



















