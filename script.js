// Haalt elementen op uit de DOM 
let sadBeerimg= document.getElementById("sadBeer")
const cakeBtn= document.getElementById("cakeBtn")
const soapBtn= document.getElementById("soapBtn")
const sleepBtn= document.getElementById("sleepBtn")
let textElement= document.getElementById("text")


let beerStatus = 0; // houdt de status van de beer bij
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


// Het veranderen van de afbeeldingen en zinnen 
function veranderBeerImage() {
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

}
// Het terug zetten naar de default agbeelding en tekst
function resetBeer(){
    sadBeer.src= "img/sadBeer.png" // dit brengt de afbeeldingen weer terug naar origineele afbeelding
    beerStatus= 0; // dit zet de status weer op nul
    textElement.textContent = "Beertje heeft honger, geef hem wat te eten." // dit brengt net als bij de afbeelding de tekst weer naar zijn orginele tekst
}

// koppelen van knoppen 
cakeBtn.addEventListener("click", veranderBeerImage)
soapBtn.addEventListener("click", veranderBeerImage)
sleepBtn.addEventListener("click", veranderBeerImage)














