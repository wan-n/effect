class FolderScoll {
    constructor(wrapper, sticky){
        this.wrapper = wrapper;     //mainContentN
        this.sticky = sticky;       //sticky
        this.children = this.sticky.querySelectorAll('.section');  //sticky 내부 요소 section들을 가져온다
        this.length = this.children.length;     //section의 개수
        this.headerVh = 6;      //title과 content의 높이 미리 지정
        this.contentVh = 100 - this.headerVh * this.length - 4;     //title의 개수만큼 빼준다. 4는 최상단 헤더 사이즈
        this.start = 0;     //첫 애니메이션이 시작하는 시점
        this.end = 0;       //마지막 애니메이션이 끝나는 시점
    }

    init(){
        //offsetTop : 문서 기준 요소의 Y축 위치 값
        this.start = this.wrapper.offsetTop;    
        //offsetHeight : 요소의 높이. 패딩, 스크롤 바, border 포함. 마진은 제외.
        //innerHeight : 브라우저 화면의 크기
        this.end = this.wrapper.offsetTop + this.wrapper.offsetHeight - innerHeight;

        //forEach : 배열 순회 반복문
        //child - this.children의 요소를 순서대로 순회, i - 인덱스
        this.children.forEach((child, i) => {
            child.style.bottom = -100 + this.headerVh * (this.length - i) + 'vh';
            child.querySelector('.title').style.height = this.headerVh + 'vh';
            child.querySelector('.content').style.height = this.contentVh + 'vh';
        });
        
    }

    animate(){
        this.children.forEach((child, i) => {
            const unit = (this.end - this.start) / this.length;
            const s = this.start + unit * i;
            const e = this.start + unit * (i + 1);

            if(scrollY <= s) {
                child.style.transform = `translate3d(0, 0, 0)`;
            }else if (scrollY >= e){
                child.style.transform = `translate3d(0, ${-this.contentVh}%, 0)`;
            }else{
                child.style.transform = `translate3d(0, ${
                    (scrollY - s) / unit * (-this.contentVh)
                }%, 0)`
            }
        });
    }
}

const mainContent1 = document.querySelector('.main-content-1');
const sticky = document.querySelector('.sticky');
const folderScroll = new FolderScoll(mainContent1, sticky);   //인스턴스 생성
folderScroll.init();

window.addEventListener('scroll', () => {
    folderScroll.animate();
})


//offsetTop, offsetHeight, innerHeight 값 변동
window.addEventListener('resize', () => {
    folderScroll.init();
})