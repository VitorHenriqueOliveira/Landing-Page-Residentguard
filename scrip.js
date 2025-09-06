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
     function achar_proximo (elemento, lista, index) {
      const tamanho = lista.length - 1;

  
      let index_futuro = index + 1;

      if (tamanho == index) {
        index_futuro = 0;
      }

      let index_passado = index - 1;

      if (index_passado == - 1){
        index_passado = tamanho;
      }


      lista[index_passado].classList.add('past');
      lista[index_futuro].classList.add('future');

     
     }

     function alterar_imagem(elemento, lista, index) {
      let past = document .querySelector(".past");
      let future = document .querySelector(".future");
      
      elemento.classList.add('hidden');
      future.classList.remove("hidden", "future");
      past.classList.remove("past");
      index += 1;
      achar_proximo(future, lista, index);
     }

     let index = 0;
    document.addEventListener('click', function(event) 
    {

        let carousel = event.target.closest('.elemento-carousel');
        console.log(index);
        if (carousel) {
          const list_carousel = document.querySelectorAll(".elemento-carousel");
          if(list_carousel){
              if (index == 0) {
                achar_proximo(carousel, list_carousel, index);
              }
              alterar_imagem(carousel, list_carousel, index)
              index += 1;

           
          
            
          }
      }
      
  
    });
});
