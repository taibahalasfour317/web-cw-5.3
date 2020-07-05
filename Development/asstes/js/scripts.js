let counter = document.querySelector(".counter");
const decreaseCount = document.querySelector("#countButton");
const resetCount = document.querySelector("#resetButton");

// أكمل
const athkar = [
  { thekr: "سبحان الله وبحمده" },
  { thekr: "الله لا إله إلا هو" },
  { thekr: "لا إله إلا الله " },
];

function changeDisplayedThekr() {
  let number =Math.floor(Math.random() * athkar.length);
  theker.innerHTML = athkar[number].theker;
  console.log(number);
}
const randomThekr = document.querySelector("#thekr");
randomThekr.addEventListener("click", changeDisplayedThekr);

// count عرف متغير
let count =10;
function decrementCounter() {
  if( count > 0) 
  count--;
}
decreaseCount.addEventListener("click", decrementCounter);
  counter.innerHTML = count;
  counter.animate([{opacity:"0.3"},{opacity:"1.0"}],{
    duration:500 , 
    fill:"forwards",
  });

  
  // tranperant incrising the opecity 
  // دأضف خواص للقيمة داخل زر العداد حتى لا تظهر فجأة ولكن بالتدريج


// Hide
function resetCounter() {
  count = 10;
  counter.innerHTML=count;
}
resetCount.addEventListener("click", resetCounter); 

// Hide




let myimage = { 
  1: {
     imageUrl:"C:\Users\moonl\Documents\web-cw-5.3\Development\asstes\download (2).jpg",
   
  }, 
  2: {
      imageUrl: "C:\Users\moonl\Documents\web-cw-5.3\Development\asstes\download (1).jpg",
 
  }, 
  3: {
      imageUrl: "C:\Users\moonl\Documents\web-cw-5.3\Development\asstes\download.jpg",

  }
};

function changeImage(){
  let randomNumber = Math.floor((Math.random() * 3) + 1); 
  document.getElementById("background").style.background = "url('"+myimage[randomNumber].imageUrl+"')";

document.getElementById("backbtn").addEventListener("click",changeImage); }