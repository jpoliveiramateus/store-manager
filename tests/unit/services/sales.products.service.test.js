const sinon = require("sinon");

const { salesProductsModel } = require("../../../src/models");
const { salesProductsService } = require("../../../src/services");

describe("Teste de unidade do salesProductsService", function () {
  afterEach(sinon.restore);

  it("Cadastrando uma nova venda de produto", async function () {
    sinon.stub(salesProductsModel, "insert").resolves();
    await salesProductsService.insert(2, [{ productId: 3, quantity: 1 }]);
  });
});
