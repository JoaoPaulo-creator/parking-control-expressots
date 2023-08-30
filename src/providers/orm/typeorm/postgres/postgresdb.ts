import { ParkingSpot } from "@entities/parking-spot.entity";
import { DataSourceOptions } from "typeorm";

const postgresDBConfig: DataSourceOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "banco123",
  database: "parkingspot",
  synchronize: true,
  entities: [ParkingSpot],
};

export { postgresDBConfig as PostgresDBConfig };
