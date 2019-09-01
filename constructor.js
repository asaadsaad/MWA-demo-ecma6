function Person(firstname, lastname) {
    console.log(this);
    this.firstname = firstname;
    console.log(this);
    this.lastname = lastname;
    console.log(this);
    // return this; implicit 
}
const person = new Person("Asaad", "Saad");

console.log(person)

Person.prototype.greet = function () {
    console.log(this.firstname + ' ' + this.lastname);
}

person.greet()

// ES6
// class Person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     greet() { console.log(`${this.firstname} ${this.lastname}`); }
// } 
