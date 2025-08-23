document.addEventListener("DOMContentLoaded", () => {

  const faqButtons = document.querySelectorAll(".faq-question");
  faqButtons.forEach(button => {
    button.addEventListener("click", () => {
      const answer = button.nextElementSibling;
      document.querySelectorAll(".faq-answer").forEach(a => {
        if(a !== answer) a.style.maxHeight = null;
      });
      if(answer.style.maxHeight){
        answer.style.maxHeight = null;
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });

  
  const carousel = document.querySelector(".carousel");
  if(carousel){
    let isDown=false, startX, scrollLeft;
    carousel.addEventListener('mousedown', e => {
      isDown=true;
      startX=e.pageX - carousel.offsetLeft;
      scrollLeft=carousel.scrollLeft;
    });
    carousel.addEventListener('mouseleave', ()=>isDown=false);
    carousel.addEventListener('mouseup', ()=>isDown=false);
    carousel.addEventListener('mousemove', e=>{
      if(!isDown) return;
      e.preventDefault();
      const x=e.pageX-carousel.offsetLeft;
      const walk=(x-startX)*2;
      carousel.scrollLeft=scrollLeft-walk;
    });
  }
});
