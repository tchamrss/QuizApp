function generate() {
    let inputField = document.getElementById("inputField").value;

    if (inputField >= 1 && inputField <= 15) {
        Math.floor(inputField);
        document.getElementById("suppengrün").innerHTML = 600 * inputField + " " + "g Suppengrün";
        document.getElementById("tomaten").innerHTML = 1 * inputField + " " + "Tomate";
        document.getElementById("zwiebeln").innerHTML = 2 * inputField + " " + " Zwiebel";
        document.getElementById("möhren").innerHTML = 500 * inputField + " " + "g Möhren";
        document.getElementById("lorbeerblätter").innerHTML = 2 * inputField + " " + "Lorbeerblätter";
        document.getElementById("kartoffeln").innerHTML = 600 * inputField + " " + "g festkochende Kartoffeln";
        document.getElementById("porree").innerHTML = 450 * inputField + " " + "g Porree";
        document.getElementById("erbsen").innerHTML = 250 * inputField + " " + "g tiefgefrorene Erbsen";
    } else {
        alert("Die Berechnung beginnt mit der zweiten Person und gilt maximal für 15.")
        location.reload();
    }

}