const { expect } = require("chai");
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const { salesProductsModel } = require("../../../src/models");

const { salesProducts, saleById, itemSold, putSale } = require("../services/mocks/sales.products.mock");

describe("Teste de unidade do salesProductsModel", function () {
  afterEach(sinon.restore);
  
  it("Cadastrando uma nova venda de produtos", async function () {
    sinon.stub(connection, "execute").resolves([{ affectedRows: 1 }]);
    const result = await salesProductsModel.insert(2, itemSold);
    expect(result).to.equal(1);
  });

  it("Buscando todas as vendas de produtos", async function () {
    sinon.stub(connection, "execute").resolves([salesProducts]);

    const result = await salesProductsModel.findAll();
    expect(result).to.deep.equal(salesProducts);
  });

  it("Buscando uma venda por ID", async function () {
    sinon.stub(connection, "execute").resolves([saleById]);

    const result = await salesProductsModel.findById(3);

    expect(result).to.deep.equal(saleById);
  });

  it("Atualizando uma venda por ID", async function () {
    sinon.stub(connection, "execute").resolves([{ affectedRows: 1 }]);
    const result = await salesProductsModel.updateById(2, putSale[0]);
    expect(result).to.equal(1);
  });
});