interface IUpdateSpotRequestParam {
  id: string;
}

interface IUpdateSpotRequestDTO {
  id: string;
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
