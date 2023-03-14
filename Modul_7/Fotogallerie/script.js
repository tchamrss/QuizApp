let images =['img/IMG_3810.jpeg','img/IMG_3815.jpeg','img/IMG_3929.jpeg','img/IMG_3998.jpeg','img/IMG_3999.jpeg','img/IMG_4001.jpeg','img/IMG_4561.jpeg','img/IMG_4562.jpeg','img/IMG_4563.jpeg','img/IMG_4565.jpeg','img/IMG_4580.jpeg','img/IMG_4585.jpeg'];
let currentImage =0;
let myTimeout =0;
let slideIndex = 0;
  
function insertImages() {
    let content = document.getElementById('content-img');
    content.innerHTML = ``;
    for(let i =0; i < images.length; i++){
        content.innerHTML += /*html*/ `
        
            <div class="picture">
                <img src="${images[i]}" onclick="showImage(${i})">
            </div>
        
        `;  
    } 

}

function showImage(i){
    let content = document.getElementById('content-img');
    content.innerHTML = ``;
    content.classList.remove('picture');
    document.getElementById('diaBtn').classList.add('d-none');
    content.classList.add('showImg');
    /* content.classList.add('fade'); */
    content.innerHTML = /*html*/ `
    <div class="container">
        <div class="container-close"><button onclick="closeImage()" class="close btn btn-primary btn-lg">Close</button> </div>  
        <div class="container-img">
            <img class="fade" src="${images[i]}">  
            <a class="prev" onclick="plusSlides(-1,${i})">❮</a>
            <a class="next" onclick="plusSlides(1,${i})">❯</a>
        </div> 
        
    </div>
    `;

}

function closeImage(){
   
    clearTimeout(myTimeout);
    let content = document.getElementById('content-img');
    content.innerHTML = ``;
    content.classList.remove('showImg');
    insertImages();
    document.getElementById('diaBtn').classList.remove('d-none');
}

function startDiashow(){
         
    showImage(currentImage);
    myTimeout = setTimeout(startDiashow,2000);
    currentImage++;
    if(currentImage == images.length){
        currentImage=0;

    }
           
            
}

function plusSlides(n,i) {
    if(n<0){currentImage--;}
    if(n>0){currentImage++;}
    slideIndex = i+n;
    showSlides(slideIndex);
}
  
function showSlides(n) {
    if (n > (images.length-1)) {slideIndex = 0}    
    if (n < 0) {slideIndex = images.length - 1}
    showImage(slideIndex);
    
}


