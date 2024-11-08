// 1. Arrow Function და ორი რიცხვის დაჯამება:
// დაწერე Arrow Function, რომელიც მიიღებს ორ რიცხვს და დააბრუნებს მათ ჯამს. მაგალითად: const add = (a, b) => a + b;

const add = (a, b) => a + b;
console.log(add(3,5));

// 2. დაწერე Anonymous ფუნქცია, რომელიც მიიღებს ორ რიცხვს და დააბრუნებს მათ შორის სხვაობას. მაგალითად: (function(a, b) { return a - b; })(8, 3);

const sxvaoba = function(a,b){
    return a - b;
}
console.log(sxvaoba(15,10));

// 3. Arrow Function
// დაწერე რომელიც მიიღებს ერთ რიცხვს და შეამოწმებს, არის თუ არა ის ლუწი (თუ ლუწია დააბრუნებს true). მაგალითად: const isEven = (num) => num % 2 === 0;

const isEven = (num) => num % 2 === 0;
console.log(isEven(20));

// 4. Callback Function და გამრავლება:
// დაწერე ფუნქცია, რომელიც მიიღებს ორ რიცხვს და Callback ფუნქციას, რომელიც გამოიყენებს ამ რიცხვების ნამრავლის დასათვლელად:

function Funct(Callback) {
    const num1= 20;
    const num2=10;
    return Callback(num1,num2); 
}
function gamravleba(num1,num2) {
    return num1 * num2;
}
console.log(Funct(gamravleba));

// 5. Arrow Function და რიცხვის დადებითობის შემოწმება:
// Arrow Function, რომელიც მიიღებს ერთ რიცხვს და შეამოწმებს, არის თუ არა ის დადებითი. მაგალითად: const isPositive = (num) => num > 0;

const isPositive = (num) => num > 0;
console.log(isPositive(-10));

// 6. დაწერე Anonymous ფუნქცია, რომელიც მიიღებს რიცხვს და დააბრუნებს მის გაორმაგებულ მნიშვნელობას. მაგალითად: (function(n) { return n * 2; })(5);

const ormagi = function (c) {
    return c * c;
}
console.log(ormagi(9));

// 7. დაწერე ფუნქცია, რომელიც მიიღებს რიცხვს და Callback ფუნქციას, რომელიც დააბრუნებს ამ რიცხვის გაორმაგებულ მნიშვნელობას:

function Funct1(Callback) {
    const num= 20;
    return Callback(num); 
}
function gaormageba(num) {
    return num *= num;
}
console.log(Funct1(gaormageba));

// 8. Arrow Function და რიცხვის ნაშთის შემოწმება:
// Arrow Function, რომელიც შეამოწმებს, თუ ნაშთია რიცხვის გაყოფისას 3-ზე (მაგალითად, არის თუ არა რიცხვი 3-ზე გაყოფადი). მაგალითად: const isDivisibleByThree = (num) => num % 3 === 0;

const isDivisibleByThree = (num) => num % 3 === 0;
console.log(isDivisibleByThree(120));
const isDivisibleBy = (num) => num % 3 === 1;
console.log(isDivisibleBy(120));
const isDivisibleByThr = (num) => num % 3 === 2;
console.log(isDivisibleByThr(120));

// 9. Callback Function და რიცხვის გადამოწმება:
// დაწერე ფუნქცია, რომელიც მიიღებს რიცხვს და Callback ფუნქციას, და გამოიძახებს Callback-ს, რომ შეამოწმოს, არის თუ არა ეს რიცხვი ლუწი.

function Funct2(Callback) {
    const num3= 42;
    return Callback(num3); 
}
function isodd(num1) {
    return num1 %2=== 0;
}
console.log(Funct1(isodd));


// 10. Arrow Function და რიცხვის კუბის გამოთვლა:
// Arrow Function, რომელიც მიიღებს რიცხვს და დააბრუნებს მის კუბს. მაგალითად: const cube = (num) => num * num * num;

const cube = (num) => num * num * num;
console.log(cube(31));


// 11. Callback Function და მარტივი გამრავლება:
// დაწერე ფუნქცია, რომელიც მიიღებს ორ რიცხვს და Callback ფუნქციას, რომელიც დააბრუნებს მათ ნამრავლს.

function Funct3(Callback) {
    const num4= 25;
    const num5=15;
    return Callback(num4,num5); 
}
function gamravl(num4,num5) {
    return num4 * num5;
}
console.log(Funct3(gamravl));

// 12. Arrow Function და რიცხვის დადებითობის შემოწმება:
// Arrow Function, რომელიც შეამოწმებს, არის თუ არა რიცხვი ნულზე მეტი. მაგალითად: const isGreaterThanZero = (num) => num > 0;

const isGreaterThanZero = (num) => num > 0;
console.log(isGreaterThanZero(29));

// 13. დაწერე Anonymous ფუნქცია, რომელიც მიიღებს ერთ რიცხვს და დააბრუნებს მის ნახევარს. მაგალითად: (function(n) { return n / 2; })(10);


const halfnum = function(d){
    return d / 2 ;
}
console.log(halfnum(10));


// 14. დაწერე ფუნქცია, რომელიც მიიღებს ორ რიცხვს და Callback ფუნქციას, რომელიც შეაჯამებს ამ რიცხვებს.

function Funct4(Callback) {
    const number1= 25;
    const number2=15;
    return Callback(number1,number2); 
}
function shekreba(number1,number2) {
    return number1 + number2;
}
console.log(Funct4(shekreba));

// 15. Arrow Function, რომელიც მიიღებს ერთ რიცხვს და დააბრუნებს მის კვადრატს. მაგალითი: const square = (num) => num * num;

const square = (num) => num * num;
console.log(square(15));