const productsGrid = document.getElementById("productsGrid");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const categoryFilter = document.getElementById("categoryFilter");
const minPrice = document.getElementById("minPrice");
const maxPrice = document.getElementById("maxPrice");
const filterBtn = document.getElementById("filterBtn");

const products = [
  {
    _id: "689a00000000000000000011",
    brand: "Chanel",
    category: "bag",
    daily_rate: 1300,
    product_details: "Classic 11.12 Lambskin black (6.1 x 10 x 2.6 in)",
    size: "S",
    current_status: true,
    image: "https://i.ebayimg.com/images/g/iYkAAOSwnY9oKlbN/s-l500.jpg",
  },
  {
    _id: "689a00000000000000000012",
    brand: "Chanel",
    category: "bag",
    daily_rate: 1400,
    product_details: "Chanel 25 Small Handbag Grained Calfskin & Gold-Tone Metal black (11.8 x 10.2 x 5.5in)",
    size: "S",
    current_status: true,
    image: "https://sands-uae.com/cdn/shop/files/chanel-25-medium-handbag-grained-calfskin-gold-tone-metal-black-front-view.jpg?v=1750158249&width=1100",
  },
  {
    _id: "689a00000000000000000013",
    brand: "Fabrique.co",
    category: "clothes",
    daily_rate: 300,
    product_details: "White Lace Midi Dress floral embroidery (UK 8)",
    size: "M",
    current_status: true,
    image: "https://filebroker-cdn.lazada.co.th/kf/S4d7622278da3418baa76987ea4810eedW.jpg",
  },
  {
    _id: "689a00000000000000000014",
    brand: "Louis Vuitton",
    category: "bag",
    daily_rate: 1100,
    product_details: "Neverfull MM Monogram Canvas brown (12.2 x 11.4 x 6.7 in)",
    size: "M",
    current_status: true,
    image: "https://www.oedvintage.com/wp-content/uploads/2025/12/Louis-Vuitton-Monogram-Neverfull-MM-M40156-24.jpg",
  },
  {
    _id: "689a00000000000000000015",
    brand: "Dior",
    category: "bag",
    daily_rate: 1200,
    product_details: "Lady Dior Medium Cannage Lambskin white (9.5 x 7.9 x 4.3 in)",
    size: "M",
    current_status: true,
    image: "https://assets.christiandior.com/is/image/diorprod/M0565ONGEM030_E01-2?$default_GH$&crop=542,663,907,1183&wid=1850&hei=2000&scale=0.875&extend=0,0,0,250&bfc=on&qlt=80",
  },
  {
    _id: "689a00000000000000000016",
    brand: "Gucci",
    category: "bag",
    daily_rate: 950,
    product_details: "GG Marmont Small Matelassé Leather shoulder bag black (10 x 6.1 x 2.6 in)",
    size: "S",
    current_status: true,
    image: "https://www.luisaworld.com/cdn/shop/files/262231246_10165.jpg?crop=center&height=3000&v=1780904841&width=2400",
  },
  {
    _id: "689a00000000000000000017",
    brand: "Hermès",
    category: "bag",
    daily_rate: 2000,
    product_details: "Birkin 25 Togo Leather gold hardware etain (9.8 x 7.5 x 5 in)",
    size: "S",
    current_status: true,
    image: "https://www.bijouxmedusa.com/cdn/shop/files/birkin-25-togo-gris-etain-gold-hardware-brand-new-hermes-bijoux-medusa-sacs-a-main-quebec-canada-324_2000x.jpg?v=1754880039",
  },
  {
    _id: "689a00000000000000000018",
    brand: "Valentino",
    category: "clothes",
    daily_rate: 500,
    product_details: "Rockstud Couture Evening Gown silk ivory (US 6)",
    size: "M",
    current_status: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi-YkxIXlRAqJrWIqaJ7H0KuMkjHetgamv7oxMVRZRlw&s=10",
  },
  {
    _id: "689a00000000000000000019",
    brand: "Prada",
    category: "clothes",
    daily_rate: 450,
    product_details: "Re-Nylon Cropped Jacket black (IT 42)",
    size: "S",
    current_status: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsewXyem0ohr3pYf103Q7AGYSCgXWbJcI0Z8rOUd7mYTqPtgTulga4HrU&s=10",
  },
  {
    _id: "689a00000000000000000020",
    brand: "Chanel",
    category: "shoes",
    daily_rate: 600,
    product_details: "Classic Cap-Toe Ballet Flats lambskin black (EU 38)",
    size: "M",
    current_status: true,
    image: "https://u-mercari-images.mercdn.net/photos/m32366753843_1.jpg?width=2560&quality=75&_=1769557344",
  },
  {
    _id: "689a00000000000000000021",
    brand: "Christian Louboutin",
    category: "shoes",
    daily_rate: 700,
    product_details: "So Kate 120mm Patent Pumps nude (EU 39)",
    size: "M",
    current_status: true,
    image: "https://eu.christianlouboutin.com/media/catalog/product/cache/2687d9ba4029f1eb6acb91746b133704/3/1/3130694pk1a-3130694pk1a-main_image-ecommerce-clas_so_kate_120_patent.jpg",
  },
  {
    _id: "689a00000000000000000022",
    brand: "Jimmy Choo",
    category: "shoes",
    daily_rate: 550,
    product_details: "Crystal Embellished Satin Pumps silver (EU 38)",
    size: "M",
    current_status: true,
    image: "https://www.mytheresa.com/image/1094/1238/100/8c/P01115892.jpg",
  },
  {
    _id: "689a00000000000000000023",
    brand: "Cartier",
    category: "accessories",
    daily_rate: 1500,
    product_details: "Love Bracelet 18K Yellow Gold 17mm",
    size: "M",
    current_status: true,
    image: "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwa6a43eb2/images/large/8906b9f795c250f5aaa8000ceea4536d.png?sw=750&sh=750&sm=fit&sfrm=png",
  },
  {
    _id: "689a00000000000000000024",
    brand: "Tiffany & Co.",
    category: "accessories",
    daily_rate: 800,
    product_details: "Return to Tiffany Heart Tag Necklace sterling silver 16in",
    size: "S",
    current_status: true,
    image: "https://media.tiffany.com/is/image/tco/60128534_NL_SIO2X1?hei=2000&wid=2000&fmt=webp",
  },
  {
    _id: "689a00000000000000000025",
    brand: "Bulgari",
    category: "accessories",
    daily_rate: 1200,
    product_details: "Serpenti Viper Ring 18K Rose Gold diamonds 0.47ct",
    size: "S",
    current_status: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMNyk-9KAYFqFLqeubdA8KvnOVtyYo0F42C5kfYBg62UkUxkcz_XG42nQ&s=10",
  },
  {
    _id: "689a00000000000000000026",
    brand: "Saint Laurent",
    category: "clothes",
    daily_rate: 400,
    product_details: "Le Smoking Tuxedo Jacket crepe noir (FR 38)",
    size: "S",
    current_status: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpZU1W0bRMS5e1K0zWjgUuttC7EjbEzdKczRBd7r7nIMjrsBShrHSKAzaa&s=10",
  },
  {
    _id: "689a00000000000000000027",
    brand: "Bottega Veneta",
    category: "bag",
    daily_rate: 850,
    product_details: "Cassette Padded Intrecciato Leather Clutch dark green (10.2 x 5.5 in)",
    size: "S",
    current_status: true,
    image: "https://perrineporter.com/cdn/shop/files/1_99df3ed1-dcb7-4e84-9e34-2131d111afaf.png?v=1732420944",
  },
  {
    _id: "689a00000000000000000028",
    brand: "Rolex",
    category: "accessories",
    daily_rate: 2500,
    product_details: "Datejust 36 Stainless Steel & Yellow Gold Fluted Bezel silver dial (36mm)",
    size: "M",
    current_status: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnljxu3McfMWNEewEojpY9QNcJg4DHyJkUmcSRy-tQBZ2PsNj9Xfiq9K8&s=10",
  },
  {
    _id: "689a00000000000000000029",
    brand: "Balenciaga",
    category: "bag",
    daily_rate: 750,
    product_details: "Le City Satchel Agneau black (15 x 10 x 5.5 in)",
    size: "M",
    current_status: true,
    image: "https://cdn-images.farfetch-contents.com/24/28/87/30/24288730_54317829_1000.jpg",
  },
  {
    _id: "689a00000000000000000030",
    brand: "Manolo Blahnik",
    category: "shoes",
    daily_rate: 500,
    product_details: "Hangisi Jeweled Satin Pumps royal blue crystal buckle (EU 38)",
    size: "M",
    current_status: true,
    image: "https://i.pinimg.com/736x/07/62/31/076231b4266559f735e8bcc7bbfbe5dc.jpg",
  },
];

