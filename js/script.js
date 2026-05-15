document
  .getElementById("lead-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = {
      name: document.getElementById("name").value,
      contact: document.getElementById("contact").value,
      niche: document.getElementById("niche").value,
      instagram: document.getElementById("instagram").value,
    };

    try {
      const response = await fetch("/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Заявка успішно надіслана!");
        this.reset();
      } else {
        alert("Помилка сервера. Спробуйте пізніше.");
      }
    } catch (error) {
      alert("Помилка відправки.");
    }
  });

const policyBtn = document.querySelector(".policy-btn");  
const policySection = document.querySelector(".policy");  
const closePolicyBtn = document.querySelector(".close-policy-btn")

if(policyBtn) {
  policyBtn.addEventListener("click", () => {
policySection.classList.add("active");
  })
}

if(closePolicyBtn) {
  closePolicyBtn.addEventListener("click", () => {
policySection.classList.remove("active");
  })
}

  const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true, 
    slidesPerView: "auto", 
    loop: true, 
    coverflowEffect: {
        rotate: -30,    
        stretch: 0,      
        depth: 200,      
        modifier: 1,
        slideShadows: false, 
    },
    breakpoints: {
        768: {
            coverflowEffect: {
                rotate: -20, 
                stretch: 0,
                depth: 150,
                modifier: 1,
            },
        },
        1024: {
            coverflowEffect: {
                rotate: -20,    
                stretch: 10, 
                depth: 200,
                modifier: 1.5,
            },
        }
      },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

document.querySelectorAll('.slide-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); 
        const slideIndex = this.getAttribute('data-slide');
        const targetSection = document.querySelector('#swiper');
        targetSection.scrollIntoView({
            behavior: 'smooth' 
        });
        if (typeof swiper !== 'undefined') {
            swiper.slideToLoop(slideIndex, 900); 
        }
    });
});