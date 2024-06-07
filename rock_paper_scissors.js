const selectionArray = [
  "가위.png", // 1
  "바위.png", //2
  "보.png", //0
];

let ArrayIndex = 0;
let selection__img = document.querySelector(".selection__img");

function changeImg() {
  selection__img.src = selectionArray[ArrayIndex];
  ArrayIndex++;

  if (ArrayIndex == 3) {
    ArrayIndex = 0;
  }
}

changeImg();
let intervalId = setInterval(changeImg, 0.05); // 0.5초마다 changeImg 함수 실행

const close_btn = document.querySelector(".close_btn");
close_btn.addEventListener("click", closeBtn_fn);

const close_btn__end = document.querySelector(".close_btn__end");
close_btn__end.addEventListener("click", closeBtn__end_fn);

/////////////////////선택////////////////////////////////

const paper = document.querySelector(".paper");
const container = document.querySelector(".container");

let result1 = document.querySelector(".result1");
let result2 = document.querySelector(".result2");
let result3 = document.querySelector(".result3");
let result4 = document.querySelector(".result4");
let heart__count = document.querySelector(".heart__count");
let pcScore__pc = document.querySelector(".pcScore__pc");
let userScore__user = document.querySelector(".userScore__user");

const modal = document.querySelector(".modal");
const modal_end = document.querySelector(".modal_end");

const scissors = document.querySelector(".scissors");

let user = 0;
let pc = 0;
let hCount = 3;
let tie = 0;

let countdownInterval; // 전역 변수로 선언하여 타이머 중복 실행 방지
let countdownInterval_end;
scissors.addEventListener("click", () => {
  clearInterval(intervalId); // intervalId 변수의 타이머를 중지시킴

  console.log(ArrayIndex);

  if (ArrayIndex == 1) {
    console.log("비김");
    result1.textContent = "비김!";
    result2.textContent = "PC : ✌️";
    result3.textContent = "Player :✌️ ";

    tie += 1;
    result();
  } else if (ArrayIndex == 0) {
    console.log("이김");
    result1.textContent = "이김!";
    result2.textContent = "PC : ✋";
    result3.textContent = "Player :✌️ ";
    result4.textContent = "3초 뒤 자동으로 닫힙니다.";
    result();
  } else {
    console.log("짐");
    result1.textContent = "짐!";
    result2.textContent = "PC : ✊";
    result3.textContent = "Player :✌️ ";
    result4.textContent = "3초 뒤 자동으로 닫힙니다.";
    result();
  }

  modal.classList.remove("hidden");

  if (countdownInterval) {
    clearInterval(countdownInterval); // 이전 타이머가 있을 경우 중지
  }

  let countdown = 3;
  countdownInterval = setInterval(() => {
    countdown--;
    result4.textContent = `${countdown}초 뒤 자동으로 닫힙니다.`;
    console.log(countdown);
    if (countdown == 0) {
      clearInterval(countdownInterval); // 타이머 중지
      closeBtn_fn(); // 모달 닫기 함수 호출
    }
  }, 1000); // 1초마다 실행
});

const rock = document.querySelector(".rock");
rock.addEventListener("click", () => {
  clearInterval(intervalId); // intervalId 변수의 타이머를 중지시킴

  if (ArrayIndex == 2) {
    console.log("비김");
    result1.textContent = "비김!";
    result2.textContent = "PC : ✊";
    result3.textContent = "Player :✊";
    result4.textContent = "3초 뒤 자동으로 닫힙니다.";
    tie += 1;
    result();
  } else if (ArrayIndex == 1) {
    console.log("이김");
    result1.textContent = "이김!";
    result2.textContent = "PC : ✌️";
    result3.textContent = "Player :✊";
    result4.textContent = "3초 뒤 자동으로 닫힙니다.";
    result();
  } else {
    console.log("짐");
    result1.textContent = "짐!";
    result2.textContent = "PC : ✋";
    result3.textContent = "Player :✊";
    result4.textContent = "3초 뒤 자동으로 닫힙니다.";
    result();
  }

  modal.classList.remove("hidden");

  if (countdownInterval) {
    clearInterval(countdownInterval); // 이전 타이머가 있을 경우 중지
  }

  let countdown = 3;
  countdownInterval = setInterval(() => {
    countdown--;
    result4.textContent = `${countdown}초 뒤 자동으로 닫힙니다.`;
    console.log(countdown);
    if (countdown == 0) {
      clearInterval(countdownInterval); // 타이머 중지
      closeBtn_fn(); // 모달 닫기 함수 호출
    }
  }, 1000); // 1초마다 실행
});

