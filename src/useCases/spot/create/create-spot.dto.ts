interface ICreateSpotRequest {
  isAvailable: boolean;
  number: number;
}

interface ICreateSpotResponseDTO {
  id: string;
  isAvailable?: boolean;
  number?: number;
}

export { ICreateSpotRequest, ICreateSpotResponseDTO };
