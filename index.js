const title = document.querySelector('#title');
console.log(title.className)
const CLICKED_CLASS = "clicked";


// class name add & remove
function handleClick(){
    // title.classList.toggle(CLICKED_CLASS); this line does same below codes

    const hasClass = title.classList.contains(CLICKED_CLASS);

    if (hasClass){
        title.classList.remove(CLICKED_CLASS);
    } else {
        title.classList.add(CLICKED_CLASS);
    }
}
function init(){
    title.addEventListener("click", handleClick);
}
init();





// listen wi-fi connection and log
function handleOffline() {
    console.log("Bye bye");
}

function handleOnline() {
    console.log("Welcome back");
}
window.addEventListener('offline',handleOffline);
window.addEventListener('online',handleOnline);
