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

breakfastClick.addEventListener("click", toggleBreakfast)
lunchClick.addEventListener("click", toggleLunch)
brunchClick.addEventListener("click", toggleBrunch)
dinnerClick.addEventListener("click", toggleDinner)
drinksClick.addEventListener("click", toggleDrinks)


