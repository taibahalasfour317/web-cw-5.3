let counter = document.querySelector(".counter");
const decreaseCount = document.querySelector("#countButton");
const resetCount = document.querySelector("#resetButton");

// أكمل
// const athkar =

const randomThekr = document.querySelector("#thekr");
randomThekr.addEventListener("click", changeDisplayedThekr);

// count عرف متغير

decreaseCount.addEventListener("click", decrementCounter);
resetCount.addEventListener("click", resetCounter);

function decrementCounter() {
  // أكمل
  counter.innerHTML = count;
  // أضف خواص للقيمة داخل زر العداد حتى لا تظهر فجأة ولكن بالتدريج
}

// Hide
function resetCounter() {
  // أكمل
}

// Hide
function changeDisplayedThekr() {
  // أكمل
}
