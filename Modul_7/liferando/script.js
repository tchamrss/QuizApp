
let dishNames = ['Pfefferkarpfen', 'Lachsforellenfilet', 'Schäufele', 'Wiener Tafelspitz','Pizza Salami','Pizza Quattro Fromaggi','Pizza alla Verdura','Pizza Diavolo'];
let dishSides = ['dazu gemischter Salat', 'dazu gemischter Salat', 'mit Kloß & Salat', 'mit Meerrettichsoße, Kartoffeln &amp; Salat', ' ',' ',' ',' '];
let dishPrices = [13.75, 12.50, 14.20, 13.80, 9.95, 12.45, 11.90, 10.90];
let numberCurrentDishes = 0;
let numberDishes=1;
let currentSum; 
let sumTotal=0;
let singleSum =0;


function render (){
    let content = document.getElementById('dishes');
    content.innerHTML=``;

    for(let i =0; i< dishNames.length;i++){

        const dishName = dishNames[i];
        const dishSide = dishSides[i];
        const dishPrice = dishPrices[i];
        
        content.innerHTML += generateDishesHTML(dishName,dishSide,dishPrice, i);
    }

}

function generateDishesHTML(dishName, dishSide, dishPrice,i) {
    
    return `
                <div class="dishes border border-light text-break">
                    <div id=addedDishName_${i} >
                        <h3>${dishName}</h3>
                        <div class="dish-side">
                            <span>${dishSide}</span>
                        </div>
                        <div class="dish-price">    
                            <span>${dishPrice.toFixed(2)} €</span>
                        </div>
                    </div>

                    <div>
                        <img src="img/plus.png" class="add-dishes" id="addButton_${i}" onclick="addToBasket(${i})" alt="">
                    </div>
                </div>

            `;
}

function generateCorbHTML(Names, Prices,i) {
    
    if((document.getElementById('basketChild_' + i))|| (document.getElementById('basketChild1_' + i))){
        numberDishes = +document.getElementById('numDish_' + i).innerHTML +1;
        document.getElementById('numDish_' + i).innerHTML = numberDishes;
        document.getElementById('numDish1_' + i).innerHTML = numberDishes;
        singleSum = mult(numberDishes,Prices[i]);
        document.getElementById('singleSum_' + i).innerHTML = singleSum.toFixed(2);
        document.getElementById('singleSum1_' + i).innerHTML = singleSum.toFixed(2);
    }else{
        numberDishes = 1;
        singleSum = mult(numberDishes,Prices[i]);
        
        document.getElementById('fullbasket').innerHTML +=
            `       
                <div id="basketChild_${i}" class="full-basket-child">
                    <div class="basketName text-break" ><b id="numDish_${i}">${numberDishes}</b> x ${Names[i]}</div>
                    <div class="addOrCancel">
                        <img onclick="addSingleDish(${i})" class="plus-minus border border-success border-opacity-10 border-2 border-dark" src="img/plus.png" alt="">
                        <img onclick="removeSingleDish(${i})" class=" plus-minus border border-success border-opacity-10 border-2 border-dark" src="img/minus.png" alt="">
                    </div>
                    <div class="cancel-dish">
                        <span id="singleSum_${i}" >${singleSum.toFixed(2)}</span>€
                        <img onclick="deleteDish(${i})" class="border border-success border-2 border-danger" src="img/trash.png" alt="">
                    </div>
                </div>

                

            `;

            document.getElementById('modalBasket-child').innerHTML +=
            `       
                <div id="basketChild1_${i}" class="full-basket-child">
                    <div class="basketName text-break" ><b id="numDish1_${i}">${numberDishes}</b> x ${Names[i]}</div>
                    <div class="addOrCancel">
                        <img onclick="addSingleDish(${i})" class="plus-minus border border-success border-opacity-10 border-2 border-dark" src="img/plus.png" alt="">
                        <img onclick="removeSingleDish(${i})" class=" plus-minus border border-success border-opacity-10 border-2 border-dark" src="img/minus.png" alt="">
                    </div>
                    <div class="cancel-dish">
                        <span id="singleSum1_${i}" >${singleSum.toFixed(2)}</span>€
                        <img onclick="deleteDish(${i})" class="border border-success border-2 border-danger" src="img/trash.png" alt="">
                    </div>
                </div>

                

            `;
    }
     
}

