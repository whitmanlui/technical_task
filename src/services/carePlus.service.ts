import axios, { AxiosResponse } from "axios";
import { OrderModel } from "../models/order.model";
import { BasePharmacy } from "../models/basePharmacy.model";

export default class CarePlusPharmacy extends BasePharmacy {
  getOrder = async (): Promise<OrderModel[]> => {
    const result: AxiosResponse = await axios.get(
      `${process.env.PHARMACY_MOCK_URL}/careplus/orders`
    );

    return result.data.map((v: any) => this.toOrder(v));
  };

  getOrderById = async (orderId: string): Promise<OrderModel> => {
    const result: AxiosResponse = await axios.get(
      `${process.env.PHARMACY_MOCK_URL}/careplus/orders/${orderId}`
    );

    return this.toOrder(result.data);
  };

  createOrder = async (order: OrderModel): Promise<OrderModel> => {
    const result: AxiosResponse = await axios.post(
      `${process.env.PHARMACY_MOCK_URL}/careplus/orders`,
      this.toPayload(order)
    );

    return this.toOrder(result.data);
  };

  toOrder = (data: any): OrderModel => {
    return {
      pharmacyId: "careplus",
      orderId: data["carePlusId"],
      product: data["carePlusProduct"],
      quantity: data["carePlusQuantity"],
      customerInfo: data["carePlusCustomerInfo"]
        ? {
            custName: data["carePlusCustomerInfo"]["carePlusCustName"],
            custAddress: data["carePlusCustomerInfo"]["carePlusCustAddress"],
            custCity: data["carePlusCustomerInfo"]["carePlusCustCity"],
            custState: data["carePlusCustomerInfo"]["carePlusCustState"],
            custZipcode: data["carePlusCustomerInfo"]["carePlusCustZipcode"],
            custCountry: data["carePlusCustomerInfo"]["carePlusCustCountry"],
          }
        : {},
    };
  };

  toPayload = (order: OrderModel): any => {
    return {
      carePlusProduct: order.product,
      carePlusQuantity: order.quantity,
      carePlusCustomerInfo: {
        carePlusCustName: order.customerInfo.custName,
        carePlusCustAddress: order.customerInfo.custAddress,
        carePlusCustCity: order.customerInfo.custCity,
        carePlusCustState: order.customerInfo.custState,
        carePlusCustZipcode: order.customerInfo.custZipcode,
        carePlusCustCountry: order.customerInfo.custCountry,
      },
    };
  };
}
