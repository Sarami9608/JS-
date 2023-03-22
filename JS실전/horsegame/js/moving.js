// 발생한 문제점 -- 자바스크립트와 css는 직접적으로 연결되지 않았다.
// 초기 설정을 따로 해야함 ------ css의 값을 바로 가져올 수 없다.
let img = document.getElementById("horse")
let now = 0
let height = 200
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
const jump = ()=>{
    console.log('jump function')
    // animation 기능
    img.animate([
        {bottom: '200px'},
        {bottom: '400px'},
        {bottom: '200px'}
    ],{duration : 700})
}
let left = document.getElementsByClassName('btn')[0] 

left.addEventListener('click', moveLeft)

let right = document.getElementsByClassName('btn')[1] 
right.addEventListener('click', moveRight)


// 키보드로 조작
//  e ==> 이벤트 객체
document.getElementsByTagName('body')[0].addEventListener('keydown',(e)=>{
    console.log('keydown Event',e)
    if(e.key ==='ArrowLeft'){
        moveLeft()
    }
    else if(e.key ==='ArrowRight' ){moveRight()}
    else if(e.key ==='ArrowUp'|| e.key === ' '){
        jump()

    }
    else if(e.key ==='ArrowDown'){}
})