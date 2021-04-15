//************** variable globales ***********
let cardColors =  ["red","yellow", "green", "pink", "purple", "blue", "red","yellow", "green", "pink", "purple", "blue"];
let cardAssociate = [];

let card = document.getElementsByClassName("card");

for(var i = 0;i < card.length;i++){
    card[i].onclick= function(){
        card.style.backgroundColor = "yellow";
        card.innerHTML = "YOU CLICKED ME";
    };
}

//let card = document.getElementsByClassNames("card");
//card.addEventListener("click", function () {
//    card.style.backgroundColor = "yellow";
//});




