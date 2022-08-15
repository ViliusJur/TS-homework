import Vehicle from './vehicle.js';
class WaterVehicle extends Vehicle {
    maxDepth;
    constructor({ maxDepth }, vehicleProps) {
        super(vehicleProps);
        this.maxDepth = maxDepth;
    }
    toString = () => `${this.getString()}\tmaksimalus gylis: ${this.maxDepth}`;
}
export default WaterVehicle;
//# sourceMappingURL=water-vehicle.js.map