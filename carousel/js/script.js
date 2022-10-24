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

imgHtmlArr[imgCounter].classList.add("active");
imgPreviewArr[imgCounter].classList.add("active");

topButton.addEventListener("click" , function(){
    imgHtmlArr[imgCounter].classList.remove("active");
    imgPreviewArr[imgCounter].classList.remove("active");

    if(imgCounter === 0){
        imgCounter = imageSource.length-1;
    }else{
        imgCounter--;
    }
    imgHtmlArr[imgCounter].classList.add("active");
    imgPreviewArr[imgCounter].classList.add("active");
})

bottomButton.addEventListener("click" , function(){
    imgHtmlArr[imgCounter].classList.remove("active");
    imgPreviewArr[imgCounter].classList.remove("active");
    if(imgCounter === imageSource.length-1){
        imgCounter = 0;
    }else{
        imgCounter++;
    }
    imgHtmlArr[imgCounter].classList.add("active");
    imgPreviewArr[imgCounter].classList.add("active");
})

