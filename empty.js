const color1 = document.querySelector(".color1")
const color2 = document.querySelector(".color2")
color1.addEventListener("change", function(){
    console.log(this.value)
})
const number = document.querySelector(".number")
number.addEventListener("change", function(){
    console.log(this.value)
})