const breakfastMenu = document.getElementById("breakfastMenu")
const breakfastClick = document.getElementById("breakfastClick")
const lunchMenu = document.getElementById("lunchMenu")
const lunchClick = document.getElementById("lunchClick")

function hideBfast(){
  console.log('this is working')
  breakfastMenu.style.display = (breakfastMenu.style.display == "")
  ? "none"
  : "";

  breakfastClick.style.backgroundColor = (breakfastClick.style.backgroundColor == "gray")
  ? "#ff3933"
  : "gray";
}

function hideLunch(){
  lunchMenu.style.display = (lunchMenu.style.display == "")
  ? "none"
  : "";

  lunchClick.style.backgroundColor = (lunchClick.style.backgroundColor == "gray")
  ? "#ff3933"
  : "gray";
}


breakfastClick.addEventListener("click", hideBfast)
lunchClick.addEventListener("click", hideLunch)
