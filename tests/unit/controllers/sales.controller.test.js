const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const { expect } = chai;
chai.use(sinonChai);

const { salesController } = require('../../../src/controllers');
const { salesService, salesProductsService } = require('../../../src/services');
const { postSale } = require("./mocks/sales.mock");

describe("Teste de unidade do salesController", function () {
  it("Buscando todos os produtos", async function () {
    const res = {};
    const req = { body: postSale };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesService, "insert").resolves({ type: null, message: 2 });
    sinon.stub(salesProductsService, 'insert').resolves();

    await salesController.insert(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith({ id: 2, itemsSold: req.body });
  });
});
