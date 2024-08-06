import { prismaConfig } from "../../config/prisma.config.js";

const create = async (numero, resultado) => {
  return await prismaConfig.nmeroPrimo.create({
    data: {
      numero,
      resultado
    },
  });
};

const findAll = async () => {
  return await prismaConfig.nmeroPrimo.findMany();
};

export const primoRepository = {
  create,
  findAll,
};
