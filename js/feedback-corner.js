  document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.feedback-item_container');
    let currentIndex = 0;

    function updateHighlight() {
      cards.forEach((card, index) => {
        card.classList.toggle('highlighted', index === currentIndex);
      });
    }

    document.getElementById('prev-btn').addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = cards.length - 1;
      }
      updateHighlight();
    });

    document.getElementById('next-btn').addEventListener('click', () => {
      if (currentIndex < cards.length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      updateHighlight();
    });

    updateHighlight();
  });