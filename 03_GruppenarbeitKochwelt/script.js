async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}


function showmenu(){
    document.getElementById('Men').classList.add('show-overlay-menu');

}

function closeMenu(){
    document.getElementById('Men').classList.remove('show-overlay-menu');

}

function dateCurrent(){

    const d = new Date();
    document.getElementById("dateCur").innerHTML = d.toDateString();

}


function portionCalc(){
    let inputField1 = +document.getElementById("inputField").value;
    let inputField = Math.round(inputField1*100)/100; 

    if (inputField1 >= 1 && inputField1 <= 15) {
        Math.floor(inputField);
        document.getElementById("salatGurke").innerHTML = 1.00 * inputField/3 + " " + "Hähnchen";
        document.getElementById("paprikaschote").innerHTML = 80.00 * inputField/3 + " " + "g Magarine";
        document.getElementById("tomaten").innerHTML = 4.00 * inputField/3 + " " + "EL Paprikapulver";
        
    } else {
        alert("Die Berechnung beginnt mit der zweiten Person und gilt maximal für 15.")
        location.reload();
    }
    
    

}


function generate() {
    let inputField = document.getElementById("inputField").value;

    if (inputField >= 1 && inputField <= 15) {
        Math.floor(inputField);
        document.getElementById("salatGurke").innerHTML = 0.25 * inputField + " " + "Salatgurke";
        document.getElementById("paprikaschote").innerHTML = 0.25 * inputField + " " + "Paprika, rot und grün";
        document.getElementById("tomaten").innerHTML = 125 * inputField + " " + "g Tomaten";
        document.getElementById("zwiebeln").innerHTML = 0.5 * inputField + " " + "Ziebeln";
        document.getElementById("schafskaese").innerHTML = 50 * inputField + " " + "g Schafskäse";
        document.getElementById("oliven").innerHTML = 5 * inputField + " " + "Oliven aus dem Glas";
        document.getElementById("zitrone").innerHTML = 0.25 * inputField + " " + "Zitrone";
        document.getElementById("olivenoel").innerHTML = 1 * inputField + " " + "EL Olivenöl";
    } else {
        alert("Die Berechnung beginnt mit der zweiten Person und gilt maximal für 15.")
        location.reload();
    }

}

function openNavResponsive() {
    document.getElementById("navMenu").classList.add("transform");
}

function closeNavResponsive() {
    document.getElementById("navMenu").classList.remove("transform");
}