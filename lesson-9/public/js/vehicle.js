class Vehicle {
    brand;
    model;
    year;
    constructor({ brand, model, year }) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getString = () => {
        const { brand, model, year } = this;
        return `${brand} ${model} ${year}`;
    };
}
export default Vehicle;
//# sourceMappingURL=vehicle.js.map