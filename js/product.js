document.addEventListener("DOMContentLoaded", function () {
  const productGrid = document.getElementById("product-grid");
  const filterSelect = document.getElementById("filter");
  const sortSelect = document.getElementById("sort");
  const prevPageBtn = document.getElementById("prev-page");
  const nextPageBtn = document.getElementById("next-page");
  const pageNumber = document.getElementById("page-number");

  let currentPage = 1;
  const productsPerPage = 32; // 4 columns x 8 rows

  const products = [
    {
      id: 1,
      name: "Men Ankara Style 1",
      category: "men",
      price: "$20.00",
      rating: 4.5,
      image: "images/pix1.jpg",
      description: "Description for Men Product 1",
    },
    {
      id: 2,
      name: "Women Product 1",
      category: "women",
      price: "$30.00",
      rating: 4.0,
      image: "images/wpix1.jpg",
      description: "Description for Women Product 1",
    },
    {
      id: 3,
      name: "Men Ankara Style 2",
      category: "men",
      price: "$25.00",
      rating: 4.2,
      image: "images/pix2.jpg",
      description: "Description for Men Product 2",
    },
    {
      id: 4,
      name: "Women Product 2",
      category: "women",
      price: "$22.00",
      rating: 4.8,
      image: "images/wpix2.jpg",
      description: "Description for Women Product 2",
    },
    {
      id: 5,
      name: "Men Ankara Style 3",
      category: "men",
      price: "$18.00",
      rating: 3.9,
      image: "images/pix3.jpg",
      description: "Description for Men Product 3",
    },
    {
      id: 6,
      name: "Women Product 3",
      category: "women",
      price: "$35.00",
      rating: 4.7,
      image: "images/wpix3.jpg",
      description: "Description for Women Product 3",
    },
    {
      id: 7,
      name: "Men Ankara Style 4",
      category: "men",
      price: "$28.00",
      rating: 4.1,
      image: "images/pix4.jpg",
      description: "Description for Men Product 4",
    },
    {
      id: 8,
      name: "Women Product 4",
      category: "women",
      price: "$40.00",
      rating: 4.6,
      image: "images/wpix4.jpg",
      description: "Description for Women Product 4",
    },
    {
      id: 9,
      name: "Men Ankara Style 5",
      category: "men",
      price: "$32.00",
      rating: 4.3,
      image: "images/pix5.jpg",
      description: "Description for Men Product 5",
    },
    {
      id: 10,
      name: "Women Product 5",
      category: "women",
      price: "$38.00",
      rating: 4.4,
      image: "images/wpix5.jpg",
      description: "Description for Women Product 5",
    },
    {
      id: 11,
      name: "Men Ankara Style 6",
      category: "men",
      price: "$20.00",
      rating: 4.5,
      image: "images/pix6.jpg",
      description: "Description for Men Product 6",
    },
    {
      id: 12,
      name: "Women Product 6",
      category: "women",
      price: "$30.00",
      rating: 4.0,
      image: "images/wpix6.jpg",
      description: "Description for Women Product 6",
    },
    {
      id: 13,
      name: "Men Ankara Style 7",
      category: "men",
      price: "$25.00",
      rating: 4.2,
      image: "images/pix7.jpg",
      description: "Description for Men Product 7",
    },
    {
      id: 14,
      name: "Women Product 7",
      category: "women",
      price: "$22.00",
      rating: 4.8,
      image: "images/wpix7.jpg",
      description: "Description for Women Product 7",
    },
    {
      id: 15,
      name: "Men Ankara Style 8",
      category: "men",
      price: "$18.00",
      rating: 3.9,
      image: "images/pix8.jpg",
      description: "Description for Men Product 8",
    },
    {
      id: 16,
      name: "Women Product 8",
      category: "women",
      price: "$35.00",
      rating: 4.7,
      image: "images/wpix8.jpg",
      description: "Description for Women Product 8",
    },
    {
      id: 17,
      name: "Men Ankara Style 9",
      category: "Men",
      price: "$35.00",
      rating: 4.7,
      image: "images/pix9.jpg",
      description: "Description for men Product 9",
    },
    {
      id: 18,
      name: "Women Product 9",
      category: "women",
      price: "$35.00",
      rating: 4.7,
      image: "images/wpix9.jpg",
      description: "Description for Women Product 9",
    },
    {
      id: 19,
      name: "Men Agbada Style 1",
      category: "Men",
      price: "$35.00",
      rating: 4.7,
      image: "images/pix10.jpg",
      description: "Description for men Product 10",
    },
    {
      id: 20,
      name: "Men Agbada Style 2",
      category: "women",
      price: "$35.00",
      rating: 4.7,
      image: "images/pix11.jpg",
      description: "Description for Men Product 9",
    },
  ];

  function displayProducts(products, page) {
    productGrid.innerHTML = "";
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = page * productsPerPage;
    const productsToDisplay = products.slice(startIndex, endIndex);

    productsToDisplay.forEach((product) => {
      const productItem = document.createElement("div");
      productItem.classList.add("product-item");
      productItem.setAttribute("data-product-id", product.id);
      productItem.innerHTML = `
              <img src="${product.image}" alt="${product.name}">
              <h2>${product.name}</h2>
              <p class="price">${product.price}</p>
              <p class="rating">Rating: ${product.rating}</p>
          `;
      productGrid.appendChild(productItem);

      productItem.addEventListener("click", function () {
        showModal(product);
      });
    });
  }

  function showModal(product) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = product.image;
    captionText.innerHTML = product.description;
  }

  function filterProducts() {
    const filterValue = filterSelect.value;
    let filteredProducts = products;

    if (filterValue !== "all") {
      filteredProducts = products.filter(
        (product) => product.category === filterValue
      );
    }

    displayProducts(filteredProducts, currentPage);
  }

  function sortProducts() {
    const sortValue = sortSelect.value;
    let sortedProducts = [...products];

    if (sortValue === "popularity") {
      sortedProducts.sort((a, b) => b.rating - a.rating);
    } else if (sortValue === "price") {
      sortedProducts.sort(
        (a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1))
      );
    } else if (sortValue === "newest") {
      sortedProducts.sort((a, b) => b.id - a.id);
    }

    displayProducts(sortedProducts, currentPage);
  }

  filterSelect.addEventListener("change", filterProducts);
  sortSelect.addEventListener("change", sortProducts);

  prevPageBtn.addEventListener("click", function () {
    if (currentPage > 1) {
      currentPage--;
      pageNumber.textContent = currentPage;
      displayProducts(products, currentPage);
    }
  });

  nextPageBtn.addEventListener("click", function () {
    if (currentPage * productsPerPage < products.length) {
      currentPage++;
      pageNumber.textContent = currentPage;
      displayProducts(products, currentPage);
    }
  });

  displayProducts(products, currentPage);
});
