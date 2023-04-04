const body = document.querySelector("body");
const MIN_DURATION = 10;   //애니메이션 최소 지속 시간

function makeSnowflake() {
    const delay = Math.random() * 10;  //요소를 지연시키기 위한 값
    const initialOpacity = Math.random();  //불투명도 랜덤화를 위한 값
    const duration = Math.random() * 20 + MIN_DURATION;   //애니메이션 최소 지속시간(MIN_DURATION)에 임의의 값(0~20)을 더한다

    const snowflake = document.createElement("div");  //요소 생성
    snowflake.classList.add("snowflake");   //클래스 부여
    snowflake.style.left = `${Math.random() * window.screen.width}px`   //0 ~ <화면 가로 길이> 사이의 랜덤값을 left값에 대입
    snowflake.style.animationDelay = `${delay}s`;  //요소 지연
    snowflake.style.opacity = initialOpacity;   //불투명도 랜덤
    snowflake.style.animation = `fall ${duration}s linear`;   //애니메이션 적용(+지속시간 랜덤)

    body.appendChild(snowflake); 

    // 애니메이션 종료 후 페이지에서 눈송이 제거
    setTimeout(() => {
        body.removeChild(snowflake);
    }, (duration + delay) * 1000);
}

function showSnowflake(){
    for(let index = 0; index < 50; index++){
        setTimeout(makeSnowflake, 500 * index); //눈송이를 동시에 만들지 않고 지연 후 생성
    }
}

showSnowflake();

//애니메이션 반복
setInterval(() => {
    showSnowflake();
}, 500 * 50);




