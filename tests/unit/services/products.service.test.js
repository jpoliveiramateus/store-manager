const { expect } = require("chai");
const sinon = require("sinon");

const { productsModel } = require("../../../src/models");
const { productsService } = require("../../../src/services");

const { productsList, productById } = require('../controllers/mocks/products.mock');

describe("Teste de unidade do productsService", function () {
  afterEach(sinon.restore);

  it("Buscando todos os produtos", async function () {
    sinon.stub(productsModel, "findAll").resolves(productsList);

    const response = await productsService.findAll();

    expect(response.type).to.equal(null);
    expect(response.message).to.equal(productsList);
  });

  it("Buscando um produto por ID com sucesso", async function () {
    sinon.stub(productsModel, "findById").resolves(productById);

    const response = await productsService.findById(2);

    expect(response.type).to.equal(null);
    expect(response.message).to.equal(productById);
  });

  it("Buscando um produto com ID inválido", async function () {
    sinon.stub(productsModel, "findById").resolves(undefined);

    const response = await productsService.findById(999);

    expect(response.type).to.equal("NOT_FOUND");
    expect(response.message).to.equal("Product not found");
  });
});
