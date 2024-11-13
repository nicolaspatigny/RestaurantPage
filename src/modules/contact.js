import restaurantInterior from "../images/restaurant-interior.jpg";

export function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const contactHeader = document.createElement("div");
  contactHeader.classList.add("contact-header");
  contactHeader.innerHTML = `
        <img src="${restaurantInterior}" alt="Restaurant Interior">
        <div class="contact-overlay">
            <h1>Contact Us</h1>
        </div>
    `;

  const contactContent = document.createElement("div");
  contactContent.classList.add("contact-content");

  const info = document.createElement("div");
  info.classList.add("contact-info");
  info.innerHTML = `
        <h2>Visit Us</h2>
        <p><strong>Address:</strong> 123 Gourmet Avenue, Cuisine District</p>
        <p><strong>Phone:</strong> (555) 123-4567</p>
        <p><strong>Email:</strong> info@lamaison.com</p>
    `;

  const form = document.createElement("form");
  form.classList.add("contact-form");
  form.innerHTML = `
        <h2>Make a Reservation</h2>
        <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" required>
        </div>
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" required>
        </div>
        <div class="form-group">
            <label for="date">Date:</label>
            <input type="date" id="date" required>
        </div>
        <div class="form-group">
            <label for="time">Time:</label>
            <input type="time" id="time" required>
        </div>
        <div class="form-group">
            <label for="guests">Number of Guests:</label>
            <input type="number" id="guests" min="1" max="10" required>
        </div>
        <div class="form-group">
            <label for="message">Special Requests:</label>
            <textarea id="message"></textarea>
        </div>
        <button type="submit">Request Reservation</button>
    `;

  contactContent.appendChild(info);
  contactContent.appendChild(form);

  contact.appendChild(contactHeader);
  contact.appendChild(contactContent);

  return contact;
}
