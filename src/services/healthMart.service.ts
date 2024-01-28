import axios, { AxiosResponse } from "axios";
import { OrderModel } from "../models/order.model";
import { BasePharmacy } from "../models/basePharmacy.model";

export default class HealthMartPharmacy extends BasePharmacy {
  getOrder = async (): Promise<OrderModel[]> => {
    const result: AxiosResponse = await axios.get(
      `${process.env.PHARMACY_MOCK_URL}/healthmart/orders`
    );

    return result.data.map((v: any) => this.toOrder(v));
  };

  getOrderById = async (orderId: string): Promise<OrderModel> => {
    const result: AxiosResponse = await axios.get(
      `${process.env.PHARMACY_MOCK_URL}/healthmart/orders/${orderId}`
    );

    return this.toOrder(result.data);
  };

  createOrder = async (order: OrderModel): Promise<OrderModel> => {
    const result: AxiosResponse = await axios.post(
      `${process.env.PHARMACY_MOCK_URL}/healthmart/orders`,
      this.toPayload(order)
    );

    return this.toOrder(result.data);
  };

  toOrder = (data: any): OrderModel => {
    return {
      pharmacyId: "healthmart",
      orderId: data["healthMartId"],
      product: data["healthMartProduct"],
      quantity: data["healthMartQuantity"],
      customerInfo: data["healthMartCustomerInfo"]
        ? {
            custName: data["healthMartCustomerInfo"]["healthMartCustName"],
            custAddress:
              data["healthMartCustomerInfo"]["healthMartCustAddress"],
            custCity: data["healthMartCustomerInfo"]["healthMartCustCity"],
            custState: data["healthMartCustomerInfo"]["healthMartCustState"],
            custZipcode:
              data["healthMartCustomerInfo"]["healthMartCustZipcode"],
            custCountry:
              data["healthMartCustomerInfo"]["healthMartCustCountry"],
          }
        : {},
    };
  };

  toPayload = (order: OrderModel): any => {
    return {
      healthMartProduct: order.product,
      healthMartQuantity: order.quantity,
      healthMartCustomerInfo: {
        healthMartCustName: order.customerInfo.custName,
        healthMartCustAddress: order.customerInfo.custAddress,
        healthMartCustCity: order.customerInfo.custCity,
        healthMartCustState: order.customerInfo.custState,
        healthMartCustZipcode: order.customerInfo.custZipcode,
        healthMartCustCountry: order.customerInfo.custCountry,
      },
    };
  };
}
