import { describe, expect, it } from "@jest/globals";
import { primoController } from "./primo.controller.js";

describe("Primo Controller", () => {
  beforeEach(() => {
    let primoController = primoController;
  });
  it("should be defined", () => {
    expect(primoController).toBeDefined();
  });
  it("should return a prime number", async () => {
    const req = {
      body: {
        numero: 2,
      },
    };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };
    await primoController.findAll(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      numero: 2,
      resultado: [2],
    });
  });
  it("shoould return another prime number", async () => {
    const req = {
      body: {
        numero: 3,
      },
    };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };
    await primoController.findAll(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      numero: 3,
      resultado: [3],
    });
  });
  it("should return a square of a prime", async () => {
    const req = {
      body: {
        numero: 9,
      },
    };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };
    await primoController.findAll(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      numero: 9,
      resultado: [3, 3],
    });
  });
  it("should return an cube of a prime", async () => {
    const req = {
      body: {
        numero: 8,
      },
    };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };
    await primoController.findAll(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      numero: 8,
      resultado: [2, 2, 2],
    });
  });
  it("should return a second cube of prime", async () => {
    const req = {
      body: {
        numero: 27,
      },
    };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };
    await primoController.findAll(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      numero: 27,
      resultado: [3, 3, 3],
    });
  });
  it("should return a product of third prime", async () => {
    const req = {
      body: {
        numero: 625,
      },
    };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };
    await primoController.findAll(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      numero: 625,
      resultado: [5, 5, 5, 5],
    });
  });
  it("should return a product of first prime and second prime", async () => {
    const req = {
      body: {
        numero: 6,
      },
    };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };
    await primoController.findAll(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      numero: 6,
      resultado: [2, 3],
    });
  });
  it("should return a product of primes and non-primes", async () => {
    const req = {
      body: {
        numero: 12,
      },
    };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };
    await primoController.findAll(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      numero: 12,
      resultado: [2, 2, 3],
    });
  });
  it("should return a product of primes", async () => {
    const req = {
      body: {
        numero: 901255,
      },
    };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };
    await primoController.findAll(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      numero: 901255,
      resultado: [5, 17, 23, 461],
    });
  });
  it("should return a factors include a large prime", async () => {
    const req = {
      body: {
        numero: 93819012551,
      },
    };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };
    await primoController.findAll(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      numero: 93819012551,
      resultado: [11, 9539, 894119],
    });
  });
});
