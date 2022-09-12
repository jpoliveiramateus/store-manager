const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const { expect } = chai;
chai.use(sinonChai);

const { salesProductsController } = require('../../../src/controllers');
const { salesService, salesProductsService } = require('../../../src/services');
const { postSale } = require("./mocks/sales.mock");
const { salesProducts, saleById } = require('../services/mocks/sales.products.mock');

describe("Teste de unidade do salesProductsController", function () {
  afterEach(sinon.restore);

  it("Cadastrando uma nova venda de produtos", async function () {
    const res = {};
    const req = { body: postSale };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesService, "insert").resolves({ type: null, message: 2 });
    sinon.stub(salesProductsService, "insert").resolves();

    await salesProductsController.insert(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith({ id: 2, itemsSold: req.body });
  });

  it("Buscando todas as vendas de produtos", async function () {
    const res = {};
    const req = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesProductsService, "findAll").resolves({ type: null, message: salesProducts });
  
    await salesProductsController.findAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(salesProducts);
  });

  it("Buscando uma venda por ID com sucesso", async function () {
    const res = {};
    const req = { params: { id: 2 } };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
      .stub(salesProductsService, "findById")
      .resolves({ type: null, message: saleById });

    await salesProductsController.findById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(saleById);
  });

  it("Buscando uma venda com ID inválido", async function () {
    const res = {};
    const req = { params: { id: 999 } };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesProductsService, "findById")
      .resolves({ type: 'NOT_FOUND', message: 'Sale not found' });

    await salesProductsController.findById(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Sale not found' });
  });

  it("Deletando uma venda por ID", async function () {
    const res = {};
    const req = { params: { id: 2 } };
    res.sendStatus = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesService, "deleteById").resolves();

    await salesProductsController.deleteById(req, res);

    expect(res.sendStatus).to.have.been.calledWith(204);
  });
});
