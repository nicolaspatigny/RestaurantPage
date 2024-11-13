import burger from "../images/burger.jpg";
import pizza from "../images/pizza.jpg";
import pasta from "../images/pasta.jpg";
import salad from "../images/salad.jpg";
import dessert from "../images/dessert.jpg";

export function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  const heading = document.createElement("h1");
  heading.textContent = "Our Menu";

  const menuItems = [
    {
      name: "Classic Burger",
      price: "$16",
      description:
        "Hand-crafted beef patty with aged cheddar, caramelized onions, and our secret sauce",
      image: burger,
    },
    {
      name: "Artisan Pizza",
      price: "$18",
      description:
        "Wood-fired pizza with fresh mozzarella, basil, and San Marzano tomatoes",
      image: pizza,
    },
    {
      name: "Homemade Pasta",
      price: "$22",
      description:
        "Fresh pasta with wild mushrooms and black truffle cream sauce",
      image: pasta,
    },
    {
      name: "Garden Salad",
      price: "$14",
      description:
        "Mixed greens with seasonal vegetables and house-made vinaigrette",
      image: salad,
    },
    {
      name: "Chocolate Delight",
      price: "$10",
      description: "Rich chocolate mousse with fresh berries and gold leaf",
      image: dessert,
    },
  ];

  const menuGrid = document.createElement("div");
  menuGrid.classList.add("menu-grid");

  menuItems.forEach((item) => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
    menuItem.innerHTML = `
            <div class="menu-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="menu-item-content">
                <h2>${item.name}</h2>
                <p class="price">${item.price}</p>
                <p class="description">${item.description}</p>
            </div>
        `;
    menuGrid.appendChild(menuItem);
  });

  menu.appendChild(heading);
  menu.appendChild(menuGrid);

  return menu;
}
