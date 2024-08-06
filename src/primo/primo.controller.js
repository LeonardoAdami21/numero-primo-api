import { primoService } from "./primo.service.js";

const findAll = async (req, res) => {
  const numero = parseInt(req.params.numero);
  if (isNaN(numero) || numero <= 0) {
    return res.status(400).json({ message: "Número inválido" });
  }
  try {
    const resultado = await primoService.createPrimaFactors(numero);
    return res.status(200).json({
      numero,
      resultado,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const primoController = {
  findAll,
};
