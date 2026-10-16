// EVENTS WITH LOCAL IMAGES
let events = [
  {
    title: "Music Concert",
    date: "2026-04-10",
    location: "Bangalore",
    desc: "Live DJ Night",
    image: "https://5.imimg.com/data5/SELLER/Default/2025/2/486425613/RO/HS/QQ/240689908/music-event-management-service.jpg",
  },
  {
    title: "Tech Fest",
    date: "2026-04-15",
    location: "Mysore",
    desc: "Hackathon Event",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfA_VTH-qDCgfrTIg_X9VoNo85gSZiI09q0Q&s",
  },
  {
    title: "Food Festival",
    date: "2026-04-20",
    location: "Hubli",
    desc: "Street Food",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1t_iNN6ea-6aam8s3O_M0gMIOA1Yg2S7Drw&s "
  },
  {
    title: "Workshop",
    date: "2026-04-25",
    location: "Dharwad",
    desc: "Skill Training",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLHIUgAdM4fSNG0amT2VFwXEK0_OfZZXm0LQ&s "
    
  },

 {
    title: "Dance Show",
    date: "2026-04-18",
    location: "Belgaum",
    desc: "Classical & Modern Dance",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ312-tC68zjwGtDJiDYlXo3DNDssn0eGUxg&s"
  },
  {
    title: "Sports Event",
    date: "2026-04-20",
    location: "Udupi",
    desc: "Cricket & Football",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT188bhDDlo7ikHsGTMaLNXsLm8-27RqfOiVw&s"
  },
  {
    title: "Business Seminar",
    date: "2026-04-22",
    location: "Mangalore",
    desc: "Startup Ideas",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCrkYvVvhKC3CO3gkiG1ILV_14hHcCtsnNIw&s "
  },
  {
    title: "Art Exhibition",
    date: "2026-04-24",
    location: "Shimoga",
    desc: "Creative Paintings",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCU76eDkPBBOg2ielLBky7684IbACz4dECRg&s"
  },
  {
    title: "Startup Meetup",
    date: "2026-04-26",
    location: "Bangalore",
    desc: "Entrepreneur Networking",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUs7jhZ9uGBJncUKewMMPFxZC_Cf6zZYoKdw&s "
  },

  {
    title: "Gaming Tournament",
    date: "2026-04-28",
    location: "Davangere",
    desc: "E-sports Competition",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2LCRSqwEWBv5epeZOvhzFLTuwIX9nBFTz4g&s "
  }

];

let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

/* LOGIN */
function login() {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;

  if (email && pass) {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("app").style.display = "block";
    displayEvents();
  } else {
    alert("Enter login details");
  }
}

/* LOGOUT */
function logout() {
  location.reload();
}

/* DISPLAY EVENTS */
function displayEvents(list = events) {
  let html = "";
  list.forEach((e, i) => {
    html += `
    <div class="card">
      <img src="${e.image}">
      <div style="padding:10px;">
        <h3>${e.title}</h3>
        <p>${e.date}</p>
        <p>${e.location}</p>
        <p>${e.desc}</p>
        <button onclick="bookEvent(${i})">Book</button>
      </div>
    </div>`;
  });

  document.getElementById("events").innerHTML = html;
  document.getElementById("bookings").innerHTML = "";
}

/* SEARCH */
function searchEvent() {
  let val = document.getElementById("search").value.toLowerCase();
  let filtered = events.filter(e =>
    e.title.toLowerCase().includes(val)
  );
  displayEvents(filtered);
}

/* CREATE EVENT FORM */
function showCreate() {
  document.getElementById("createForm").style.display = "block";
}

/* ADD EVENT */
function addEvent() {
  let e = {
    title: title.value,
    date: date.value,
    location: location.value,
    desc: desc.value,
    image: "images/" + image.value
  };

  events.push(e);
  displayEvents();
  alert("Event Added!");
}

/* BOOK EVENT */
function bookEvent(index) {
  bookings.push(events[index]);
  localStorage.setItem("bookings", JSON.stringify(bookings));
  alert("Event Booked!");
}

/* SHOW BOOKINGS */
function showBookings() {
  let html = "";

  bookings.forEach(e => {
    html += `
    <div class="card">
      <img src="${e.image}">
      <div style="padding:10px;">
        <h3>${e.title}</h3>
        <p>${e.date}</p>
        <p>${e.location}</p>
      </div>
    </div>`;
  });

  document.getElementById("events").innerHTML = "";
  document.getElementById("bookings").innerHTML = html;
}


