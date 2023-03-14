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


function dateCurrent(){

    const d = new Date();
    document.getElementById("dateCur").innerHTML = d.toDateString();

}


function portionCalc(){
    let inputField1 = +document.getElementById("inputField").value;
    let inputField = Math.round(inputField1*100)/100; 

    if (inputField1 >= 1 && inputField1 <= 15) {
        document.getElementById("hähnchen").innerHTML = 1.00 * Math.ceil(inputField/3) + " " + "Hähnchen";
        document.getElementById("magarine").innerHTML = 25 * inputField + " " + "g Magarine";
        document.getElementById("paprikapulver").innerHTML = 1.5 * inputField + " " + "EL Paprikapulver";
        
    } else {
        alert("Die Berechnung beginnt mit der zweiten Person und gilt maximal für 15.")
        location.reload();
    }

}