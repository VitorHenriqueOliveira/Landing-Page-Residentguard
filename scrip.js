// Lista de slides (primeiro é o login, depois imagens)
const slides = [
    { type: "html", content: `
      <div class="login-slide">
        <h2>Login</h2>
        <form>
          <input type="text" placeholder="Usuário" required>
          <input type="password" placeholder="Senha" required>
          <button type="submit">Entrar</button>
        </form>
      </div>
    ` },
    { type: "img", src: "img/81facf54-e9c0-4f3e-b673-31703bd2a2c2.png" },
    { type: "img", src: "img/0503cddb-0bec-4f89-8504-4d39658449a9.png" },
    { type: "img", src: "img/94320a02-84fa-4fcd-9670-0d8ba35f01a7.png" },
    { type: "img", src: "img/9a0e28f5-8aa2-4e77-b929-a0a70df43081.png" },
    { type: "img", src: "img/cfa0f375-ba01-474e-b01f-59e64a2236dc.png" },
    { type: "img", src: "img/6567565b-d9e6-4150-99d8-c2e46e08750a.png" },
    { type: "img", src: "img/a0a5effa-ab2b-468b-885f-090f86022972.png" }
  ];
  
  let currentSlide = 0;
  const slideContainer = document.createElement("div");
  slideContainer.classList.add("carousel");
  
  const slideContent = document.createElement("div");
  slideContent.classList.add("slide-content");
  slideContainer.appendChild(slideContent);
  
  const prevBtn = document.createElement("button");
  prevBtn.textContent = "⟨";
  prevBtn.classList.add("carousel-btn", "prev");
  prevBtn.onclick = () => showSlide(currentSlide - 1);
  
  const nextBtn = document.createElement("button");
  nextBtn.textContent = "⟩";
  nextBtn.classList.add("carousel-btn", "next");
  nextBtn.onclick = () => showSlide(currentSlide + 1);
  
  slideContainer.appendChild(prevBtn);
  slideContainer.appendChild(nextBtn);
  
  // Insere carrossel no início
  document.querySelector("#inicio .conteudo").innerHTML = "";
  document.querySelector("#inicio .conteudo").appendChild(slideContainer);
  
  function showSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    currentSlide = index;
  
    const slide = slides[currentSlide];
    if (slide.type === "html") {
      slideContent.innerHTML = slide.content;
    } else {
      slideContent.innerHTML = `<img src="${slide.src}" alt="Slide ${currentSlide + 1}">`;
    }
  }
  
  // Troca automática a cada 5s
  setInterval(() => {
    showSlide(currentSlide + 1);
  }, 5000);
  
  showSlide(0);
  
  // Destacar link ativo no menu
  const menuLinks = document.querySelectorAll(".menu a");
  window.addEventListener("scroll", () => {
    let fromTop = window.scrollY + 120;
    menuLinks.forEach(link => {
      let section = document.querySelector(link.hash);
      if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
        menuLinks.forEach(l => l.classList.remove("ativo"));
        link.classList.add("ativo");
      }
    });
  });
  