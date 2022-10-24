// **Consegna**
// Copiamo la repo del carousel in una nuova cartella (attenzione ad eliminare la cartella .git) e facciamo funzionare il carousel, oltre che con i bottoni anche in autoplay al caricamento della pagina.
// **BONUS:**
// Passando con il mouse sopra le immagini l’autoplay si ferma per poi ripartire quando il mouse esce dallo slider


const imageSource = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"];

const album = document.querySelector(".album");
let imgCounter = 0;
const topButton = document.querySelector(".arrow.top");
const bottomButton = document.querySelector(".arrow.bottom");
const imgPreview = document.querySelector(".img-preview");



for(let i = 0 ; i < imageSource.length; i++ ){
    album.innerHTML += `<img class="sc-img" src="../img/${imageSource[i]}" alt="">`;
    imgPreview.innerHTML += `<div class="box-img">
                                <img  src="../img/${imageSource[i]}" alt="">
                            </div>`;
                  
}


const imgHtmlArr = document.getElementsByClassName("sc-img");
const imgPreviewArr = document.getElementsByClassName("box-img");

for(let i = 0; i < imgPreviewArr.length; i ++){
    imgPreviewArr[i].number = i;
    imgHtmlArr[i].number = i;
    
}
for(let i = 0 ; i < imgPreviewArr.length; i++){
    imgPreviewArr[i].addEventListener("mouseover", function(){

        removeActive();
        clearInterval(timedActive);
        imgCounter = this.number;
        setActive();
    
    })
}

setActive();

timedActive = setInterval (function (){
    removeActive();
    incrementCounter();
    setActive();
},2000);

topButton.addEventListener("click" , function(){
    removeActive();
    decrementCounter();
    setActive();
    
})

bottomButton.addEventListener("click" , function(){
    removeActive();
    incrementCounter();
    setActive();
})

function incrementCounter(){
    if(imgCounter === imageSource.length-1){
        imgCounter = 0;
    }else{
        imgCounter++;
    }
}

function decrementCounter(){
    if(imgCounter === 0){
        imgCounter = imageSource.length-1;
    }else{
        imgCounter--;
    }
}


function removeActive(){
    imgHtmlArr[imgCounter].classList.remove("active");
    imgPreviewArr[imgCounter].classList.remove("active");
}

function setActive(){
    imgHtmlArr[imgCounter].classList.add("active");
    imgPreviewArr[imgCounter].classList.add("active");
}