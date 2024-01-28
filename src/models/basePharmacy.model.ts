import { OrderModel } from "./order.model";

export abstract class BasePharmacy {
  constructor() {}

  abstract getOrder(): Promise<OrderModel[]>;

  abstract getOrderById(orderId: string): Promise<OrderModel>;

  abstract createOrder(order: OrderModel): Promise<OrderModel>;
}
