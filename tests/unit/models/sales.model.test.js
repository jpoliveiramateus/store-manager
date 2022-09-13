const { expect } = require("chai");
const sinon = require("sinon");

const connection = require("../../../src/models/connection");
const { salesModel } = require("../../../src/models");

const { saleById } = require('./mocks/sales.mock');

describe("Teste de unidade do salesModel", function () {
  afterEach(function () {
    sinon.restore();
  });
  
  it("Cadastrando uma nova venda", async function () {
    sinon.stub(connection, "execute").resolves([{ insertId: 2 }]);
    const result = await salesModel.insert();
    expect(result).to.equal(2);
  });

  it("Buscando uma venda por ID", async function () {
    sinon.stub(connection, "execute").resolves([[saleById]]);
    const result = await salesModel.findById(2);
    expect(result).to.deep.equal(saleById);
  });

  it("Deletando uma venda por ID", async function () {
    sinon.stub(connection, "execute").resolves([{ affectedRows: 1 }]);
    const result = await salesModel.deleteById(1);
    expect(result).to.equal(1);
  });
});
