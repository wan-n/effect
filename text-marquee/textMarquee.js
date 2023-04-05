const pTag1 = document.querySelector('.first-parallel');
const pTag2 = document.querySelector('.second-parallel');


//미리 작성한 텍스트를 가져와 공백(' ')을 split 처리하면
//배열에 띄어쓰기 기준으로 단어가 담긴다.
const textArr1 = 'Yummy Tasty Delicious Useful Codng Yummy yummmmyyummmmmmmmmy yum'.split(' ');
const textArr2 = 'Chicken Hamburger Pizza Salad Sushi Bibmbab Gimbab JJajangmyeon'.split(' ');


function initTexts(element, textArray){
    //위에 선언된 배열을 가져와 똑같은 내용을 뒤에 push해준다.
    textArray.push(...textArray);

    //각각의 단어를 for문으로 돌기
    for(let i = 0; i < textArray.length; i++){
        //단어 뒤에 띄어쓰기 네번 처리 후 각각의 요소(p태그) 안에 넣어준다.
        element.innerText += `${textArray[i]}\u00a0\u00a0\u00a0\u00a0`;
    }
}

initTexts(pTag1, textArr1);
initTexts(pTag2, textArr2);


let count1 = 0;
let count2 = 0;

function marqueeText(count, element, direction){
    //count가 element의 절반값 이상이라면
    if(count > element.scrollWidth / 2){
        //count를 0으로 만들고 element도 원위치 시킨다.
        element.style.transform = 'translateX(0)'
        count = 0;
    }

    //countdp direction을 곱한만큼 이동
    element.style.transform = `translateX(${count * direction}px)`
    //다음 animate 함수에 반영되도록 리턴
    return count;
}

function animate(){
    count1++;
    count2++;

    count1 = marqueeText(count1, pTag1, -1);
    count2 = marqueeText(count2, pTag2, 1);

    //재귀함수
    window.requestAnimationFrame(animate);
}

animate();

//스크롤 시 텍스트를 더 빠르게 흐르도록 한다.
window.addEventListener('scroll', () => {
    count1 += 5;
    count2 += 5;
})

