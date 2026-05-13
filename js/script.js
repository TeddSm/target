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

  const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true, 
    slidesPerView: "auto", 
    loop: true, 
    coverflowEffect: {
        rotate: -40,    
        stretch: 0,      
        depth: 200,      
        modifier: 1,
        slideShadows: false, 
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});