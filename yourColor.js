const firstColor = document.querySelector("input.color1") // 첫번째 input tag
const firstPalette = document.querySelector("#first") // 첫번째 palette
firstColor.addEventListener("change", function(){
    let color1 = this.value
    firstPalette.style.backgroundColor = color1
})
const secondColor = document.querySelector("input.color2") // 두번째 input tag
const secondPalette = document.querySelector("#second")
secondColor.addEventListener("change", function(){
    let color2 = this.value
    secondPalette.style.backgroundColor = color2
})
const yourColor = document.querySelector("input.color3")
const thirdPalette = document.querySelector("#third")
yourColor.addEventListener("change", function(){
    let color3 = this.value
    thirdPalette.style.backgroundColor = color3
})

let redAmount = []
let greenAmount = []
let blueAmount = []