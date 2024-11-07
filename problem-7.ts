class Car {
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand,
        this.model = model,
        this.year = year;        
    };

    getCarAge(){
        const currentYear = new Date().getFullYear()
        const age = currentYear - this.year
        if(age < 0 ){
            return console.log(`The car is't been made yet`)
        }
        return console.log(age, `(assuming current year is ${currentYear})`);
    }

}


const car = new Car("Honda", "Civic", 2018)
car.getCarAge()