import { primoRepository } from "./repositories/primo.repository.js";

const createPrimaFactors = async (numero) => {
  try {
    let resultado = [];
    let div = 2;
    while (div <= numero) {
      if (numero % div === 0) {
        numero = numero / div;
        resultado.push(div);
      } else {
        div++;
      }
    }
    await primoRepository.create(numero, resultado);
    return resultado;
  } catch (error) {
    throw new Error({ message: error.message });
  }
};

export const primoService = {
  createPrimaFactors,
};
