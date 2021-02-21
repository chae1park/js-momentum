const body = document.querySelector("body");
const IMG_NUMBER = 4;

function handelImgLoad(){
    // console.log("finished loading");
}

function paintImage(imgNumber){

    const image = new Image();
    image.src = `./images/${imgNumber + 1}.jpg`;
    image.classList.add('bgImage');
    // image.addEventListener('load end',handelImgLoad);
    body.prepend(image);
}
function getRandom(){
    const number = Math.floor(Math.random()* IMG_NUMBER );
    return number; 
}
function init(){
    const randomNumber = getRandom();
    paintImage(randomNumber);
}

init();