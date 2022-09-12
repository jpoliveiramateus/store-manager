const { expect } = require("chai");
const sinon = require("sinon");

const connection = require("../../../src/models/connection");
const { productsModel } = require("../../../src/models");
const { productsList, productById } = require("../controllers/mocks/products.mock");

describe("Teste de unidade do productsModel", function () {
  afterEach(sinon.restore);

  it("Recuperando a lista com todos os produtos", async function () {
    sinon.stub(connection, "execute").resolves([productsList]);

    const result = await productsModel.findAll();

    expect(result).to.deep.equal(productsList);
  });

  it("Recuperando um produto por ID", async function () {
    sinon.stub(connection, "execute").resolves([[productById]]);

    const result = await productsModel.findById(2);

    expect(result).to.deep.equal(productById);
  });

  it("Cadastrando um novo produto", async function () {
    sinon.stub(connection, "execute").resolves([{ insertId: 4 }]);
    const result = await productsModel.insert("Iphone");
    expect(result).to.equal(4);
  });
});