function addSingleDish(i){
    numberDishes = +document.getElementById('numDish_' + i).innerHTML +1;
    document.getElementById('numDish_' + i).innerHTML = numberDishes;
    document.getElementById('numDish1_' + i).innerHTML = numberDishes;
    singleSum = mult(numberDishes,Prices[i]);
    document.getElementById('singleSum_' + i).innerHTML = singleSum.toFixed(2);
    document.getElementById('singleSum1_' + i).innerHTML = singleSum.toFixed(2);
    generateCheckoutHTML('sumbasket');
    generateCheckoutHTML('modalBasket-child1');

}

function removeSingleDish(i){
    let content =document.getElementById('basketChild_' + i);
    let content1 =document.getElementById('basketChild1_' + i);
    
    numberDishes = +document.getElementById('numDish_' + i).innerHTML -1;
    if(numberDishes >0 ){
        document.getElementById('numDish_' + i).innerHTML = numberDishes;
        document.getElementById('numDish1_' + i).innerHTML = numberDishes;
        singleSum = mult(numberDishes,Prices[i]);
        document.getElementById('singleSum_' + i).innerHTML = singleSum.toFixed(2);
        document.getElementById('singleSum1_' + i).innerHTML = singleSum.toFixed(2);
        generateCheckoutHTML('sumbasket');
        generateCheckoutHTML('modalBasket-child1');

    }else{
        numberDishes = 0;
        numberCurrentDishes--;
        document.getElementById('numDish_' + i).innerHTML = numberDishes;
        document.getElementById('numDish1_' + i).innerHTML = numberDishes;
        singleSum = mult(numberDishes,Prices[i]);
        document.getElementById('singleSum_' + i).innerHTML = singleSum.toFixed(2);
        document.getElementById('singleSum1_' + i).innerHTML = singleSum.toFixed(2);
        /* content.classList.add('d-none');  */
        content.remove(); 
        content1.remove();
        
        generateCheckoutHTML('sumbasket');
        generateCheckoutHTML('modalBasket-child1');
    }
    
    if(checkEmpty()){
        document.getElementById('sumbasket').classList.add('d-none');
        document.getElementById('modalBasket-child1').classList.add('d-none');
        document.getElementById('basketkorb').classList.remove('d-none');
        document.getElementById('modalBasket-child2').innerHTML=`
        Füge etwas deinem Warenkorb hinzu, um dir etwas kochen zu lassen.
        `;   
        singleSum =0;
        sumTotal =0;
        numberCurrentDishes =0;

    }

}

function checkEmpty(){
    let empty =0;
    for (let j = 0; j < dishNames.length; j++) {
        let content =document.getElementById('basketChild_' + j);
        let content1 =document.getElementById('basketChild1_' + j);
        if(!content || !content1){
            empty++;

        }
        
    }
    if(empty == dishNames.length){
        return true;

    }else{
        return false;
    }
}


function mult(a,b){
    return a*b;

}

function addToBasket(i){
    let content =document.getElementById('basketChild_' + i);
    let content1 =document.getElementById('basketChild1_' + i);
    if(content || content1){
    
        Names = dishNames;
        Prices = dishPrices;
        document.getElementById('basketkorb').classList.add('d-none');       
        generateCorbHTML(Names,Prices,i);
        document.getElementById('sumbasket').classList.remove('d-none');
        generateCheckoutHTML('sumbasket');
        generateCheckoutHTML('modalBasket-child1');       

    }else{
        numberCurrentDishes++;
        Names = dishNames;
        Prices = dishPrices;
        document.getElementById('basketkorb').classList.add('d-none');       
        generateCorbHTML(Names,Prices,i);
        document.getElementById('sumbasket').classList.remove('d-none');
        generateCheckoutHTML('sumbasket');
        generateCheckoutHTML('modalBasket-child1');
        
    }

}


