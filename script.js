const buttonValidate = document.querySelector(".button")
const buttonReplay = document.querySelector(".replay")

buttonReplay.disabled = true;

function play(){
    let playerChoice = document.querySelector('input[name="choix"]:checked');

    let playerChoiceValue = playerChoice.value

    const pierre = "pierre"
    const feuille = "feuille"
    const ciseau = "ciseau"

    document.querySelector('.player').innerHTML = playerChoiceValue === 'pierre' ? pierre : playerChoiceValue === 'feuille' ? feuille : ciseau;
    
    let computerChoice = computerDraw([pierre, feuille, ciseau]) 
    displayImages(playerChoiceValue, computerChoice)
    let result = winningChoice(playerChoiceValue, computerChoice)
    const resultGame = document.querySelector(".displayResult")

    resultGame.innerHTML = result
    buttonReplay.disabled = false;
    buttonValidate.disabled = true;
}

function displayImages(playerChoiceValue, computerChoice){
    const displayPlayer = document.querySelector(".player")
    const displayComputer = document.querySelector(".computer")

    const images = {
        pierre:`<img src="./images/pierre.png" alt="image pierre" class="images">`,
        feuille:`<img src="./images/feuille.png" alt="image feuille" class="images">`,
        ciseau: `<img src="./images/Ciseau.png" alt="image pierre" class="images">`
    }

    displayPlayer.innerHTML=`${images[playerChoiceValue]}`
    displayComputer.innerHTML=`${images[computerChoice]}`
}

function computerDraw(objects){

    let randomIndex = Math.floor(Math.random()* objects.length)

    return objects[randomIndex];
}

function winningChoice(playerChoiceValue, computerChoice){
  if(playerChoiceValue === computerChoice){
    return "Match nul"
  } else if(
    (playerChoiceValue === "pierre" && computerChoice === "ciseau") ||
    (playerChoiceValue === "ciseau" && computerChoice === "feuille") ||
    (playerChoiceValue === "feuille" && computerChoice === "pierre")
  ){
    return "Félicitations ! Vous avez gagné"
  } else{
    return "L'ordinateur a gagné"
  }
}

buttonReplay.addEventListener("click", function(){
    window.location.reload()
})