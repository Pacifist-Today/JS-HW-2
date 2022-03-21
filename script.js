//HW 6

//Task #1

let user = {}

user.name = "John"
user.surname = "Smith"

console.log(user)

user.name = "Pete"

console.log(user.name)

delete user.name

console.log (user.name)

// Task #2

const userSecond = {
    name: "John"
};

userSecond.name = "Pete";

console.log(userSecond.name)

//свойства и значения можно менять когда объект яляеться константой

//Task #3

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}

let summ = salaries.John + salaries.Ann + salaries.Pete

console.log(summ)