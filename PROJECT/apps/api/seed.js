require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./models/Product");

const MONGODB_URI = process.env.MONGODB_URI;

const products = [
  {
    _id: new mongoose.Types.ObjectId("689a00000000000000000011"),
    brand: "Chanel",
    category: "bag",
    daily_rate: "1300.00",
    product_details: "Classic 11.12 Lambskin black (6.1 x 10 x 2.6 in)",
    size: "S",
    current_status: true,
  },
  {
    _id: new mongoose.Types.ObjectId("689a00000000000000000012"),
    brand: "Chanel",
    category: "bag",
    daily_rate: "1400.00",
    product_details: "Chanel 25 Small Handbag Grained Calfskin & Gold-Tone Metal black (11.8 x 10.2 x 5.5in)",
    size: "S",
    current_status: true,
  },
  {
    _id: new mongoose.Types.ObjectId("689a00000000000000000013"),
    brand: "Fabrique.co",
    category: "clothes",
    daily_rate: "300.00",
    product_details: "Elveria Dress Rose Bloom Collection",
    size: "M",
    current_status: true,
  },
  {
    _id: new mongoose.Types.ObjectId("689a00000000000000000014"),
    brand: "Louis Vuitton",
    category: "bag",
    daily_rate: "1100.00",
    product_details: "Neverfull MM Monogram Canvas brown (12.2 x 11.4 x 6.7 in)",
    size: "M",
    current_status: true,
  },
  {
    _id: new mongoose.Types.ObjectId("689a00000000000000000015"),
    brand: "Dior",
    category: "bag",
    daily_rate: "1200.00",
    product_details: "Lady Dior Medium Cannage Lambskin black (9.5 x 7.9 x 4.3 in)",
    size: "M",
    current_status: true,
  },
  {
    _id: new mongoose.Types.ObjectId("689a00000000000000000016"),
    brand: "Gucci",
    category: "bag",
    daily_rate: "950.00",
    product_details: "GG Marmont Small Matelassé Leather shoulder bag red (10 x 6.1 x 2.6 in)",
    size: "S",
    current_status: true,
  },
  {
    _id: new mongoose.Types.ObjectId("689a00000000000000000017"),
    brand: "Hermès",
    category: "bag",
    daily_rate: "2000.00",
    product_details: "Birkin 25 Togo Leather gold hardware etain (9.8 x 7.5 x 5 in)",
    size: "S",
    current_status: true,
  },
  {
    _id: new mongoose.Types.ObjectId("689a00000000000000000018"),
    brand: "Valentino",
    category: "clothes",
    daily_rate: "500.00",
    product_details: "Rockstud Couture Evening Gown silk ivory (US 6)",
    size: "M",
    current_status: true,
  },
  {
    _id: new mongoose.Types.ObjectId("689a00000000000000000019"),
    brand: "Prada",
    category: "clothes",
    daily_rate: "450.00",
    product_details: "Re-Nylon Cropped Jacket black (IT 42)",
    size: "S",
    current_status: true,
  },
  {
    _id: new mongoose.Types.ObjectId("689a00000000000000000020"),
    brand: "Chanel",
    category: "shoes",
    daily_rate: "600.00",
    product_details: "Classic Cap-Toe Ballet Flats lambskin black (EU 38)",
    size: "M",
    current_status: true,
  },
  {
    _id: new mongoose.Types.ObjectId("689a00000000000000000021"),
    brand: "Christian Louboutin",
    category: "shoes",
    daily_rate: "700.00",
    product_details: "So Kate 120mm Patent Pumps nude (EU 39)",
    size: "M",
    current_status: true,
  },
  {
    _id: new mongoose.Types.ObjectId("689a00000000000000000022"),
    brand: "Jimmy Choo",
    category: "shoes",
    daily_rate: "550.00",
    product_details: "Crystal Embellished Satin Pumps silver (EU 38)",
    size: "M",
    current_status: true,
  },
  {
    _id: new mongoose.Types.ObjectId("689a00000000000000000023"),
    brand: "Cartier",
    category: "accessories",
    daily_rate: "1500.00",
    product_details: "Love Bracelet 18K Yellow Gold 17mm",
    size: "M",
    current_status: true,
  },
  {
    _id: new mongoose.Types.ObjectId("689a00000000000000000024"),
    brand: "Tiffany & Co.",
    category: "accessories",
    daily_rate: "800.00",
    product_details: "Return to Tiffany Heart Tag Necklace sterling silver 16in",
    size: "S",
    current_status: true,
  },
  {
    _id: new mongoose.Types.ObjectId("689a00000000000000000025"),
    brand: "Bulgari",
    category: "accessories",
    daily_rate: "1200.00",
    product_details: "Serpenti Viper Ring 18K Rose Gold diamonds 0.47ct",
    size: "S",
    current_status: true,
  },
  {
    _id: new mongoose.Types.ObjectId("689a00000000000000000026"),
    brand: "Saint Laurent",
    category: "clothes",
    daily_rate: "400.00",
    product_details: "Le Smoking Tuxedo Jacket crepe noir (FR 38)",
    size: "S",
    current_status: true,
  },
  {
    _id: new mongoose.Types.ObjectId("689a00000000000000000027"),
    brand: "Bottega Veneta",
    category: "bag",
    daily_rate: "850.00",
    product_details: "Cassette Padded Intrecciato Leather Clutch dark green (10.2 x 5.5 in)",
    size: "S",
    current_status: true,
  },
  {
    _id: new mongoose.Types.ObjectId("689a00000000000000000028"),
    brand: "Rolex",
    category: "accessories",
    daily_rate: "2500.00",
    product_details: "Datejust 36 Stainless Steel & Yellow Gold Fluted Bezel silver dial (36mm)",
    size: "M",
    current_status: true,
  },
  {
    _id: new mongoose.Types.ObjectId("689a00000000000000000029"),
    brand: "Balenciaga",
    category: "bag",
    daily_rate: "750.00",
    product_details: "Le City Satchel Agneau black (15 x 10 x 5.5 in)",
    size: "M",
    current_status: true,
  },
  {
    _id: new mongoose.Types.ObjectId("689a00000000000000000030"),
    brand: "Manolo Blahnik",
    category: "shoes",
    daily_rate: "500.00",
    product_details: "Hangisi Jeweled Satin Pumps royal blue crystal buckle (EU 38)",
    size: "M",
    current_status: true,
  },
];

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");

    await Product.deleteMany({});
    console.log("Cleared existing products");

    await Product.insertMany(products);
    console.log(`Seeded ${products.length} products`);

    await mongoose.disconnect();
    console.log("Done");
  } catch (err) {
    console.error("Seed error:", err);
    process.exit(1);
  }
}

seed();
