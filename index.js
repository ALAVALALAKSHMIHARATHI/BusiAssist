let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');

    function showSlide(index) {
      // Loop through all slides, remove "active" from each
      slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
          slide.classList.add('active');
        }
      });
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    function prevSlide() {
      // Use (length + current - 1) to avoid negative wrap
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }
    
const faqItems= document.querySelectorAll('.faq-item ');
faqItems.forEach(item =>{
    const qustion = item.querySelector('.faq-question');
     qustion.addEventListener('click',()=>{
        item.classList.toggle('open');
        faqItems.forEach(otherItem =>{
            if(otherItem !== item){
                otherItem.classList.remove('open');
            }
        });
     });
}); 
