interface IFindAllParkingSpotsResponseDTO {
  id: string;
  apartment: string;
  block: string;
  brandCar: string;
  colorCar: string;
  licensePlate: string;
  modelCar: string;
  responsibleName: string;
  isAvailable?: boolean;
  number?: number;
}

export { IFindAllParkingSpotsResponseDTO };
