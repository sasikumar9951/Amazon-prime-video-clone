var btnpopup = document.querySelector(".btn-popup");
var btnlang = document.getElementById("btn-lang");
var grid = document.getElementById("grid")
var grid2 = document.getElementById("grid-2");
var menu = document.querySelector(".menu")
var menubox = document.getElementById("menubox")
var profile = document.getElementById("profile")
var profilebox =document.querySelector(".profilebox")

btnlang.addEventListener("mouseover", function () {
  btnpopup.style.display = "block";
});

btnpopup.addEventListener("mouseover", function () {
  btnpopup.style.display = "block";
});

btnpopup.addEventListener("mouseout", function () {
  btnpopup.style.display = "none";
});

profile.addEventListener("mouseover",function(){
  profilebox.style.display="block";
})

profilebox.addEventListener("mouseover",function(){
  profilebox.style.display="block";
})

profilebox.addEventListener("mouseout", function () {
  profilebox.style.display = "none";
});

menu.addEventListener("mouseover",function(){
  menubox.style.display="flex";
})

menubox.addEventListener("mouseover",function(){
  menubox.style.display="flex"
})

menubox.addEventListener("mouseout", function () {
  menubox.style.display = "none";
});

