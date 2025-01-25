// // window.onload = function () {
// //     document.getElementById("video1").addEventListener("ended", function () {
// //     document.getElementById("video2").play();
// //     document.getElementById("video2").classList.remove("hide");
// //     document.getElementById("video1").classList.add("hide")
  
// //   });
// //     document.getElementById("video2").addEventListener("ended", function () {
// //     document.getElementById("video1").play();
// //     document.getElementById("video1").classList.remove("hide");
// //     document.getElementById("video2").classList.add("hide")
  
// //   });

// //     }


//         // <div class="vancontainer" id="">
//         //     <div class="van" id="van"><img src="minivan.png">
//         //     </div>
//         //     <button onclick="start()">ORDER NOW!</button>
//         // </div> 
        
// /* .vancontainer{
//     height:150px;
//     width:100%;
    
//     position:relative;
//     overflow:hidden;
//     display:flex;
//    background:#e4e4e4;
//     justify-content:center;
//   }
//   .van{ position:absolute;width:200px;height:200px;;
//   }
//   .van img{
//     width:100%;
//     height:100%; 
//   }
  
//   .vangoes {
//     animation-name: up;
//     animation-duration: 3s;
//     animation-fill-mode: forwards;
//    position:absolute;
    
//   }
//   .vancontainer button{
//     background:rgba(255, 255, 255, 0.3);
//     color:#070707;
//     border-style: none;
//     width:100px;
//     height:20px;
//     position:absolute;
//   }




//   @keyframes up {
//     0%   { transform: translateX(0px); }
    
//     100% { transform: translatex(1700px);
//    }
//   } */
// // function start(){ 
// //     document.querySelector('#van').classList.add('vangoes');
// // }




const observer = new IntersectionObserver(intersections => {
  intersections.forEach(({
  target,
  isIntersecting
  }) => {
  target.classList.toggle('animate', isIntersecting);
  });
  }, {
  threshold: 0
  });
  
  document.querySelectorAll('#ok').forEach(div => {
  observer.observe(div);
  });







  
  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }

  function contact() {
    document.documentElement.scrollTop = 3550;
  }   



  