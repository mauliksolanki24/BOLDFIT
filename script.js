var navbar= document.querySelector('.navbar');
var lastscroll= window.pageYOffset;

window.onscroll= function() {
    var currentscroll= window.pageYOffset;

    if(lastscroll>currentscroll){
        navbar.style.top="43px";
        navbar.style.opacity="1";
    }
    else {
        navbar.style.top="-100px";
        navbar.style.opacity="0";
        navbar.style.transition=".5s linear";
    }
    lastscroll=currentscroll;

}

// let age = prompt("type of age")

// if (age >= 18) {
//     alert ("You Can Vote")
// }

// else (
//     alert ("You Can Vote")
// )

