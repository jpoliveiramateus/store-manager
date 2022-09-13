const { expect } = require("chai");
const sinon = require("sinon");

const { salesModel } = require("../../../src/models");
const { salesService } = require("../../../src/services");

describe("Teste de unidade do salesService", function () {
  afterEach(sinon.restore);

  it("Cadastrando uma nova venda", async function () {
    sinon.stub(salesModel, "insert").resolves(4);

    const response = await salesService.insert();

    expect(response.type).to.equal(null);
    expect(response.message).to.equal(4);
  });

  it("Deletando uma venda por ID", async function () {
    sinon.stub(salesModel, "deleteById").resolves(1);
    await salesService.deleteById(1);
  });
});
