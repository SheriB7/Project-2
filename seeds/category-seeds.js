const { Category } = require("../models");

const categoryData = [
  {
    category_name: "Bouquets",
  },
  {
    category_name: "Arrangements",
  },
  {
    category_name: "Boxes",
  },
  {
    category_name: "Extras",
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
