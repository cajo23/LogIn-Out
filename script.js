/*en variabel för användarnamn och en för lösen*/ 
const namn = "Bella";
const password ="qwe123";

/*Skapar text för inlogg Globalt*/ 
var textElement = document.createElement("p");
textElement.id = "text";
var text = document.createTextNode("Välkommen, du är nu inloggad");
textElement.appendChild(text);
document.body.appendChild(textElement);
textElement.style.display = "none";


/*Skapar knappen för att logga ut. Globalt */
const newButton = document.createElement("button");
newButton.textContent = "logga ut";
newButton.id="logOutBtn";
newButton.style.visibility = "hidden";
document.body.appendChild(newButton);


const bodyTag = document.querySelector("body");
const container = document.getElementById("container");

/*skapar funktion innehållande knapp och text */
function skapaInloggadSida(){
    container.style.visibility = "hidden";
    newButton.style.visibility = "visible";
    textElement.style.display = ""
    
}

/*Kontrollera localStorage om vi är inloggade skapaInloggadSida */
if (localStorage.getItem("loggedIn")){
    skapaInloggadSida();
   
    
}

/*En funktion för kontroll av input.value som sen jämförs med namn och lösen i if statement*/
function LogInAttempt(){

   const inpUser = document.getElementById("inpKey").value;
   const inpPass = document.getElementById("inpValue").value;
    
    if (inpUser === namn && inpPass === password){
        /*Sätter en localStorage att vi är inloggade och hämtar funktion
        sätter en location.reload(); */
        localStorage.setItem("loggedIn", true);
        skapaInloggadSida();
        location.reload();

        /*Annars får vi ut felmeddelande rensar localStorage och reload*/
    }else{
        alert("Fel användarnamn/lösenord");
        localStorage.clear();
        location.reload();
  }
}

/*funktion för logga ut. Tar bort loggedin.
Gör container synlig. knappen dold och text dold.*/
function loggaUt(){
    localStorage.removeItem("loggedIn");
    container.style.visibility = "visible";
    newButton.style.visibility = "hidden";
    textElement.style.display = "none";
    
}


/*skapar EventListeners som lyssnar på knapptryck och lagt in funktioner*/
newButton.addEventListener("click", function(){
    loggaUt();
});

document.getElementById("btnLogin").addEventListener("click", function(){
    LogInAttempt();
});