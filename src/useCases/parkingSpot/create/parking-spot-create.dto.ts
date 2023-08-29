interface ParkingSpotProps {
  number: number;
  isParkingSpotAvailable: boolean;
}

interface ICreateParkintSpotRequestDTO {
  apartment: string;
  block: string;
  brandCar: string;
  colorCar: string;
  licensePlate: string;
  modelCar: string;
  responsibleName: string;
}

interface ICreateParkintSpotResponseDTO {
  id: string;
  apartment: string;
  block: string;
  brandCar: string;
  colorCar: string;
  licensePlate: string;
  modelCar: string;
  responsibleName: string;
}

export { ICreateParkintSpotRequestDTO, ICreateParkintSpotResponseDTO };
