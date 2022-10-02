const img = document.querySelector(".picture");
const leftImg = document.querySelector("#left-img");
const rightImg = document.querySelector("#right-img");
const leftDiv = document.querySelector(".left");
const rightDiv = document.querySelector(".right");


//storing the image src values in three arrays for easy cycling
const imgArr = [
  "./assets/saturn.jpg",
  "./assets/black-hole.jpg",
  "./assets/carina.jpg",
  "./assets/jupiter.jpg",
  "./assets/milky-way.jpg",
];
const imgArrR = [
  "./assets/black-hole.jpg",
  "./assets/carina.jpg",
  "./assets/jupiter.jpg",
  "./assets/milky-way.jpg",
  "./assets/saturn.jpg",
];
const imgArrL = [
  "./assets/milky-way.jpg",
  "./assets/saturn.jpg",
  "./assets/black-hole.jpg",
  "./assets/carina.jpg",
  "./assets/jupiter.jpg",
];

//event listeners

rightDiv.addEventListener("click", () => {
  const imgL = img.getAttribute("src");

  let i = imgArr.indexOf(imgL);
  if (i == 4) {
    i = -1;
  }
  console.log(i);
  img.setAttribute("src", imgArr[i + 1]);
  rightImg.setAttribute("src", imgArrR[i + 1]);
  leftImg.setAttribute("src", imgArrL[i + 1]);
  $(document).ready(function(){
    $('#ex1').zoom();
    
});
  //container.style.backgroundImage = url(imgArr[i + 1]);
});
leftDiv.addEventListener("click", () => {
  const imgL = img.getAttribute("src");
  let i = imgArr.indexOf(imgL);
  if (i == 0) {
    i = 4;
  }
  img.setAttribute("src", imgArr[i - 1]);
  rightImg.setAttribute("src", imgArrR[i - 1]);
  leftImg.setAttribute("src", imgArrL[i - 1]);
  $(document).ready(function(){
    $('#ex1').zoom();
    
});
  //container.style.backgroundImage = url(imgArr[i + 1]);
});

rightImg /
  addEventListener("keydown", (e) => {
    if (e.keyCode == 39) {
      const imgL = img.getAttribute("src");

      let i = imgArr.indexOf(imgL);
      if (i == 4) {
        i = -1;
      }
      console.log(i);
      img.setAttribute("src", imgArr[i + 1]);
      rightImg.setAttribute("src", imgArrR[i + 1]);
      leftImg.setAttribute("src", imgArrL[i + 1]);
      $(document).ready(function(){
        $('#ex1').zoom();
        
    });
    } else if (e.keyCode == 37) {
      const imgL = img.getAttribute("src");
      let i = imgArr.indexOf(imgL);
      if (i == 0) {
        i = 4;
      }
      img.setAttribute("src", imgArr[i - 1]);
      rightImg.setAttribute("src", imgArrR[i - 1]);
      leftImg.setAttribute("src", imgArrL[i - 1]);
      $(document).ready(function(){
        $('#ex1').zoom();
        
    });
    }
  });
 
