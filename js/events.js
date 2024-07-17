document.addEventListener("DOMContentLoaded", function () {
  const eventGrid = document.getElementById("event-grid");
  const prevPageBtn = document.getElementById("prev-page");
  const nextPageBtn = document.getElementById("next-page");
  const pageNumber = document.getElementById("page-number");
  const modal = document.getElementById("eventModal");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalDate = document.getElementById("modalDate");
  const modalTime = document.getElementById("modalTime");
  const modalDescription = document.getElementById("modalDescription");
  const closeModal = document.getElementsByClassName("close")[0];

  let currentPage = 1;
  const eventsPerPage = 8;

  const events = [
    {
      id: 1,
      name: "Fashion Show",
      category: "Fashion",
      date: "Aug 20, 2024",
      time: "6:00 PM",
      image: "images/carousel-1.jpg",
      description: "An exclusive fashion show featuring the latest trends.",
    },
    {
      id: 2,
      name: "Discount Sale",
      category: "Sale",
      date: "Sep 10, 2024",
      time: "9:00 AM",
      image: "images/discount.jpg",
      description: "Enjoy amazing discounts on a wide range of products.",
    },
    {
      id: 3,
      name: "Black Friday",
      category: "Sale",
      date: "Nov 25, 2024",
      time: "12:00 AM",
      image: "images/black-friday.jpg",
      description: "The biggest sale of the year with incredible deals.",
    },
    {
      id: 4,
      name: "Christmas Sale",
      category: "Sale",
      date: "Dec 20, 2024",
      time: "10:00 AM",
      image: "images/chrismas.jpg",
      description: "Get ready for Christmas with our special sale.",
    },
    {
      id: 5,
      name: "New Year Sale",
      category: "Sale",
      date: "Jan 1, 2025",
      time: "8:00 AM",
      image: "images/newyear.jpg",
      description: "Start the new year with amazing discounts.",
    },
    {
      id: 6,
      name: "Spring Collection Launch",
      category: "Fashion",
      date: "Mar 15, 2025",
      time: "5:00 PM",
      image: "images/spring.jpg",
      description: "Join us for the launch of our new spring collection.",
    },
    {
      id: 7,
      name: "Summer Sale",
      category: "Sale",
      date: "Jun 1, 2025",
      time: "9:00 AM",
      image: "images/summer.jpg",
      description: "Hot summer deals you don't want to miss.",
    },
    {
      id: 8,
      name: "Autumn Collection Showcase",
      category: "Fashion",
      date: "Sep 5, 2025",
      time: "7:00 PM",
      image: "images/autumn.jpg",
      description: "Showcasing our latest autumn collection.",
    },
    {
      id: 9,
      name: "Winter Wonderland Sale",
      category: "Sale",
      date: "Dec 1, 2025",
      time: "10:00 AM",
      image: "images/winter.jpg",
      description: "Amazing winter deals and discounts.",
    },
    {
      id: 10,
      name: "Valentine's Day Sale",
      category: "Sale",
      date: "Feb 14, 2025",
      time: "8:00 AM",
      image: "images/valentine.jpg",
      description: "Special deals for Valentine's Day.",
    },
  ];

  function displayEvents(events, page) {
    eventGrid.innerHTML = "";
    const startIndex = (page - 1) * eventsPerPage;
    const endIndex = page * eventsPerPage;
    const eventsToDisplay = events.slice(startIndex, endIndex);

    eventsToDisplay.forEach((event) => {
      const eventItem = document.createElement("div");
      eventItem.classList.add("event-item");
      eventItem.setAttribute("data-event-id", event.id);
      eventItem.innerHTML = `
                <img src="${event.image}" alt="${event.name}">
                <div class="event-details">
                    <span class="event-category">${event.category}</span>
                    <h2>${event.name}</h2>
                    <p class="event-date">${event.date} at ${event.time}</p>
                    <p>${event.description}</p>
                    <a href="#" class="btn">View Details</a>
                </div>
            `;
      eventGrid.appendChild(eventItem);

      eventItem.querySelector(".btn").addEventListener("click", function (e) {
        e.preventDefault();
        showModal(event);
      });
    });
  }

  function showModal(event) {
    modal.style.display = "block";
    modalImage.src = event.image;
    modalTitle.innerText = event.name;
    modalDate.innerText = event.date;
    modalTime.innerText = event.time;
    modalDescription.innerText = event.description;
  }

  closeModal.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  prevPageBtn.addEventListener("click", function () {
    if (currentPage > 1) {
      currentPage--;
      pageNumber.textContent = currentPage;
      displayEvents(events, currentPage);
    }
  });

  nextPageBtn.addEventListener("click", function () {
    if (currentPage * eventsPerPage < events.length) {
      currentPage++;
      pageNumber.textContent = currentPage;
      displayEvents(events, currentPage);
    }
  });

  displayEvents(events, currentPage);
});
