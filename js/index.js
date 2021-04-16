//************** variable globales ***********
let cardColors =  ["red","yellow", "green", "pink", "purple", "blue", "brown", "red","yellow", "green", "pink", "purple", "blue", "brown"];
let cardAssociate = [];
let score = 0;

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
        setTimeout(function () {comparaison()}, 1500);
    }
    else if (cardAssociate.length > 2){
        alert("Ne choisissez que deux cartes");
    };
}

 function Comparaison () {
    if (cardAssociate[0].style.backgroundColor === cardAssociate[1].style.backgroundColor){
        console.log(cardAssociate);   
        alert("les deux cartes sont identiques");
        score += 1;
        cardAssociate.length = 0;
    }
    else {
        alert("les deux cartes ne sont pas identiques");
        score += 0;

    };
}
//     function choixPlayer() {
//     if (cardAssociate[0] === cardAssociate[1]) {
//         card[i].style.visibility = "visible";
//           score ++;
//         }
//     else {
//         card[i].classList.replace("bg-dark");
//         }
// };

// function intervalles() {
//     setInterval(function(){}, 3000);









