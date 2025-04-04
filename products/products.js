// products.js
const products = [
    {
        image: "../images/Modern Sofa.jpeg",
        title: "Modern Sofa",
        description: "Elegant and comfortable sofa for your living room.",
        price: "$799",
    },
    {
        image: "../images/Dining Table Set.jpeg",
        title: "Dining Table Set",
        description: "Stylish dining set perfect for family gatherings.",
        price: "$1200",
    },
    {
        image: "../images/Bedroom Set.jpeg",
        title: "Bedroom Set",
        description: "Luxurious bedroom set for ultimate comfort.",
        price: "$1500",
    },
    {
        image: "../images/Armchair.jpeg",
        title: "Armchair",
        description: "Comfortable Armchair for reading and relaxing.",
        price: "$399",
    },
    {
        image: "../images/Office Chair.jpeg",
        title: "Office Chair",
        description: "Ergonomic office chair for maximum productivity.",
        price: "$299",
    },
    {
        image: "../images/Bookshelf.jpeg",
        title: "Bookshelf",
        description: "Modern bookshelf to organize your favorite books.",
        price: "$450",
    },
    {
        image: "../images/Coffee Table.jpeg",
        title: "Coffee Table",
        description: "Elegant coffee table to complete your living space.",
        price: "$350",
    },
    {
        image: "../images/Side Table.jpeg",
        title: "Side Table",
        description: "Stylish side table for any room in your home.",
        price: "$200",
    },
    {
        image: "../images/Modern Sofa 2.jpeg",
        title: "Modern Sofa",
        description: "Elegant and comfortable sofa for your living room.",
        price: "$799",
    },
    {
        image: "../images/Dining Table Set 2.jpeg",
        title: "Dining Table Set",
        description: "Stylish dining set perfect for family gatherings.",
        price: "$1200",
    },
    {
        image: "../images/Bedroom Set 2.jpeg",
        title: "Bedroom Set",
        description: "Luxurious bedroom set for ultimate comfort.",
        price: "$1500",
    },
    {
        image: "../images/Armchair 2.jpeg",
        title: "Armchair",
        description: "Comfortable Armchair for reading and relaxing.",
        price: "$399",
    },
];

const productGrid = document.getElementById("productGrid");
const paginationDiv = document.getElementById("pagination");
const itemsPerPage = 8;
let currentPage = 1;

function displayProducts(page) {
    productGrid.innerHTML = "";
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageProducts = products.slice(startIndex, endIndex);

    pageProducts.forEach((product) => {
        productGrid.innerHTML += `
        <div class="product-item">
          <img src="${product.image}" alt="${product.title}" />
          <h3>${product.title}</h3>
          <p>${product.description}</p>
          <span class="price">${product.price}</span>
        </div>
      `;
    });
}

function displayPagination() {
    const totalPages = Math.ceil(products.length / itemsPerPage);
    paginationDiv.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.onclick = () => goToPage(i);
        if (i === currentPage) {
            button.classList.add('active');
        }
        paginationDiv.appendChild(button);
    }
}

function goToPage(page) {
    currentPage = page;
    displayProducts(currentPage);
    displayPagination();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

displayProducts(currentPage);
displayPagination();