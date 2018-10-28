const breakfastMenu = document.getElementById("breakfastMenu")
const breakfastClick = document.getElementById("breakfastClick")
const lunchMenu = document.getElementById("lunchMenu")
const lunchClick = document.getElementById("lunchClick")
const brunchMenu = document.getElementById("brunchMenu")
const brunchClick = document.getElementById("brunchClick")
const dinnerMenu = document.getElementById("dinnerMenu")
const dinnerClick = document.getElementById("dinnerClick")
const drinksMenu = document.getElementById("drinksMenu")
const drinksClick = document.getElementById("drinksClick")

breakfastMenu.style.display='none'
breakfastClick.style.backgroundColor='#d8d8d8'
breakfastClick.style.color='black'

lunchMenu.style.display='none'
lunchClick.style.backgroundColor='#d8d8d8'
lunchClick.style.color='black'

brunchMenu.style.display='none'
brunchClick.style.backgroundColor='#d8d8d8'
brunchClick.style.color='black'

dinnerMenu.style.display='none'
dinnerClick.style.backgroundColor='#d8d8d8'
dinnerClick.style.color='black'

drinksMenu.style.display='none'
drinksClick.style.backgroundColor='#d8d8d8'
drinksClick.style.color='black'

function toggleBreakfast(){
  console.log('this works')
  breakfastMenu.style.display = (breakfastMenu.style.display == "")
  ? "none"
  : "";

  breakfastClick.classList.toggle('open');
}

function toggleLunch(){

  lunchMenu.style.display = (lunchMenu.style.display == "")
  ? "none"
  : "";

  lunchClick.classList.toggle('open');
}

function toggleBrunch(){

  brunchMenu.style.display = (brunchMenu.style.display == "")
  ? "none"
  : "";

  brunchClick.classList.toggle('open');
}

function toggleDinner(){

  dinnerMenu.style.display = (dinnerMenu.style.display == "")
  ? "none"
  : "";

  dinnerClick.classList.toggle('open');
}

function toggleDrinks(){

  drinksMenu.style.display = (drinksMenu.style.display == "")
  ? "none"
  : "";

  drinksClick.classList.toggle('open');
}

if(window.innerWidth >= 800){
  drinksClick.classList.add('open');
  dinnerClick.classList.add('open');
  brunchClick.classList.add('open');
  lunchClick.classList.add('open');
  breakfastClick.classList.add('open');
  drinksMenu.style.display = ""
  dinnerMenu.style.display = ""
  brunchMenu.style.display = ""
  lunchMenu.style.display = ""
  breakfastMenu.style.display = ""
}


function responsive(){
if(window.innerWidth >= 800){
  drinksClick.classList.add('open');
  dinnerClick.classList.add('open');
  brunchClick.classList.add('open');
  lunchClick.classList.add('open');
  breakfastClick.classList.add('open');
  drinksMenu.style.display = ""
  dinnerMenu.style.display = ""
  brunchMenu.style.display = ""
  lunchMenu.style.display = ""
  breakfastMenu.style.display = ""
//     breakfastClick.removeEventListener("click", toggleBreakfast)
// lunchClick.removeEventListener("click", toggleLunch)
// brunchClick.removeEventListener("click", toggleBrunch)
// dinnerClick.removeEventListener("click", toggleDinner)
// drinksClick.removeEventListener("click", toggleDrinks)
}

if(window.innerWidth <= 800){
  drinksClick.classList.remove('open');
  dinnerClick.classList.remove('open');
  brunchClick.classList.remove('open');
  lunchClick.classList.remove('open');
  breakfastClick.classList.remove('open');
  drinksMenu.style.display = "none"
  dinnerMenu.style.display = "none"
  brunchMenu.style.display = "none"
  lunchMenu.style.display = "none"
  breakfastMenu.style.display = "none"
}
}

breakfastClick.addEventListener("click", toggleBreakfast)
lunchClick.addEventListener("click", toggleLunch)
brunchClick.addEventListener("click", toggleBrunch)
dinnerClick.addEventListener("click", toggleDinner)
drinksClick.addEventListener("click", toggleDrinks)




window.addEventListener("resize", responsive)

