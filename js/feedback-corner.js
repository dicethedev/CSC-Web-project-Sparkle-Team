document.addEventListener("DOMContentLoaded", function() {
    const feedbackItems = document.querySelectorAll(".feedback-item");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const itemsPerPage = 3;
    let currentPage = 1;
    const totalPages = Math.ceil(feedbackItems.length / itemsPerPage);
  
    function showPage(page) {
      const start = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;
  
      feedbackItems.forEach((item, index) => {
        if (index >= start && index < end) {
          item.style.display = "flex"; // Show the item
        } else {
          item.style.display = "none"; // Hide the item
        }
      });
  
      // Enable or disable pagination buttons
      prevBtn.disabled = page === 1;
      nextBtn.disabled = page === totalPages;
    }
  
    // Event listeners for pagination buttons
    prevBtn.addEventListener("click", function() {
      if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
      }
    });
  
    nextBtn.addEventListener("click", function() {
      if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
      }
    });
  
    // Initial display
    showPage(currentPage);
  });
  