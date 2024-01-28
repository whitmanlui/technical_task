import axios, { AxiosResponse } from "axios";
import { OrderModel } from "../models/order.model";
import { BasePharmacy } from "../models/basePharmacy.model";

export default class QuickCarePharmacy extends BasePharmacy {
  getOrder = async (): Promise<OrderModel[]> => {
    const result: AxiosResponse = await axios.get(
      `${process.env.PHARMACY_MOCK_URL}/quickcare/orders`
    );

    return result.data.map((v: any) => this.toOrder(v));
  };

  getOrderById = async (orderId: string): Promise<OrderModel> => {
    const result: AxiosResponse = await axios.get(
      `${process.env.PHARMACY_MOCK_URL}/quickcare/orders/${orderId}`
    );

    return this.toOrder(result.data);
  };

  createOrder = async (order: OrderModel): Promise<OrderModel> => {
    const result: AxiosResponse = await axios.post(
      `${process.env.PHARMACY_MOCK_URL}/quickcare/orders`,
      this.toPayload(order)
    );

    return this.toOrder(result.data);
  };

  toOrder = (data: any): OrderModel => {
    return {
      pharmacyId: "quickcare",
      orderId: data["quickCareId"],
      product: data["quickCareProduct"],
      quantity: data["quickCareQuantity"],
      customerInfo: data["quickCareCustomerInfo"]
        ? {
            custName: data["quickCareCustomerInfo"]["quickCareCustName"],
            custAddress: data["quickCareCustomerInfo"]["quickCareCustAddress"],
            custCity: data["quickCareCustomerInfo"]["quickCareCustCity"],
            custState: data["quickCareCustomerInfo"]["quickCareCustState"],
            custZipcode: data["quickCareCustomerInfo"]["quickCareCustZipcode"],
            custCountry: data["quickCareCustomerInfo"]["quickCareCustCountry"],
          }
        : {},
    };
  };

  toPayload = (order: OrderModel): any => {
    return {
      quickCareProduct: order.product,
      quickCareQuantity: order.quantity,
      quickCareCustomerInfo: {
        quickCareCustName: order.customerInfo.custName,
        quickCareCustAddress: order.customerInfo.custAddress,
        quickCareCustCity: order.customerInfo.custCity,
        quickCareCustState: order.customerInfo.custState,
        quickCareCustZipcode: order.customerInfo.custZipcode,
        quickCareCustCountry: order.customerInfo.custCountry,
      },
    };
  };
}
