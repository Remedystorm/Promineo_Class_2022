//Array setup default and ageA ageB

let ages=[3, 9, 23, 64, 2, 8, 28, 93]

console.log(ages); //listing of array

ages.push(22);
let ageA;
let ageB;

for(i=0; i < ages.length; i++){
if(i==0){
 ageA = ages[i];
}
if(i=ages.length -1){
    if (ageB=ages[i]);
}
}

console.log(ageB - ageA);

let sum = 0;

for (let average of ages) {
    sum += average;
}


average = sum / ages.length;

console.log(average);

//2
let names = ['Billy', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let letA = 0; //average amount of letters in a name starting with 0
console.log(names) //listing of names 

for (let ave of names) {
    letA += ave.length; 
}
ave = letA / names.length; //divison of amount of letters and namelength

console.log(ave); //listing of average amount of letters in a name

let letB = "";
for (i = 0; i < names.length; i++) {
letB += names[i]; 
letB += " "; 
}
console.log(letB);


// access last element
console.log(names[names.length - 1]);
// access first element
console.log(names[names.length - 6]);

//created names array and add the length of each name to the nameLengths array
let nameArray = ["kelly", "Sam", "Kate"];
let nameLengths = [];

for (i = 0; i < nameArray.length; i++) {
    nameLengths[i] = nameArray[i].length;
}
console.log(nameLengths);

//calculate the sum of all the elements in the array

let lSum = 0;
for (i = 0; i < nameLengths.length; i++) {
    lSum += nameLengths[i];
}
console.log(lSum);

//word and n, as arguments and returns the word concatenated to itself n number of times
function RyanS(word, n) {
    let RyanS= '';
    for (i = 0; i < n; i++) {
        RyanS+= word;
    }
    return RyanS;
}
console.log(RyanS("I'm Just Learning", 8));
//FirstName, MiddleName, and lastName, and returns a full name
function fullName(firstName, middleName, lastName) {
    console.log(firstName + " " + middleName + " " + lastName);
}
fullName("Ryan", "k", "Sourignavong");

//array of numbers and returns the average of all the elements in the array.
let a1 = [12, 3, 1, 89, 17 , 53, 76, 39];
function averageArray(arrayOne) {
    let sum1 = 0
    for (i = 0; i < arrayOne.length; i++) {
        sum1 += a1[i]
    }
    let average = sum1 / arrayOne.length;
    return average
}
console.log(averageArray(a1));
//takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
let numA = [6, 3, 33, 37];
let numB = [7, 21, 834, 9];

function avr2(numA, numB) {
    let sumA = 0;
    let sumB = 0;
    for (i = 0; i < numA.length; i++) {
        sumA += numA[i];
    }
    for (i = 0; i < numB.length; i++) {
        sumB += numB[i];
    }
    let avr2 = sumA / numA.length;
    let sumC = sumB / numB.length;

    // console.log(avr2);
    // console.log(sumC);

    if (avr2 > sumC) {
        return true;
    }
    else
        return false;
}
console.log(avr2(numA, numB));

