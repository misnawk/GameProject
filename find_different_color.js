const closeBtn = document.querySelector(".closeBtn");
let modal = document.querySelector(".modal");
const countSpan = document.querySelector(".countSpan");

let palette = document.querySelector(".palette");
let palette__item = document.querySelector(".palette__item");
let stageTitle = document.querySelector(".stageTitle");
let home__img = document.querySelector(".home__img");

const stages = {
  1: { colorGroup: "gray" },
  2: { colorGroup: "purple" },
  3: { colorGroup: "green" },
  4: { colorGroup: "blue" },
};

const colorGroups = {
  gray: ["#B4B193"],
  purple: ["#963296"],
  green: ["#329632"],
  blue: ["#323296"],
};

///////////////////////닫기버튼//////////////////////////////////////

// closeBtn.addEventListener("click", closeBtn_Fn);

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
  gridSize = 2; //초기 그리드 크기
  stage = 1; // 초기 스테이지
  score = 0; // 초기 점수
  countdown = 15;
  startTimer();
  updateGrid();
});

//////////////////// 카운트다운 및 모달닫기/////////////////////////////////////
let countdown = 15;
const startTimer = () => {
  const timer = setInterval(() => {
    countdown -= 1; // 타이머 감소
    countSpan.textContent = `${countdown}`; // 화면에 타이머 업데이트
    if (countdown <= 0) {
      clearInterval(timer); // 타이머 중지
      alert("Game Over!"); // 게임 오버 알림
      modalUpdate();
      modal.classList.remove("hidden"); // 타이머가 0이 되면 모달 표시
      countdown = 0;
    }
  }, 1000); // 1초마다 실행
};

/////////////////// 현재 스테이지의 색상 그룹을 가져오는 함수/////////////////////////////
const getColorGroup = () => {
  // 현재 스테이지의 색상 그룹을 반환
  // 스테이지가 1 -> 1스테이지
  // 스테이지가 2,3 -> 2스테이지
  // 스테이지가 4,5 -> 3스테이지
  // 스테이지가 6,7 -> 4스테이지

  // 스테이지가 8,9 -> 다시 1스테이지
  //.,. 반복
  const stageIndex = (Math.floor((stage - 1) / 2) % 4) + 1;
  return colorGroups[stages[stageIndex].colorGroup];
};

//////////////////비슷한 스테이지의 색상 그룹을 가져오는 함수/////////////////////////////

const generateSimilarColor = (baseHex) => {
  // baseHex에서 마지막 두 자리의 16진수 값을 숫자로 변환
  const baseValue = parseInt(baseHex.slice(-2), 16);

  // 변형 값 생성 (0에서 ±16 범위 내에서 변경)
  const randomNum = Math.floor(Math.random() * 33) - 16; // -16에서 +16 사이의 숫자

  //더한 숫자가 255가 넘어가면 안됨 (min설정) 더한 숫자가 마이너스가 되면안됌 (max)설정

  const newValue = Math.max(0, Math.min(255, baseValue + randomNum))
    .toString(16)
    .toUpperCase();

  // 두 자리로 맞춤
  // 5->05
  const newHex = newValue.length === 1 ? "0" + newValue : newValue;

  // 기존 헥사코드의 앞부분에 새로운 값을 결합하여 반환
  return baseHex.slice(0, -2) + newHex;
};

/////////////////////RGB를 헥사로 변환함수/////////////////////////////

function rgbToHex(rgbString) {
  // 문자열에서 숫자 추출 (정규 표현식 사용)
  const result = rgbString.match(/\d+/g);
  if (result.length !== 3) {
    throw new Error("Invalid RGB format. Expected format: rgb(r, g, b)");
  }

  const r = parseInt(result[0]);
  const g = parseInt(result[1]);
  const b = parseInt(result[2]);

  const toHex = (num) => {
    const hex = num.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  return "#" + toHex(r) + toHex(g) + toHex(b);
}

///////////////// 그리드 업데이트////////////////////////////

let gridSize = 2; //초기 그리드 크기
let stage = 1; // 초기 스테이지
let score = 0; // 초기 점수

const updateGrid = () => {
  countdown = 15;
  palette.innerHTML = ""; // 그리드 초기화
  palette.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`; // 열 개수 설정
  palette.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`; // 행 개수 설정
  palette.style.gap = "5px"; // 그리드 셀 간의 간격 설정

  const color = getColorGroup();
  let baseColor = color[0]; //[0]을 해줘야 배열에서 벗어난다.
  const similarColor = generateSimilarColor(baseColor); //다른색 값을 가진 객체 생성
  const totalCells = gridSize * gridSize; //버튼의 총 개수를 구한다.

  const correctColorIndex = Math.floor(Math.random() * totalCells); //0 ~ 총 버튼수

  for (let i = 0; i < totalCells; i++) {
    let item = document.createElement("button");
    item.className = "palette__item";
    item.style.backgroundColor =
      i === correctColorIndex ? similarColor : baseColor; // i와 correctColorIndex가 같으면 similarColor 적용

    palette.appendChild(item);

    item.addEventListener("click", () => {
      let itemBackground = rgbToHex(item.style.backgroundColor).toUpperCase();

      console.log(itemBackground);
      console.log(similarColor);

      if (itemBackground == similarColor) {
        console.log("맞춤");
        score++;
        console.log(score);
        stage++;
        console.log(stage);
        if (stage % 2 == 0) {
          gridSize++; //그리드의 사이즈를 증가시킨다.
        }
        stageTitle.textContent = `STAGE ${stage}`;
        updateGrid();
      } else {
        countdown -= 3;
      }
    });
  }
};
startTimer();
updateGrid();

///////////////////////////모달 업데이트 함수/////////////////////////////

let endGame = document.querySelector(".endGame");
const stageNumber = document.querySelector(".stageNumber");
let tryText = document.querySelector(".try");

function modalUpdate() {
  countSpan.textContent = 0;
  endGame.textContent = `게임 종료!`;
  stageNumber.textContent = `기록 : STAGE ${stage}`;
  tryText.textContent = `다시한번 해볼까요?`;
}

//1. 버튼 2*2시작
//2. 다른색 하나 맞추면 점수 +1
//3. 그리드에서 다른색깔 하나를 만들어내는 로직
//- 색하나를 오브젝트로 저장을 해놓고
//- 비슷한색을 만들어주는 함수로 색만들고 나머지버튼을 저장해둔 색으로 변경
//4. 다른색깔을 맟추면 점수 증가와 스테이지 상승 로직
//3. 점수가 2->4->6->8-> 즉 2의 배수가 되면 그리드 열과행 +1
