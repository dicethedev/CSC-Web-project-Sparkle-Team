document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu
  const hamburgerButton = document.querySelector(".hamburger-button");
  const mobileMenu = document.querySelector(".mobile-menu");

  hamburgerButton.addEventListener("click", () =>
    mobileMenu.classList.toggle("active")
  );

  // Countdown Timer
  const countDownDate = new Date("Jun 30, 2024 15:37:25").getTime();

  const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("days").innerHTML = "00";
      document.getElementById("hours").innerHTML = "00";
      document.getElementById("minutes").innerHTML = "00";
      document.getElementById("seconds").innerHTML = "00";
    }
  }, 1000);

  // Calendar
  const calendar = document.getElementById("calendar");
  const appointmentDetails = document.getElementById("appointment-details");
  const selectedDateSpan = document.getElementById("selected-date");
  const timeSlotsDiv = document.getElementById("time-slots");
  const bookingForm = document.getElementById("booking-form");
  const monthYearDisplay = document.getElementById("month-year");
  const prevMonthButton = document.getElementById("prev-month");
  const nextMonthButton = document.getElementById("next-month");

  const timeSlots = [
    "12:00 am – 2:00 am",
    "2:00 am – 4:00 am",
    "4:00 am – 6:00 am",
  ];

  let currentDate = new Date();

  function generateCalendar(year, month) {
    const firstDay = new Date(year, month).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();

    const calendarHeader = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    calendar.innerHTML = "";

    calendarHeader.forEach((day) => {
      const headerDiv = document.createElement("div");
      headerDiv.classList.add("header");
      headerDiv.textContent = day;
      calendar.appendChild(headerDiv);
    });

    for (let i = 0; i < firstDay; i++) {
      const emptyDiv = document.createElement("div");
      emptyDiv.classList.add("empty");
      calendar.appendChild(emptyDiv);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dayDiv = document.createElement("div");
      dayDiv.classList.add("day");
      dayDiv.textContent = day;

      const date = new Date(year, month, day);
      if (date < today) {
        dayDiv.classList.add("disabled");
      } else {
        dayDiv.addEventListener("click", function () {
          handleDateClick(day);
        });
      }

      calendar.appendChild(dayDiv);
    }

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    monthYearDisplay.textContent = `${monthNames[month]} ${year}`;

    prevMonthButton.disabled =
      year === today.getFullYear() && month <= today.getMonth();
    nextMonthButton.disabled = year > today.getFullYear();
  }

  function handleDateClick(day) {
    const days = calendar.getElementsByClassName("day");
    for (let dayDiv of days) {
      dayDiv.classList.remove("selected");
    }
    days[day - 1].classList.add("selected");

    selectedDateSpan.textContent = `${currentDate.toLocaleString("default", {
      month: "long",
    })} ${day}, ${currentDate.getFullYear()}`;
    appointmentDetails.classList.remove("hidden");
    bookingForm.classList.add("hidden");

    timeSlotsDiv.innerHTML = "";
    timeSlots.forEach((slot) => {
      const slotDiv = document.createElement("div");
      slotDiv.classList.add("time-slot");
      slotDiv.innerHTML = `
              <span>${slot}</span>
              <button onclick="bookSlot('${slot}')">Book Appointment</button>
          `;
      timeSlotsDiv.appendChild(slotDiv);
    });
  }

  window.bookSlot = function (slot) {
    bookingForm.classList.remove("hidden");
  };

  prevMonthButton.addEventListener("click", function () {
    if (
      currentDate.getMonth() > new Date().getMonth() ||
      currentDate.getFullYear() > new Date().getFullYear()
    ) {
      currentDate.setMonth(currentDate.getMonth() - 1);
      generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
    }
  });

  nextMonthButton.addEventListener("click", function () {
    if (
      currentDate.getFullYear() === new Date().getFullYear() &&
      currentDate.getMonth() < 11
    ) {
      currentDate.setMonth(currentDate.getMonth() + 1);
      generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
    }
  });

  generateCalendar(currentDate.getFullYear(), currentDate.getMonth());

  // Feedback Corner
  const cards = document.querySelectorAll(".feedback-item_container");
  let currentIndex = 0;

  function updateHighlight() {
    cards.forEach((card, index) => {
      card.classList.toggle("highlighted", index === currentIndex);
    });
  }

  document.getElementById("prev-btn").addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = cards.length - 1;
    }
    updateHighlight();
  });

  document.getElementById("next-btn").addEventListener("click", () => {
    if (currentIndex < cards.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateHighlight();
  });

  updateHighlight();
});
