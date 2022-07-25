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