import { primoService } from "./primo.service.js";
import { describe, expect, it } from "@jest/globals";

describe("PrimoService", () => {
  beforeEach(() => {
    let primoService = primoService;
  });
  it("should be defined", () => {
    expect(primoService).toBeDefined();
  });
  it("should return a prime number", async () => {
    const numero = 2;
    const result = await primoService.createPrimaFactors(numero);
    expect(result).toEqual([2]);
  });
  it("shoould return another prime number", async () => {
    const numero = 3;
    const result = await primoService.createPrimaFactors(numero);
    expect(result).toEqual([3]);
  });
  it("should return a square of a prime", async () => {
    const numero = 9;
    const result = await primoService.createPrimaFactors(numero);
    expect(result).toEqual([3, 3]);
  });
  it("should return an cube of a prime", async () => {
    const numero = 8;
    const result = await primoService.createPrimaFactors(numero);
    expect(result).toEqual([2, 2, 2]);
  });
  it("should return a second cube of prime", async () => {
    const numero = 27;
    const result = await primoService.createPrimaFactors(numero);
    expect(result).toEqual([3, 3, 3]);
  });
  it("should return a product of third prime", async () => {
    const numero = 625;
    const result = await primoService.createPrimaFactors(numero);
    expect(result).toEqual([5, 5, 5, 5]);
  });
  it("should return a product of first prime and second prime", async() => {
    const numero = 6;
    const result = await primoService.createPrimaFactors(numero);
    expect(result).toEqual([2, 3]);
  });
  it("should return a product of primes and non-primes", async() => {
    const numero = 12;
    const result = await primoService.createPrimaFactors(numero);
    expect(result).toEqual([2, 2, 3]);
  });
  it("should return a product of primes", async() => {
    const numero = 901255;
    const result = await primoService.createPrimaFactors(numero);
    expect(result).toEqual([5, 17, 23, 461]);
  });
  it("should return a factors include a large prime", async() => {
    const numero = 93819012551;
    const result = await primoService.createPrimaFactors(numero);
    expect(result).toEqual([11, 9539, 894119]);
  });
});

