import { provideSingleton } from "@expressots/core";
import { IEntity } from "@entities/base.entity";

@provideSingleton(InMemoryDB)
class InMemoryDB {
    private readonly USERDB: IEntity[] = [];
    private readonly PARKINGSPOTDB: IEntity[] = [];

    public getUserDB(): IEntity[] {
        return this.USERDB;
    }

    public getParkingSpotDB(): IEntity[] {
        return this.PARKINGSPOTDB;
    }
}

export { InMemoryDB };
