// function detectChange(tf) {
//     if(tf) {
//         tf = false
//     }else{
//         tf = true
//     }
// }


const firstColor = document.querySelector("input.color1") // 첫번째 input tag
const firstPalette = document.querySelector("#first") // 첫번째 palette
let firstInput = false
firstColor.addEventListener("change", function(){
    let color1 = this.value
    firstPalette.style.backgroundColor = color1
    if(this.value != "") {
        console.log(this.value)
        firstInput = true
    }else{
        console.log("empty")
        firstInput = false
    }
    console.log(firstInput)
    max()

    //detectChange(firstInput)
    // if(firstInput) {
    //     firstInput = false
    //     console.log(firstInput)
    //     console.log("firstinput empty")
    // }else{
    //     firstInput = true
    //     console.log(firstInput)
    //     console.log("firstinput full")
    // }
    // detectChange(firstInput)//스코프 문제임? 왜안되지?
    //console.log(firstInput)
    // console.log(color1)
    // console.log(firstPalette.style.backgroundColor)
    // console.log('changed')
})

const secondColor = document.querySelector("input.color2") // 두번째 input tag
const secondPalette = document.querySelector("#second")
let secondInput = false
secondColor.addEventListener("change", function(){
    let color2 = this.value
    secondPalette.style.backgroundColor = color2
    if(this.value != "") {
        console.log(this.value)
        secondInput = true
    }else{
        console.log("empty")
        secondInput = false
    }
    console.log(secondInput)
    max()
    // secondInput = true//이건 입력했다가 지워도 true상태 유지되서 문제될수도?
})

const yourColor = document.querySelector("input.color3")
const thirdPalette = document.querySelector("#third")
let thirdInput = false
yourColor.addEventListener("change", function(){
    let color3 = this.value
    thirdPalette.style.backgroundColor = color3
    if(this.value != "") {
        console.log(this.value)
        thirdInput = true
    }else{
        console.log("empty")
        thirdInput = false
    }
    console.log(thirdInput)
    max()
})

document.addEventListener("keyup",function(evt){
    if(submit){
        if(evt.keyCode == 13){
            console.log("enterkey!!")
            colorHandler()
        }
    }else{
        console.log("fillInTheColorFirst")
    }
})

let submit = false

function max(){
    const submitButton = document.querySelector(".submit")
    if((firstInput)&&(secondInput)&&(thirdInput)){
        submit = true
        console.log("allfilled")
    }else{
        submit = false
        console.log("someempty")
    }
    if(submit){
        submitButton.style.display = "inline-block"
    }else{
        submitButton.style.display = "none"//event가 change 여서 focus 잃으면 실행되는게 살짝 아쉽
        console.log("submitfalse")
    }
}

function colorHandler() {//color1, color2 인자로 받아서 redamount greenamount 분류한다음 n등분해서 중간값포함 표시
    const sample = "rgb(255, 255, 255)"
    let color1 = firstPalette.style.backgroundColor //
    console.log(color1)
    let color2 = secondPalette.style.backgroundColor
    let color3 = thirdPalette.style.backgroundColor
    const start = sample.indexOf("(")
    const end = sample.indexOf(")")
    // let nums = temp.substring(start+1, end)
    // let rgbNums = nums.split(", ")
}

let redAmount = []
let greenAmount = []
let blueAmount = []
//언제나 대기하면서 0이되는지 감지할수없나? 한번호출되고 끝인가??
/*for(j=255;j>0;j--){
    redAmount.push(j)
    greenAmount.push(j)
}

for(i=0;i<256;i++){
    blueAmount.push(i)
}
console.log(redAmount)
console.log(greenAmount)
console.log(blueAmount)
const boxes = document.querySelectorAll(".box div")
console.log(boxes)

for(i=0; i<256; i++){
    boxes[i].style.backgroundColor = "rgb("+ redAmount[i] + ","+ greenAmount[i] + "," + blueAmount[i]+")"
    console.log(boxes[i].style.backgroundColor)
}*/