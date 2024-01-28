import { CustomerModel } from "./customer.model";

export type OrderModel = {
  pharmacyId: string;
  orderId?: string;
  product: string;
  quantity: number;
  customerInfo: CustomerModel;
};
