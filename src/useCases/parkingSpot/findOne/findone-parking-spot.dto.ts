interface IFindOneParkingSpotRequestDTO {
  id: string;
}

interface IFindOneParkingSpotResponseDTO {
  id: string;
  apartment: string;
  block: string;
  brandCar: string;
  colorCar: string;
  licensePlate: string;
  modelCar: string;
  responsibleName: string;
}

export { IFindOneParkingSpotResponseDTO, IFindOneParkingSpotRequestDTO };