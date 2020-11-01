/*const imgs = ["https://image-comic.pstatic.net/static/agerate/age_15_white.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_1.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_2.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_3.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_4.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_5.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_6.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_7.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_8.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_9.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_10.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_11.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_12.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_13.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_14.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_15.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_16.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_17.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_18.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_19.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_20.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_21.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_22.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_23.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_24.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_25.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_26.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_27.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_28.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_29.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_30.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_31.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_32.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_33.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_34.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_35.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_36.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_37.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_38.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_39.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_40.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_41.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_42.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_43.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_44.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_45.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_46.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_47.jpg",
 "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_48.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_49.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_50.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_51.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_52.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_53.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_54.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_55.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_56.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_57.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_58.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_59.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_60.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_61.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_62.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_63.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_64.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_65.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_66.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_67.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_68.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_69.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_70.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_71.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_72.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_73.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_74.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_75.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_76.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_77.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_78.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_79.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_80.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_81.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_82.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_83.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_84.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_85.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_86.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_87.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_88.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_89.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_90.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_91.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_92.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_93.jpg", "https://image-comic.pstatic.net/webtoon/733766/1/2…29_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_94.jpg"]

function makeimg() {
    const img = document.createElement('img');
    img.src = 'https://image-comic.pstatic.net/static/agerate/age_15_white.jpg';
    document.body.appendChild(img);//body에 element 추가
}

function makebutton() {
    const btn = document.createElement("BUTTON");
    btn.innerHTML = 'click me';
    const btntag = document.querySelector(".makebutton");
    btntag.appendChild(btn);//특정태그에다가 새로운element 추가

}

function gethtml() {
    const divtag = document.querySelector(".page-source");
    const source = document.documentElement.innerHTML;
    divtag.innerHTML = ""+source;//innerHTML 에다가 현재 html추가
}

function getwholehtml() {
    const html = document.querySelector('html').innerHTML;
    console.log(html);//consolelog에 현재 html 추가
}
*/
const dragelement = document.querySelector(".drag")
let curLocation = null
let leftPx = dragelement.style.left
let topPx = dragelement.style.top
dragelement.addEventListener("mousedown", (evt)=> {
    curLocation = {
        x : evt.pageX,
        y : evt.pageY
    }
    const rect = dragelement.getBoundingClientRect()
    leftPx = rect.left
    topPx = rect.top
})

document.addEventListener("mousemove", (evt)=> {
    if(curLocation !== null) {
        const newLocation = {
            x : evt.pageX,
            y : evt.pageY
        }
        const deltaX = newLocation.x - curLocation.x
        const deltaY = newLocation.y - curLocation.y

        if(leftPx) {
            dragelement.style.left = `${leftPx + deltaX}px`
        }
        if(topPx) {
            dragelement.style.top = `${topPx + deltaY}px`
        }
        console.log(dragelement.style.left)
        console.log(dragelement.style.right)
        console.log(dragelement.style.top)
        console.log(dragelement.style.bottom)
    }    
})

document.addEventListener("mouseup", (evt)=> {
    curLocation = null
})
const height = window.innerHeight
const width = window.innerWidth
document.querySelector(".width").innerHTML = "가로" + width
document.querySelector(".height").innerHTML = "세로" + height
console.log(width)
console.log(height)
const halfheight = height/2
const halfwidth = width/2
console.log(halfheight)
console.log(halfwidth)
dragelement.style.top = (halfheight-150)+"px"
dragelement.style.right = "100px"
/*if(height<1000&&height>500) {
    document.querySelector(".result").innerHTML = "500<높이<1000입니다"

}else if(height<500) {
    document.querySelector(".result").innerHTML = "높이<500입니다"
}
//if(width)
1.fool screen w:3440 h:1361 가로 세로
2.w:2300 h:900보다 작아지면 
3.750* 750 보다 작아지면 없애기
1.height 만 down 
2.width 만 down
3.width height 둘다 down 
height 가보장되면 오른쪽 가운데 height가 작아지면 오른쪽 아래로 박힘 
1.innerHeight만따지면 700px아래서부턴 오른쪽 구석 height 만 300px까지 간다면 오른쪽 구석
2.innerwidth만따지면 1000px이상에서는 오른쪽 가장자리 975px 부터 사라짐 
*/
const red = document.querySelector(".red")
console.log(red.style.left)
console.log(red.style.right)