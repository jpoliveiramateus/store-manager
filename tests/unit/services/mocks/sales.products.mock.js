const salesProducts = [
  {
    saleId: 1,
    date: "2022-09-12T18:03:01.000Z",
    productId: 1,
    quantity: 5,
  },
  {
    saleId: 1,
    date: "2022-09-12T18:03:01.000Z",
    productId: 2,
    quantity: 10,
  },
];

const itemsSold = [
  {
    productId: 3,
    quantity: 4,
  },
  {
    productId: 3,
    quantity: 1,
  },
];

const itemSold = {
  productId: 3,
  quantity: 4,
};

const saleById = [
  {
    date: "2022-09-12T18:03:01.000Z",
    productId: 3,
    quantity: 15,
  },
];

const putSale = [
  {
    productId: 1,
    quantity: 10,
  },
  {
    productId: 2,
    quantity: 50,
  },
];

module.exports = {
  salesProducts,
  itemsSold,
  itemSold,
  saleById,
  putSale,
};