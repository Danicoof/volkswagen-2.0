import { Branded } from "./branded";

export type UserId = Branded<string, 'UserId'>;
export type DealershipId = Branded<string, 'DealershipId'>;
export type DealershipUnitId = Branded<string, 'DealershipUnitId'>;
export type VehicleModelId = Branded<string, 'VehicleModelId'>;
export type VehicleVersionId = Branded<string, 'VehicleVersionId'>;