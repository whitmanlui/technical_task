import axios, { AxiosResponse } from "axios";
import _ from "lodash";
import { BasePharmacy } from "../models/basePharmacy.model";
import HealthMartPharmacy from "./healthMart.service";
import { OrderModel } from "../models/order.model";
import { PharmacyModel } from "../models/pharmacy.model";
import CarePlusPharmacy from "./carePlus.service";

export default class Pharmacy {
  constructor() {}

  getAvailablePharmacies = async (): Promise<PharmacyModel[]> => {
    const result: AxiosResponse = await axios.get(
      `${process.env.PHARMACY_MOCK_URL}/pharmacy`
    );

    return result.data;
  };

  getPharmacyService(pharmacyId: string): BasePharmacy | null {
    switch (pharmacyId) {
      case "healthmart":
        return new HealthMartPharmacy();
      case "careplus":
        return new CarePlusPharmacy();
      default:
        return null;
    }
  }

  isPharmacyExist = async (pharmacyId: string) => {
    const availablePharmacies: PharmacyModel[] =
      await this.getAvailablePharmacies();

    return !_.isEmpty(
      availablePharmacies.find(
        (e: PharmacyModel) => e.integrationName === pharmacyId
      )
    );
  };

  getAllPharmacyOrder = async (): Promise<OrderModel[]> => {
    const availablePharmacies: PharmacyModel[] =
      await this.getAvailablePharmacies();

    const results = availablePharmacies
      .map((v) => this.getPharmacyService(v.integrationName))
      .map((v) => v?.getOrder())
      .filter((v) => v != null);

    const allResult = await Promise.all(results);
    const result: OrderModel[] = _.flatten(allResult).filter(
      (item): item is OrderModel => item !== undefined
    );

    return result;
  };
}
