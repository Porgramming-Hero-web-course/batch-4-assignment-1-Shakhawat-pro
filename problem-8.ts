{
    interface Person {
        name: string,
        age: number,
        email: string
    }
    interface Car {
        brand: string;
        model: string;
        year: number;
    }

    function validateKeys<T extends object>(obj: T, keys: (keyof T)[]) {
        return keys.every(key => key in obj);
    }
    const person: Person = { name: "Alice", age: 25, email: "alice@example.com" };
    const car: Car = {brand:"Honda", model:"Civic", year:2018}
    
    console.log(validateKeys(person, ['name']))
    console.log(validateKeys(car, ['year']))

}