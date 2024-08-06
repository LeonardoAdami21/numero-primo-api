import prisma from "../../config/prisma.config.js";

const create = async (numero, resultado) => {
  return await prisma.nmeroPrimo.create({
    data: {
      numero,
      resultado,
    },
  });
};

const findAll = async () => {
  return await prismaDB.nmeroPrimo.findMany();
};

export const primoRepository = {
  create,
  findAll,
};
