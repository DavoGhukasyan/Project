let next = document.querySelector(".next")
const prev = document.querySelector(".prev")
const image = document.querySelector(".image")
let first= 0
const images = [
    `picture/pakrishka.png`,
    `picture/15.png`,
    `picture/16.png`,
    `picture/17.png`,
    `picture/20.png`
]

 next.addEventListener(`click`,()=>{
    first = first + 1
    if(first>=5){
        first = 0
    }
    image.src = images[first]
 })
 prev.addEventListener(`click`,()=>{
   Math.abs(first = first - 1 )
    if(first<0){
        first = 4
    }
    image.src = images[first]
 })
 