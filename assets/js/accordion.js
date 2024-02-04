document.addEventListener('DOMContentLoaded', function() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      this.classList.toggle('open');
      this.classList.toggle('closed');

      const content = this.querySelector('.accordion-content');
      content.classList.toggle('hidden');
    });
  });
});
