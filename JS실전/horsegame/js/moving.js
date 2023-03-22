// 발생한 문제점 -- 자바스크립트와 css는 직접적으로 연결되지 않았다.
// 초기 설정을 따로 해야함 ------ css의 값을 바로 가져올 수 없다.
let img = document.getElementById("horse")
let now = 0
function moveLeft(){
    if (now > 1160){
        now = 1210
    }
    else{
        now += 50
    }
    img.style.right = String(now) + 'px'
}
function moveRight(){
    if (now < 50){
        now = 0
    }
    else{
        now -= 50;
    }
    img.style.right = String(now) + 'px'
    
}
let left = document.getElementsByClassName('btn')[0] 

left.addEventListener('click', moveLeft)

let right = document.getElementsByClassName('btn')[1] 
right.addEventListener('click', moveRight)
