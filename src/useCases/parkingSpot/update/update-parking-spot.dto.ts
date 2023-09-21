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
  spot: SpotProps;
}

interface SpotProps {
  id: string;
  isAvailable?: boolean;
  number?: number;
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
  spot: SpotProps;
}

export {
  IUpdateParkingSpotResponseDTO,
  IUpdateParkingSpotRequestParamDTO,
  IUpdateParkingSpotRequestDTO,
};
