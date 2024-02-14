"use strict"

const menuButton = document.querySelector('.menu-btn');
const closeButton = document.querySelector('.close-btn');
const navContainer = document.getElementById('nav-list-container');

console.log(document.getElementById("nav-list-container"));
menuButton.addEventListener('click',()=>{
  navContainer.style.display = "flex"
  navContainer.style.marginLeft = "0rem";

})


closeButton.addEventListener('click',()=>{
  navContainer.style.display = "none"
})
