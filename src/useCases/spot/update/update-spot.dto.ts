interface IUpdateSpotRequestParam {
  id: string;
}

interface IUpdateSpotRequestDTO {
  id: string;
  number?: number;
  isAvailabe?: boolean;
}

interface IUpdateSpotResponseDTO {
  id: string;
  isAvailabe: boolean;
  number: number;
}

export {
  IUpdateSpotResponseDTO,
  IUpdateSpotRequestDTO,
  IUpdateSpotRequestParam,
};
