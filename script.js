let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeDetailsButton = document.querySelectorAll('.seeDetails');
let backButton = document.querySelector('#back');
let introduce = document.querySelectorAll('.introduce');
let buy = document.querySelectorAll('.BuyNow');
let cart = document.querySelectorAll('.AddToCart');
let controls = document.querySelectorAll('.controls')

nextButton.onclick = function(){
    showSlider('next');
}
prevButton.onclick = function(){
    showSlider('prev');
}
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    }else{
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }
    setTimeout(()=>{
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 1000)
}
seeDetailsButton.forEach((button) => {
    button.onclick = function(){
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetails');
        controls.style.display = "none"
    }
});

introduce.style.display = 'none'

function handle(){
    carousel.classList.remove("showDetails")
    alert("hi")
}
buy.onclick = function(){
    alert("in progress")
}
cart.onclick = function(){
    alert("in progress")
}
function func(){
    alert("clicked")
}