import { ICarPark } from "../interfaces/ICarPark";
import { CarParkCategory } from "../enums/CarParkCategory";

export class CarPark implements ICarPark {
  totalLots: number;
  availableLots: number;
  carParkCategory: CarParkCategory;
  carParkNumber: string;

  constructor(
    totalLots: number,
    availableLots: number,
    carParkCategory: CarParkCategory,
    carParkNumber: string
  ) {
    this.totalLots = totalLots;
    this.availableLots = availableLots;
    this.carParkCategory = carParkCategory;
    this.carParkNumber = carParkNumber;
  }

  getTotalLots() {
    return this.totalLots;
  }

  getAvailableLots() {
    return this.availableLots;
  }

  getCarParkCategory() {
    return this.carParkCategory;
  }

  getCarParkNumber() {
    return this.carParkNumber;
  }

  toJSON() {
    return {
      total_lot: this.totalLots,
      lots_available: this.availableLots,
      car_park_category: this.carParkCategory,
      car_park_number: this.carParkNumber,
    };
  }

  toString() {
    return JSON.stringify(this.toJSON());
  }
}