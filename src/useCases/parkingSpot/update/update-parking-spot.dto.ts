interface IUpdateParkingSpotRequestParamDTO {
  id: string;
}

interface IUpdateParkingSpotRequestDTO {
  id: string;
  apartment: string;
  block: string;
  brandCar: string;
  colorCar: string;
  licensePlate: string;
  modelCar: string;
  responsibleName: string;
}

interface IUpdateParkingSpotResponseDTO {
  id: string;
  apartment: string;
  block: string;
  brandCar: string;
  colorCar: string;
  licensePlate: string;
  modelCar: string;
  responsibleName: string;
}

export {
  IUpdateParkingSpotResponseDTO,
  IUpdateParkingSpotRequestParamDTO,
  IUpdateParkingSpotRequestDTO,
};
