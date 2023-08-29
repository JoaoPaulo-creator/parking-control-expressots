import { ParkingSpot } from "@entities/parking-spot";
import { BaseRepository } from "@repositories/base-repository";
import { provide } from "inversify-binding-decorators";

interface teste {
    reason: "is not available";
    isNotAvailable: true;
}

@provide(ParkingSpotRepository)
class ParkingSpotRepository extends BaseRepository<ParkingSpot> {
    constructor() {
        super();
    }

    findByLicensePlate(licensePlate: String): boolean {
        const isSpotAvailabe = this.USERDB.find(
            (item) => item.licensePlate === licensePlate,
        );

        return isSpotAvailabe ? true : false;
    }
}

export { ParkingSpotRepository };
