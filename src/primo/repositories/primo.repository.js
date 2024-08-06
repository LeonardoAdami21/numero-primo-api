import { prismaConfig } from "../../config/prisma.config.js";

const create = async (data) => {
  return await prismaConfig.nmeroPrimo.create({
    data,
  });
};

const findAll = async () => {
  return await prismaConfig.nmeroPrimo.findMany();
};

export const primoRepository = {
  create,
  findAll,
};
