import restaurantFront from "../images/restaurant-front.jpg";
import chefCooking from "../images/chef-cooking.jpg";

export function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  // Hero Section
  const heroSection = document.createElement("div");
  heroSection.classList.add("hero-section");

  const heroImage = document.createElement("img");
  heroImage.src = restaurantFront;
  heroImage.alt = "Restaurant Front";
  heroSection.appendChild(heroImage);

  const heroText = document.createElement("div");
  heroText.classList.add("hero-text");
  heroText.innerHTML = `
        <h1>Welcome to La Maison</h1>
        <p>Experience the finest dining in town</p>
    `;
  heroSection.appendChild(heroText);

  // About Section
  const aboutSection = document.createElement("div");
  aboutSection.classList.add("about-section");

  const aboutContent = document.createElement("div");
  aboutContent.classList.add("about-content");
  aboutContent.innerHTML = `
        <div class="about-text">
            <h2>Our Story</h2>
            <p>Founded in 1995, La Maison brings the authentic flavors of French cuisine to your table. 
            Our award-winning chefs combine traditional techniques with modern innovation.</p>
        </div>
        <div class="about-image">
            <img src="${chefCooking}" alt="Our Chef at Work">
        </div>
    `;
  aboutSection.appendChild(aboutContent);

  // Hours Section
  const hours = document.createElement("div");
  hours.classList.add("hours");
  hours.innerHTML = `
        <h2>Hours of Operation</h2>
        <div class="hours-grid">
            <div class="hours-item">
                <h3>Lunch</h3>
                <p>Monday-Friday: 11:30am - 2:30pm</p>
                <p>Saturday-Sunday: 12:00pm - 3:00pm</p>
            </div>
            <div class="hours-item">
                <h3>Dinner</h3>
                <p>Monday-Thursday: 5:30pm - 10:00pm</p>
                <p>Friday-Saturday: 5:30pm - 11:00pm</p>
                <p>Sunday: 5:00pm - 9:00pm</p>
            </div>
        </div>
    `;

  home.appendChild(heroSection);
  home.appendChild(aboutSection);
  home.appendChild(hours);

  return home;
}
