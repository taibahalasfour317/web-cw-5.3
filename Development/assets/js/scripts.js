let counter = document.querySelector(".counter");
const decreaseCount = document.querySelector("#countButton");
const resetCount = document.querySelector("#resetButton");

// Hide
const athkar = [
  { thekr: "سبحان الله وبحمده" },
  { thekr: "الله لا إله إلا هو" },
  { thekr: "رضينا بالله رباً وبالإسلام ديناً وبمحمد نبياً رسولاً" },
];

const randomThekr = document.querySelector("#thekr");
randomThekr.addEventListener("click", changeDisplayedThekr);

let count = 10;

decreaseCount.addEventListener("click", decrementCounter);
resetCount.addEventListener("click", resetCounter);

function decrementCounter() {
  if (count > "0") {
    count--;
  }
  counter.innerHTML = count;
  // Hide
  counter.animate([{ opacity: "0.2" }, { opacity: "1.0" }], {
    duration: 500,
    fill: "forwards",
  });
}

// Hide
function resetCounter() {
  count = 10;
  counter.innerHTML = count;
}

// Hide
function changeDisplayedThekr() {
  let number = Math.floor(Math.random() * athkar.length);
  thekr.innerHTML = athkar[number].thekr;
  console.log(number);
}
