


const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 800,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        slideChange: function () {
            const textContainers = document.querySelectorAll('.text-container');
            textContainers.forEach(container => {
                container.style.opacity = '0';
            });

            setTimeout(() => {
                const activeTextContainer = this.slides[this.activeIndex].querySelector('.text-container');
                activeTextContainer.style.opacity = '1';
            }, 500);
        },
    },
});

document.querySelector('.swiper-slide-active .text-container').style.opacity = '1';






const testimonials = [
    '"Amazing service that exceeded my expectations!"',
    '"Truly professional and efficient team. Highly recommend!"',
    '"Customer support was top-notch and very responsive!"',
    '"Their attention to detail really made a difference!"',
    '"Quick, reliable, and easy to work with!"'
  ];

  let index = 0;
  const testimonialText = document.getElementById('testimonial-text');

  setInterval(() => {
    testimonialText.classList.add('fade');
    setTimeout(() => {
      index = (index + 1) % testimonials.length;
      testimonialText.textContent = testimonials[index];
      testimonialText.classList.remove('fade');
    }, 500);
  }, 3000);



  const carousel = document.getElementById('carousel');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  let scrollAmount = 0;

  nextBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: 320, behavior: 'smooth' });
  });

  prevBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -320, behavior: 'smooth' });
  });


  const slides = document.querySelectorAll('.work-slide');
  const prev = document.querySelector('.carousel-btn.prev');
  const next = document.querySelector('.carousel-btn.next');

  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) slide.classList.add('active');
    });
  }

  prev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });

  next.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });




  function toggleMenu() {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');

  navbar.classList.toggle('active');
  hamburger.classList.toggle('active');
}
