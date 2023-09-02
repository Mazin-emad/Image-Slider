// st v 
let container = document.querySelector(".slider-container"),
sliderNumber = document.querySelector(".slide-number"),
imgs = document.querySelectorAll(".slider-container img"),
imgsArr = Array.from(imgs),
sliderCount = imgsArr.length,
indicators = document.querySelector(".indicators"),
prev = document.querySelector(".prev"),
next = document.querySelector(".next"),
current = 0;


// creat lis
// cheker

function creatLis() {
  sliderNumber.innerHTML = `#${current + 1} From ${sliderCount}`
  let ul = document.createElement("ul")
  imgsArr.forEach((img, i) => {
    img.setAttribute("data-i", `${i}`)

    li = document.createElement("li")

    li.appendChild(document.createTextNode(`${i + 1}`))

    li.setAttribute("data-i", `${i + 1}`)

    ul.appendChild(li);
    indicators.appendChild(ul);

  })
}

creatLis()

let lis = document.querySelectorAll(".indicators ul li");
let lisArr = Array.from(lis);
lisArr.forEach(li => {
  li.onclick = function () {
    
      current  = li.dataset.i - 1

      cheker()
    }
})
cheker()
next.onclick = function () {
  if (current < sliderCount - 1){
    ++current;
  cheker()
  }
}

prev.onclick = function () {
  if (current > 0){
    --current;
  cheker()
  }
}

function cheker() {

lisArr.forEach(li => {
  
  if (li.dataset.i == 1){
    li.classList.add("active")
  }else (
    li.classList.remove("active")
  )

  if (li.dataset.i == current + 1){
    li.classList.add("active")
  }else (
    li.classList.remove("active")
  )

})

imgsArr.forEach((img, i) => {
  if (i == current){
    img.classList.add("active")
  }
  if (img.dataset.i == current){
    img.classList.add("active")
  }else {
    img.classList.remove("active")
  }
  })  

  if (current >= sliderCount - 1){
    next.classList.add("disabled")
  }else {
    next.classList.remove("disabled")
  }
  if (current <= 0){
    prev.classList.add("disabled")
  }else{
    prev.classList.remove("disabled")
  }

  sliderNumber.innerHTML = `#${current + 1} From ${sliderCount}`
}


