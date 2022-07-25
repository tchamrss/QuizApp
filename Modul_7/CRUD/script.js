
let names =['Erica Mustermann','John Doe'];

let phoneNumbers =['015712345678','015798765432']; 
load();
function render(){
    let content = document.getElementById('content')
    content.innerHTML = ``;
    content.innerHTML += `<h1> My Contacts</h1> `;
    content.innerHTML += `
    <div>
        <input type="text" id="inputName" placeholder="Name">
        <input id ="inputTelefon" placeholder="Telefon">
        <button onclick="addContact()" id="contactAdd"> Hinzufügen</button>
   </div>`;

    for(let i =0; i< names.length;i++){

        const name = names[i];
        const phoneNumber = phoneNumbers[i];
        /* content.classList.add('card'); */
        content.innerHTML += `
        <div class = "card">
            <b>Name: </b>${name} <br>
            <b>Telefon: </b>${phoneNumber} <br>
            <button onclick="deleteContact(${i})">Löschen</button>

        </div>
        `;
    }
}

function addContact(){
    let name = document.getElementById('inputName');
    let phone = document.getElementById('inputTelefon');
    names.push(name.value);
    phoneNumbers.push(phone.value);
    render();
    save();
    
}

function deleteContact(i){
    names.splice(i,1);
    phoneNumbers.splice(i,1);
    render();
    save();
}

function save(){
    let namesAstext = JSON.stringify(names);
    localStorage.setItem('names', namesAstext);

    let namesAsphone = JSON.stringify(phoneNumbers);
    localStorage.setItem('phoneNumbers', namesAsphone);
}

function load(){
    let namesAstext = localStorage.getItem('names');
    let namesAsphone = localStorage.getItem('phoneNumbers');
    if(namesAstext && namesAsphone){

        names = JSON.parse(namesAstext);
        phoneNumbers = JSON.parse(namesAsphone);
    }
    
}