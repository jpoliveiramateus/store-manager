const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const { expect } = chai;
chai.use(sinonChai);

const { productsService } = require("../../../src/services");
const { productsController } = require("../../../src/controllers");
const { productsList, productById, newProduct } = require('./mocks/products.mock');

describe("Teste de unidade do productsController", function () {
  afterEach(sinon.restore);
  
  it("Buscando todos os produtos", async function () {
    const res = {};
    const req = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, "findAll").resolves({
      type: null,
      message: productsList,
    });
    
    await productsController.findAll(req, res);

    expect(res.status).to.have.been.calledWith(200);

    expect(res.json).to.have.been.calledWith(productsList);
  });

  it("Buscando um produto por ID com sucesso", async function () {
    const res = {};
    const req = { params: { id: 2 } };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, "findById").resolves({
      type: null,
      message: productById,
    });

    await productsController.findById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productById);
  });

  it("Buscando um produto com ID inválido", async function () {
    const res = {};
    const req = { params: { id: 9999 } };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
      .stub(productsService, "findById")
      .resolves({ type: "NOT_FOUND", message: "Product not found" });

    await productsController.findById(req, res);

    expect(res.status).to.have.been.calledWith(404);

    expect(res.json).to.have.been.calledWith({
      message: "Product not found",
    });
  });

  it("Cadastrando um novo produto", async function () {
    const res = {};
    const req = { body: { name: 'Iphone 14' } };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, "insert").resolves({ type: null, message: 4 });
    sinon.stub(productsService, "findById").resolves({ type: null, message: newProduct });

    await productsController.insert(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(newProduct);
  });

  it("Atualizando um produto por ID", async function () {
    const res = {};
    const req = { params: { id: 12 }, body: { name: "Iphone 14" } };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, "updateById").resolves();
    sinon.stub(productsService, "findById").resolves({ type: null, message: newProduct });

    await productsController.updateById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(newProduct);
  });

  it("Deletando um produto por ID", async function () {
    const res = {};
    const req = { params: { id: 12 } };
    res.sendStatus = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, "deleteById").resolves();
    await productsController.deleteById(req, res);

    expect(res.sendStatus).to.have.been.calledWith(204);
  });

  it("Buscando um produto por nome", async function () {
    const res = {};
    const req = { query: { q: 'Martelo' } };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, "findAll").resolves({
      type: null,
      message: productsList,
    });
    
    await productsController.findByName(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith([{ id: 1, name: "Martelo de Thor" }]);
  });
});
