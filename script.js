const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let current = 0;

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.remove('active');
    if (i === index) testimonial.classList.add('active');
  });
}

prevBtn.addEventListener('click', () => {
  current = (current - 1 + testimonials.length) % testimonials.length;
  showTestimonial(current);
});

nextBtn.addEventListener('click', () => {
  current = (current + 1) % testimonials.length;
  showTestimonial(current);
});

showTestimonial(current);