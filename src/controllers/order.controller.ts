import { Request, Response } from "express";
import { OrderModel } from "../models/order.model";
import Pharmacy from "../services/pharmacy.service";

const getAllOrder = async (req: Request, res: Response) => {
  const getPharmacy = new Pharmacy();

  const orders = await getPharmacy?.getAllPharmacyOrder();

  return res.send(orders);
};

const getOrder = async (req: Request, res: Response) => {
  const { pharmacyId } = req.params;
  const pharmacyService = new Pharmacy().getPharmacyService(pharmacyId);

  const orders = await pharmacyService?.getOrder();

  return res.send(orders);
};

const getOrderById = async (req: Request, res: Response) => {
  const { pharmacyId, orderId } = req.params;
  const pharmacyService = new Pharmacy().getPharmacyService(pharmacyId);

  const order = await pharmacyService?.getOrderById(orderId);

  return res.send(order);
};

const createOrder = async (req: Request, res: Response) => {
  const order: OrderModel = req.body;
  const pharmacyService = new Pharmacy().getPharmacyService(order.pharmacyId);

  const newOrder = await pharmacyService?.createOrder(order);

  return res.send(newOrder);
};

export default {
  getAllOrder,
  getOrder,
  getOrderById,
  createOrder,
};
