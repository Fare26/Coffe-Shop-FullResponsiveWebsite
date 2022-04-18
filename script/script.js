
var menuIcon = document.getElementById('menu-icon');
var closeBtn = document.getElementById('close-btn');
var mobileMenu = document.getElementById('mobile-menu');

menuIcon.addEventListener("click", function(){
    mobileMenu.style = 'display: block;';
})

closeBtn.addEventListener("click", function(){
    mobileMenu.style = 'display: none;';
})

var links = document.getElementsByClassName('link-navigation');

for(let i = 0; i<links.length; i++) {
    links[i].addEventListener("click", function(){
        mobileMenu.style = 'display: none;';
    })
}

var heroSection = document.getElementById('hero-section');
var heroHeight = heroSection.clientHeight;
var navbar = document.getElementById('navbar');
document.addEventListener("scroll", function(){
    if(document.documentElement.scrollTop > heroHeight) {
        if(!navbar.classList.contains('scrolling-navbar')) {
            navbar.classList.add('scrolling-navbar');
            navbar.style='position:fixed;';
        }
    }
    else {
        if(navbar.classList.contains('scrolling-navbar')) {
            navbar.classList.remove('scrolling-navbar');
            navbar.style='position:absolute;';
        }
    }
})




var myMap = L.map('map', {
    center: [44.130582, 18.118892],
    zoom: 17
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{ 
    attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);


var myIcon = L.icon({
    iconUrl: 'img/map-icon.png'
});
 
 
var marker = L.marker([44.130403, 18.118214], {
    icon: myIcon
}).addTo(myMap);

marker.bindPopup('We are here!');