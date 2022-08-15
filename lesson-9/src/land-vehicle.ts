import Vehicle, { VehicleProps } from './vehicle.js';

export type LandVechicleProps = {
    tires: string[]
}

class LandVehicle extends Vehicle {
  private tires: string[];

  constructor({ tires }: LandVechicleProps, vehicleProps: VehicleProps) {
    super(vehicleProps);

    this.tires = tires;
  }

  public override toString = (): string => `${this.getString()}\tpandangos: ${this.tires.join(', ')}`;
}

export default LandVehicle;
