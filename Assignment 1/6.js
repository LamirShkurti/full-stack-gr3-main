// Create an array that will include 100 numbers.
// 50 elements will be added from the end of array
// 50 elements will be added from beginning of the array

// example arr = [10,9,8,7,6,1,2,3,4,5]

arr =[];

/*for(let i = 0; i<=50;i++){
    arr.push(i);
}

for(let i = 50; i<=100;i++){
    arr.unshift(i);
}
console.log(arr);*/

for (let i = 100; i >= 0; i--){
    if (i > 50){
        arr.push(i)
    }
    else{
        arr.unshift(i)
    }
}
console.log(arr)