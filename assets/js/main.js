// Task 1

// let a = parseInt(prompt("A : "));

// for (let i = 1; i <= 1000; i++) {
//     if (i % a === 0) {
//         console.log(i);
//     }
// }

// Task 2

// let a = parseInt(prompt("A : "));
// let counter = 0;

// for (let i = 1; i * i < a; i++) {
//     counter++;
// }

// console.log("Count is " + counter);


// Task 3

// let a = parseInt(prompt("A : "));
// let d = 0; // largest divisor
// for (let i = 1; i < a; i++)
// {
//     if (a % i == 0)
//     {
//         d = i;
//     }
// }

// console.log(d);

// Task 4 

// let a = parseInt(prompt("A : "));
// let b = parseInt(prompt("B : "));
// let sum = 0;

// if (a < b) {
//     for (let i = a; i <= b; i++) {
//         if (i % 7 === 0) {
//             sum += i;
//         }
//     }
//     console.log(sum);
// }

// else if(a > b){
//     for (let i = b; i <= a; i++) {
//         if (i % 7 === 0) {
//             sum += i;
//         }
//     }
//     console.log(sum);
// }

// Task 5

// console.log("Input a : ");
// let a = parseInt(prompt("A : "));
// let n1 = 1;
// let n2 = 1;
// let n3 = 0;

//     for (let i = 2; i < a; i++)
//     {
//         n3 = n1 + n2;
//         n1 = n2;
//         n2 = n3;
//     }
//     console.log(n3);

// Task 6


// let a = parseInt(prompt("A : "));
// let b = parseInt(prompt("B : "));
// let gcd = 0;
// let remainder = 0;
// if (a > b)
// {
//     while (a % b > 0)
//     {
//        remainder = a % b;
//        a = b;
//        b = remainder;
//     }
//     gcd = b;
// }

// else
// {
//     while (b % a > 0)
//     {
//         remainder = b % a;
//         b = a;
//         a = remainder;
//     }
//     gcd = a;
// }

// console.log(gcd);

// Task 7

// let number  = parseInt(prompt("Number : "));
// let newnumber = 0;
// while (number > 0)
// {
//     newnumber *= 10;
//     newnumber += number % 10;
//     number = parseInt(number / 10);
// }

// console.log(newnumber);

// Task 8

// let a  = prompt("A : ");
// let b  = prompt("B : ");

// let isSame = false;

// for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < b.length; j++) {
//         if (a[i] === b[j]) {
//             isSame = true;
//         }
//     }
// }

// console.log(isSame);