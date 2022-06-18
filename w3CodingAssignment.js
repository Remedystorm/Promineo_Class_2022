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
let letA = 0; //starting
console.log(names)

for (let ave of names) {
    letA += ave.length;
}
ave = letA / names.length;

console.log(ave);
