const { expect } = require("chai");
const sinon = require("sinon");

const { salesProductsModel } = require("../../../src/models");
const { salesProductsService } = require("../../../src/services");
const { itemsSold, salesProducts, saleById } = require("./mocks/sales.products.mock");

describe("Teste de unidade do salesProductsService", function () {
  afterEach(sinon.restore);

  it("Cadastrando uma nova venda de produtos", async function () {
    sinon.stub(salesProductsModel, "insert").resolves();
    await salesProductsService.insert(2, itemsSold);
  });

  it("Buscando todas as vendas de produtos", async function () {
    sinon.stub(salesProductsModel, "findAll").resolves(salesProducts);

    const response = await salesProductsService.findAll();

    expect(response.type).to.equal(null);
    expect(response.message).to.deep.equal(salesProducts);
  });

  it("Buscando uma venda por ID com sucesso", async function () {
    sinon.stub(salesProductsModel, "findById").resolves(saleById);

    const response = await salesProductsService.findById(3);

    expect(response.type).to.equal(null);
    expect(response.message).to.deep.equal(saleById);
  });

  it("Buscando uma venda com ID inválido", async function () {
    sinon.stub(salesProductsModel, "findById").resolves([]);

    const response = await salesProductsService.findById(999);

    expect(response.type).equal("NOT_FOUND");
    expect(response.message).to.equal("Sale not found");
  });
});
