type Person = {
    name: string,
    age: number,
}
function  getProperty<X, Y extends keyof X >(obj: X, key: Y ){
    return obj[key]
}
const person: Person = { name: "Alice", age: 30 };

console.log(getProperty(person, "name"));  // Output: Alice
console.log(getProperty(person, "age"));   // Output: 30