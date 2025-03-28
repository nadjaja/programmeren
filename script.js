// Haalt elementen op uit de DOM 
let sadBeerimg= document.getElementById("sadbeer")
const cakeBtn= document.getElementById("cakeBtn")
const soapBtn= document.getElementById("soapBtn")
const sleepBtn= document.getElementById("sleepBtn")
let textElement= document.getElementById("text")


let status = 0; // houdt de status van de beer bij
let sound = new Audio ("geluid/sparkle.mp3") 
// bron van de sound effect: https://pixabay.com/sound-effects/search/sparkle/?pagi=4*/, bron van hoe ik geluid kan toevoegen in js: https://stackoverflow.com/questions/9419263/how-to-play-audio


// Array voor zinnen en afbeeldingen 
let texten = [ 
    "Beertje heeft net gegeten, en is nu vies!", 
    "Beertje is nu schoon en nu is die klaar om een dutje te doen.", 
    "Beertje heeft gegeten, gewassen en geslapen. Hij is nu helemaal gelukkig!"];

const afbeeldingen= [
    "img/viesbeer.png",
    "img/normaalbeer.png",
    "img/happybeer.png"]; 


function veranderBeerImage(status) {
    sadBeerimg.src = afbeeldingen[status]; // De afbeelding veranderd op basis van de status
    textElement.textContent = texten[status]; // De tekst-element veranderd ook op basis van de status
        if (status == 0){
            status= 1 }
        
        else if (status == 1){
            status = 2
        }
        else if (status == 2){
            sound.play(); // speelt de sound effect af
            setTimeout(resetBeer, 3000) // Het herstarten van de functie, na een bepaalde tijd 
        }  

}

// Het terug zetten naar de default afbeelding en tekst
function resetBeer(){
    sadBeerimg.src= "img/sadbeer.png" // dit brengt de afbeeldingen weer terug naar origineele afbeelding
    textElement.textContent = "Beertje heeft honger, geef hem wat te eten." // dit brengt net als bij de afbeelding de tekst weer naar zijn orginele tekst
}

// koppelen van knoppen 
cakeBtn.addEventListener("click", function(){veranderBeerImage(0)})
soapBtn.addEventListener("click", function(){veranderBeerImage(1)})
sleepBtn.addEventListener("click", function(){veranderBeerImage(2)})














// Het veranderen van de afbeeldingen en zinnen 
/* test/* 
function veranderBeerImage(status) {
    sadBeer.src = afbeeldingen[beerStatus]; // De afbeelding veranderd op basis van de status
    textElement.textContent = texten[beerStatus]; // De tekst-element veranderd ook op basis van de status

        if (beerStatus== 0){
            beerStatus = 1
        } else if (beerStatus== 1) { 
            beerStatus = 2
        } else if (beerStatus== 2){
            sound.play(); // speelt de sound effect af
            setTimeout(resetBeer, 3000) // Het herstarten van de functie, na een bepaalde tijd
        }

} status= 0; // dit zet de status weer op nul
*/ 