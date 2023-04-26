// Calculate the average number in given array.

let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];

let  sum = 0;
for(let i = 0; i<arr_1.length; i++) {
    sum = sum + arr_1[i]

}
const average = sum / arr_1.length
console.log(average) 