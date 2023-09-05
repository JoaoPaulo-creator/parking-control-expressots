import { Spot } from '@entities/spot.entity';

interface SpotProps {
  id: string;
  isAvailable?: boolean;
  number?: number;
}

interface ICreateParkintSpotRequestDTO {
  apartment: string;
  block: string;
  brandCar: string;
  colorCar: string;
  licensePlate: string;
  modelCar: string;
  responsibleName: string;
  spot: SpotProps;
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
  spot?: Spot;
}

export { ICreateParkintSpotRequestDTO, ICreateParkintSpotResponseDTO };
