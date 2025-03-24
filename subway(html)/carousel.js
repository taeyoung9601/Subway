console.groupCollapsed("carousel.js invoked"); console.groupEnd();

// 쿼리셀렉터로 지정
const container = document.querySelector(".container");
const subway = document.querySelector(".container_subway");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next"); 

(function addEvent(){
  prevBtn.addEventListener('click', function() {
    // 이전버튼 누르면 방향에 1(왼쪽) 반환
    translateContainer.bind(this, 1)();
    console.log("prevBtn invoked");
});
  nextBtn.addEventListener('click', function() {
    // 이전버튼 누르면 방향에 -1(오른쪽) 반환
    translateContainer.bind(this, -1)();
    console.log("nextBtn invoked");
});
// 최초 실행시 무조건 실행
})();

// 버튼 클릭 시 이동하는 버튼
function translateContainer(direction){

  prevBtn.disabled = true;
  nextBtn.disabled = true;
  // 삼항연산자. 방향이 1(왼쪽) 이면 prev(이전) 반환, 아닐경우(-1일 경우) next(다음) 반환
  const selectedBtn = (direction === 1) ? 'prev' : 'next';
  // 움직이는 속도
  container.style.transitionDuration = '500ms';
  subway.style.transitionDuration = '500ms';
  // x축으로 방향 * 100vw만큼 이동
  container.style.transform = `translateX(${direction * 100}vw)`;
  subway.style.transform = `translateX(${direction * 20.1}vw)`;

  // transition이 끝나면 실행하는 함수. reorganizeEl()는 아래에 있다.
  // 이대로 두면 이벤트 중첩
  // container.ontransitionend = () => reorganizeEl(selectedBtn);

  function handleTransitionEnd() {
    // 아래의 reorganizeEl를 실행한다
    reorganizeEl(selectedBtn);
    // 누적된 이벤트 리스너를 제거한다
    container.removeEventListener('transitionend', handleTransitionEnd);

    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
  // 리스너 초기화
  container.addEventListener('transitionend', handleTransitionEnd);
}

// 이동시킨 화면을 초기화 하고, 요소의 순번을 바꾼다
function reorganizeEl(selectedBtn) {
  // 위의 transform를 초기화 시킨다. 위치 초기화
  container.removeAttribute('style');
  subway.removeAttribute('style');
  console.info("remove style");

  // 삼항연산자. 
  // 방향이 prev(이전)이면 
  // insertBefore :이 코드는 container의 마지막 요소를 첫 번째 요소 앞에 삽입합니다. 
  // 즉, 슬라이드 쇼에서 이전 버튼이 클릭되었을 때 마지막 요소를 맨 앞으로 가져오는 동작을 합니다.

  // 방향이 next(다음)이면 
  // appendChild : 이 코드는 container의 첫 번째 요소를 마지막으로 이동시킵니다. 
  // 즉, 다음 버튼이 클릭되었을 때 첫 번째 요소를 맨 뒤로 보내는 동작을 합니다.
  (selectedBtn === 'prev') ? container.insertBefore(container.lastElementChild, container.firstElementChild): container.appendChild(container.firstElementChild);
  (selectedBtn === 'prev') ? subway.insertBefore(subway.lastElementChild, subway.firstElementChild): subway.appendChild(subway.firstElementChild);
}

// appendChile : 첫번째 요소를 마지막으로 이동
//    1 2 3 4 5
// -> 2 3 4 5 1

// insertChild : 마지막 요소를 첫번째로 이동
//    1 2 3 4 5
// -> 5 1 2 3 4