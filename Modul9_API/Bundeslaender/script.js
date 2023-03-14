let letters = [];
let bundeslaender=[
    {
        "name": "Baden-Württemberg",
        "population": 11.1,
        "url": "https://www.baden-wuerttemberg.de/de/startseite/"
    },
    {
        "name": "Bayern",
        "population": 13.1,
        "url": "https://www.bayern.de/"
    },
    {
        "name": "Berlin",
        "population": 3.7,
        "url": "https://www.berlin.de/"
    },
    {
        "name": "Brandenburg",
        "population": 2.5,
        "url": "https://www.brandenburg.de/"
    },
    {
        "name": "Bremen",
        "population": 0.7,
        "url": "https://www.bremen.de/"
    },
    {
        "name": "Hamburg",
        "population": 1.8,
        "url": "https://www.hamburg.de/"
    },
    {
        "name": "Hessen",
        "population": 6.3,
        "url": "https://www.hessen.de/"
    },
    {
        "name": "Mecklenburg-Vorpommern",
        "population": 1.6,
        "url": "https://www.mecklenburg-vorpommern.de/startseite/"
    },
    {
        "name": "Niedersachsen",
        "population": 8,
        "url": "https://www.niedersachsen.de/startseite/"
    },
    {
        "name": "Nordrhein-Westfalen",
        "population": 17.9,
        "url": "https://www.land.nrw/"
    },
    {
        "name": "Rheinland-Pfalz",
        "population": 4.1,
        "url": "https://www.rlp.de/de/startseite/"
    },
    {
        "name": "Saarland",
        "population": 1,
        "url": "https://www.saarland.de/DE/home/home_node.html"
    },
    {
        "name": "Sachsen",
        "population": 4.1,
        "url": "https://www.sachsen.de/"
    },
    {
        "name": "Sachsen-Anhalt",
        "population": 2.2,
        "url": "https://www.sachsen-anhalt.de/startseite/"
    },
    {
        "name": "Schleswig-Holstein",
        "population": 2.9,
        "url": "https://www.schleswig-holstein.de/DE/Home/home_node.html"
    },
    {
        "name": "Thüringen",
        "population": 2.1,
        "url": "https://thueringen.de/"
    }
];


function render(filter){
    document.getElementById('allLaender').innerHTML ='';
    for (let i = 0; i < bundeslaender.length; i++) {
        const land = bundeslaender[i];
        const firstLetter = land['name'].charAt(0);
        population = (land['population'] + '').replace('.',',');
        
        
        //debugger
        if (!filter || filter == firstLetter) {
            document.getElementById('allLaender').innerHTML += /*html*/`
            <div class="single-laender-cont" id="singleLaender_${i}" onclick="openLand(${i})">
            <span> <b>${land["name"]}</span></b> <br>
            <span class="text-muted" >${population} Millionen</span> 

            </div> 
            
            `;
        }

        if (!letters.includes(firstLetter)) {
            letters.push(firstLetter);
        }
    

    renderLetters();
    }


}

function setFilter(letter) {
    render(letter);
}

function renderLetters() {
    let letterbox = document.getElementById('letterbox');
    letterbox.innerHTML = '';

    for (let i = 0; i < letters.length; i++) {
        const letter = letters[i];
        letterbox.innerHTML += `<div onclick="setFilter('${letter}')" class="letter">${letter}</div>`;
    }
}

function openLand(i){
   let  url = bundeslaender[i]['url'];
    window.open(url);

}