interface IUpdateSpotRequestParam {
  id: string;
}

interface IUpdateSpotRequest {
  id: string;
  isAvailabe: boolean;
  number: number;
}

interface IUpdateSpotResponseDTO {
  id: string;
  isAvailabe: boolean;
  number: number;
}

export { IUpdateSpotResponseDTO, IUpdateSpotRequest, IUpdateSpotRequestParam };
