import { Request, Response } from "express";
import Pharmacy from "../services/pharmacy.service";

const getPharmacies = async (req: Request, res: Response) => {
  const pharmacy = new Pharmacy();

  const availablePharmacies = await pharmacy.getAvailablePharmacies();

  return res.send(availablePharmacies);
};

export default {
  getPharmacies,
};
