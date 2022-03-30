// Testimonials slider

const slides = document.querySelector(".slider").children;
const indicatorSlide = document.querySelector(".slider-indicator").children;


 for(let i=0; i<indicatorSlide.length; i++){
   indicatorSlide[i].addEventListener("click",function(){

        for(let j=0; j<indicatorSlide.length; j++){
          indicatorSlide[j].classList.remove("active");
        }
         this.classList.add("active");
         const id=this.getAttribute("data-id");
        for(let j=0; j<slides.length; j++){
         slides[j].classList.remove("active");
        }

         slides[id].classList.add("active");

   })
 }