paper.addEventListener("click", () => {
  clearInterval(intervalId); // intervalId 변수의 타이머를 중지시킴

  if (ArrayIndex == 0) {
    console.log("비김");
    tie += 1;
    result1.textContent = "비김!";
    result2.textContent = "PC : ✋";
    result3.textContent = "Player :✋";
    result4.textContent = "3초 뒤 자동으로 닫힙니다.";
    result();
  } else if (ArrayIndex == 2) {
    console.log("이김");
    result1.textContent = "이김!";
    result2.textContent = "PC : ✊";
    result3.textContent = "Player :✋";
    result4.textContent = "3초 뒤 자동으로 닫힙니다.";
    result();
  } else {
    console.log("짐");
    result1.textContent = "짐!";
    result2.textContent = "PC : ✌️";
    result3.textContent = "Player :✋";
    result4.textContent = "3초 뒤 자동으로 닫힙니다.";
    result();
  }

  modal.classList.remove("hidden");

  if (countdownInterval) {
    clearInterval(countdownInterval); // 이전 타이머가 있을 경우 중지
  }

  let countdown = 3;
  countdownInterval = setInterval(() => {
    countdown--;
    result4.textContent = `${countdown}초 뒤 자동으로 닫힙니다.`;
    console.log(countdown);
    if (countdown == 0) {
      clearInterval(countdownInterval); // 타이머 중지
      closeBtn_fn(); // 모달 닫기 함수 호출
    }
  }, 1000); // 1초마다 실행
});

function closeBtn_fn() {
  modal.classList.add("hidden");
  clearInterval(intervalId); // 기존 interval 중지
  intervalId = setInterval(changeImg, 0.05); // 새로운 interval 설정
}

function closeBtn__end_fn() {
  modal_end.classList.add("hidden");
  clearInterval(intervalId); // 기존 interval 중지
  intervalId = setInterval(changeImg, 0.05); // 새로운 interval 설정
}

function result() {
  if (result1.textContent === "비김!") {
    user += 0;
    pc += 0;
    hCount += 0;
    console.log("비김");
  } else if (result1.textContent === "이김!") {
    user += 10;
    pc += 0;
    hCount += 1;
    console.log("이김");
  } else if (result1.textContent === "짐!") {
    user += 0;
    pc += 10;
    hCount -= 1;
    console.log("짐");
  }
  if (hCount == 0) {
    end();
  }

  heart__count.textContent = hCount;
  pcScore__pc.textContent = `PC : ${pc}`;
  userScore__user.textContent = `Player : ${user}`;
  console.log("Heart Count:", heart__count.textContent);
  console.log("PC Score:", pc);
  console.log("User Score:", user);
}

let end2 = document.querySelector(".end2");
let end3 = document.querySelector(".end3");
let end4 = document.querySelector(".end4");
let end5 = document.querySelector(".end5");

function end() {
  end2.textContent = `점수 : ${user}`;
  end3.innerHTML = `<span style="color: blue;">${user / 10}번</span>의 승리`;
  end4.innerHTML = `<span style="color: red;">${pc / 10}번</span>의 패배`;

  end5.innerHTML = `<span style="color : green;"> ${tie}번</span>의 무승부`;

  let countdown_end = 10;
  countdownInterval_end = setInterval(() => {
    countdown_end--;
    end6.textContent = `${countdown_end}초 뒤 자동으로 닫힙니다.`;
    console.log(countdown_end);
    if (countdown_end == 0) {
      clearInterval(countdownInterval_end); // 타이머 중지
      closeBtn__end_fn(); // 모달 닫기 함수 호출
    }
  }, 1000); // 1초마다 실행

  modal.classList.add("hidden");
  modal_end.classList.remove("hidden");

  user = 0;
  pc = 0;
  hCount = 3;
  tie = 0;

  heart__count.textContent = hCount;
  pcScore__pc.textContent = `PC : ${pc}`;
  userScore__user.textContent = `Player : ${user}`;
  clearInterval(intervalId);
}

const stop = document.querySelector(".stop");
const end6 = document.querySelector(".end6");

stop.addEventListener("click", () => {
  clearInterval(intervalId); // 멈추게 하고
  end();
});
