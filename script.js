import menu from './menuData.js'

const section = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

const categories = menu.reduce(
    (values, item) => {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    },
    ["ALL"]
);

const categoryList = () => {
    const categoryBtns = categories
        .map((category) => {
            return `<button class="btn btn-outline-dark btn-item" data-id=${category}>${category}</button>`;
        })
        .join("");

    btnContainer.innerHTML = categoryBtns;

    const filterBtns = document.querySelectorAll(".btn-item");
    const activeCategory = document.querySelector(".active-category");

    filterBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const category = e.currentTarget.dataset.id;

            activeCategory.innerHTML = `<h3>${category}</h3>`;

            const menuCategory = menu.filter((menuItem) => {
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            if (category === "ALL") {
                menuList(menu);
            } else {
                menuList(menuCategory);
            }
        });
    });
};

document.querySelector(".active-category").innerHTML = "<h3>ALL</h3>";

const menuList = (menuItems) => {
    let displayMenu = menuItems.map((item) => {
        return `<div class="menu-items col-xl-6 col-md-12 col-sm-12 ">
            <img
              src=${item.img}
              alt=${item.title}
              class="photo"
            />
            <div class="menu-info">
              <div class="menu-title">
                <h4>${item.title}</h4>
                <h4 class="price">₹${item.price}</h4>
              </div>
              <div class="menu-text">
                ${item.desc}
              </div>
            </div>
          </div>
    `;
    });
    displayMenu = displayMenu.join("");
    section.innerHTML = displayMenu;
};

menuList(menu);
categoryList();
