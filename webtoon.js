
// class = 'webtoon-view'인 div 태그안 자식들을 만들어야함 
function makeimg() {
    const links = [
    "https://image-comic.pstatic.net/static/agerate/age_15_white.jpg",
    "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_1.jpg",
    "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_2.jpg",
    "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_3.jpg",
    "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_4.jpg",
    "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_5.jpg",
    "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_6.jpg",
    "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_7.jpg",
    "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_8.jpg",
    "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_9.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_10.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_11.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_12.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_13.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_14.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_15.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_16.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_17.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_18.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_19.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_20.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_21.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_22.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_23.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_24.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_25.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_26.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_27.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_28.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_29.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_30.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_31.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_32.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_33.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_34.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_35.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_36.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_37.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_38.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_39.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_40.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_41.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_42.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_43.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_44.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_45.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_46.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_47.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_48.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_49.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_50.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_51.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_52.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_53.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_54.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_55.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_56.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_57.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_58.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_59.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_60.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_61.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_62.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_63.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_64.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_65.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_66.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_67.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_68.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_69.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_70.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_71.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_72.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_73.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_74.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_75.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_76.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_77.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_78.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_79.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_80.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_81.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_82.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_83.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_84.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_85.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_86.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_87.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_88.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_89.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_90.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_91.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_92.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_93.jpg",
     "https://image-comic.pstatic.net/webtoon/733766/1/20191110233329_8c2cd76feedff6f6801d0e207e7ec0d9_IMAG01_94.jpg",
    ]
    const divtag = document.querySelector(".webtoon-view");
    for(i=0;i<links.length;i++){
        const img = document.createElement("img");
        img.src = links[i];
        divtag.appendChild(img);
    }
}
function loghtml() {
    const html = document.querySelector('html').innerHTML;
    console.log(html);
}

function alerthi(){
    alert('hi');
}
function remote_switch() {
    const remote = document.querySelector(".remote");
    if(this.className == "off-now"){
        this.className = 'on-now'
        this.innerHTML ='리모컨ON'
        remote.style.display = 'grid'
    }
    else{
        this.className = 'off-now'
        this.innerHTML = '리모컨OFF'
        remote.style.display = 'none'
    }

}
const remotebtn = document.querySelector("#remote");
remotebtn.addEventListener("click", remote_switch);
const remote = document.querySelector(".remote")
let curLocation = null
let leftPx = remote.style.left
let topPx = remote.style.top
remote.addEventListener("mousedown", (evt)=> {
    curLocation = {
        x : evt.pageX,
        y : evt.pageY
    }
    const rect = remote.getBoundingClientRect()
    leftPx = rect.left
    topPx = rect.top
})

remote.addEventListener("mousemove", (evt)=> {
    if(curLocation !== null) {
        const newLocation = {
            x : evt.pageX,
            y : evt.pageY
        }
        const deltaX = newLocation.x - curLocation.x
        const deltaY = newLocation.y - curLocation.y

        if(leftPx) {
            remote.style.left = `${leftPx + deltaX}px`
        }
        else{
            remote.style.left = `${deltaX}px`
        }
        if(topPx) {
            remote.style.top = `${topPx + deltaY}px`
        }
        else{
            remote.style.top = `${deltaY}px`
        }
    }
})
remote.addEventListener("mouseup", (evt)=> {
    curLocation = null
})