function filterProducts(search, category, minPriceVal, maxPriceVal) {
  return products.filter(function (p) {
    if (search) {
      var q = search.toLowerCase();
      if (
        !p.brand.toLowerCase().includes(q) &&
        !p.product_details.toLowerCase().includes(q)
      ) {
        return false;
      }
    }
    if (category && p.category !== category) return false;
    if (minPriceVal && p.daily_rate < Number(minPriceVal)) return false;
    if (maxPriceVal && p.daily_rate > Number(maxPriceVal)) return false;
    return true;
  });
}

function renderProducts(list) {
  if (list.length === 0) {
    productsGrid.innerHTML = '<p class="no-results">No products found</p>';
    return;
  }

  productsGrid.innerHTML = list
    .map(function (p) {
      return (
        '<div class="product-card">' +
          '<div class="card-image">' +
            '<img src="' + p.image + '" alt="' + p.brand + ' - ' + p.product_details + '" loading="lazy">' +
          '</div>' +
          '<div class="card-body">' +
            '<div class="brand">' + p.brand + '</div>' +
            '<div class="details">' + p.product_details + '</div>' +
            '<div class="meta">' +
              '<span class="price">\u0E3F' + Number(p.daily_rate).toLocaleString() + '/day</span>' +
              '<span class="category-tag">' + p.category + '</span>' +
              '<span class="size-tag">' + p.size + '</span>' +
            '</div>' +
          '</div>' +
        '</div>'
      );
    })
    .join("");
}

function applyFilters() {
  var search = searchInput.value.trim();
  var category = categoryFilter.value;
  var min = minPrice.value;
  var max = maxPrice.value;
  var filtered = filterProducts(search, category, min, max);
  renderProducts(filtered);
}

searchBtn.addEventListener("click", applyFilters);
filterBtn.addEventListener("click", applyFilters);
searchInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") applyFilters();
});

renderProducts(products);
