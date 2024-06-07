//DOMContentLoaded 이벤트는 HTML요소를 모두 읽고나서 DOM 트리가 완성되었을때 이벤트발생
document.addEventListener("DOMContentLoaded", () => {
  //querySelectorAll HTML문서에서 CSS 선택자에 일치하는 모든 요소를 찾아 NodeList 객체로 반환한다.
  //NodeList 객체는 배열이 아니지만 최신브라우저는 forEach가 지원된다.
  const introDownElements = document.querySelectorAll(".intro__down");

  let totalDelay = 0;

  introDownElements.forEach((v) => {
    const text = v.textContent;
    console.log(text); // 다운폰트가 출력되지 않는다.(클래스에서 제거함)
    v.textContent = ""; // 기존 텍스트 제거

    //개별문자로 분리시킨다.
    text.split("").forEach((char) => {
      const span = document.createElement("span"); // span 태그 생성
      span.textContent = char; // 한글자 씩 span에 넣어줌
      span.style.opacity = 0; // 처음에는 보이지 않도록 설정
      //forwards는 애니메이션이 종료되어도 값을 유지시킴
      span.style.animation = `opacity 0.5s forwards`;
      //딜레이를 설정해준다.
      //0부터 시작한다.
      span.style.animationDelay = `${totalDelay * 0.1}s`;
      //첫글자는 0초만에 보이고 0.1,0.2,0.3,.....
      totalDelay++;
      //글자들을 HTML의 span에 넣어준다.

      v.appendChild(span);
    });
  });
});

const downImg = document.querySelector(".downImg");
setTimeout(() => {
  downImg.style.opacity = 1;

  const i = document.createElement("i");
  i.classList.add("fa-solid", "fa-angles-down");
  downImg.appendChild(i);
}, 2000);