function deleteDish(i){
    numberCurrentDishes--;
    let content =document.getElementById('basketChild_' + i); 
    let content1 =document.getElementById('basketChild1_' + i); 
    if(numberCurrentDishes ==0){ 
        numberDishes = 0;
        document.getElementById('numDish_' + i).innerHTML = numberDishes;
        document.getElementById('numDish1_' + i).innerHTML = numberDishes;
        singleSum = mult(numberDishes,Prices[i]);
        document.getElementById('singleSum_' + i).innerHTML = singleSum.toFixed(2); 
        document.getElementById('singleSum1_' + i).innerHTML = singleSum.toFixed(2);          
        content.remove(); 
        content1.remove();
        document.getElementById('sumbasket').classList.add('d-none');
        document.getElementById('modalBasket-child1').classList.add('d-none');
        document.getElementById('basketkorb').classList.remove('d-none');
        document.getElementById('modalBasket-child2').innerHTML=`
        Füge etwas deinem Warenkorb hinzu, um dir etwas kochen zu lassen.
        `;
        singleSum =0;
        sumTotal =0;
        document.getElementById('basketPrice').innerHTML=`${sumTotal.toFixed(2)}`;
    } else{
        numberDishes = 0;
        document.getElementById('numDish_' + i).innerHTML = numberDishes;
        document.getElementById('numDish1_' + i).innerHTML = numberDishes;
        singleSum = mult(numberDishes,Prices[i]);
        document.getElementById('singleSum_' + i).innerHTML = singleSum.toFixed(2);
        document.getElementById('singleSum1_' + i).innerHTML = singleSum.toFixed(2);
        content.remove(); 
        content1.remove();
        generateCheckoutHTML('sumbasket');
        generateCheckoutHTML('modalBasket-child1');
    }  

}

function sumCal(){
    sumTotal=0;
    sumTotal1=0;
    for (let i = 0; i < dishNames.length; i++) {
        let content =document.getElementById('basketChild_' + i);
        let content1 =document.getElementById('basketChild1_' + i);
        if(content || content1){
            sumTotal = +document.getElementById('singleSum_' + i).innerHTML + sumTotal;
            sumTotal1 = +document.getElementById('singleSum1_' + i).innerHTML + sumTotal1;
        
        }
    }

    return sumTotal;
}

function generateCheckoutHTML(Id) {
    
    
    let delCost;
    if(sumCal() < 150){
        delCost = 4;

    }else{
        delCost = 0;
    }
    let total = sumCal() + delCost;
    document.getElementById('basketPrice').innerHTML=`${sumTotal.toFixed(2)}`;

    document.getElementById(Id).innerHTML=`
    <div class="checkout border-top border-dark" id="checkout">
        <div class="checkout-left">
            <span>Zwischensumme:</span>
            <span>Lieferkosten:</span>
            <span>Gesamt:</span>
        </div>
        <div class="checkout-right">
            <span id="subtotal">${sumTotal.toFixed(2)} €</span>
            <span id="deliveryCost">${delCost.toFixed(2)} €</span>
            <span id="total">${total.toFixed(2)} €</span>
        </div>

    </div>
    
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1">
    Bestellen </button>
    
   
    `;
   /*  modalWarenkorb(); */
                    
}

function modalWarenkorb(){
    if(checkEmpty()){
        document.getElementById('modalBasket-child1').classList.add('d-none'); 
        document.getElementById('modalBasket-child2').innerHTML=`
        Füge etwas deinem Warenkorb hinzu, um dir etwas kochen zu lassen.
        `;
        singleSum =0;
        sumTotal =0;
        numberCurrentDishes =0;

    }else{
        document.getElementById('modalBasket-child').classList.remove('d-none'); 
        document.getElementById('modalBasket-child1').classList.remove('d-none'); 
        document.getElementById('modalBasket-child2').innerHTML=``;
        generateCheckoutHTML('modalBasket-child1');

    }
    
  

}




function order(){
document.getElementById('orderMessage').classList.remove('d-none');
document.getElementById('orderMessage').style.display='flex';

}


window.onscroll = function (){
    
    if(window.scrollY > 58){
        document.getElementById('shoppingCart').style = 'top: 0';

    }else{
        document.getElementById('shoppingCart').style = 'top: 60px';

    }
}

window.onscroll = function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        document.getElementById('shoppingCart').classList.add('scroll-class');
    
    }else{
        document.getElementById('shoppingCart').classList.remove('scroll-class');
    }
};