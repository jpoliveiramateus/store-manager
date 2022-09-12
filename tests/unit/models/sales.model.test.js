const { expect } = require("chai");
const sinon = require("sinon");

const connection = require("../../../src/models/connection");
const { salesModel } = require("../../../src/models");

describe("Teste de unidade do salesModel", function () {
  afterEach(function () {
    sinon.restore();
  });
  
  it("Cadastrando uma nova venda", async function () {
    sinon.stub(connection, "execute").resolves([{ insertId: 2 }]);
    const result = await salesModel.insert();
    expect(result).to.equal(2);
  });
});
