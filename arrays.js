let arr = [1,'test',{},[],undefined, true,null,2.6 , 1]
// Elementi: 1 esht i tipit: number
// Elementi: test esht i tipit: string

//Class work
arr.forEach(element => {
    // String interpolation
    console.log(`Elemnti: ${element}, esht i tipit: ${typeof element}`)

    // String concatenation  
    console.log('Elementi:', element, ',', 'esht i tipit:', typeof element)
});


// Array properties

// Accessing element of array in position 1
console.log(arr[1])

// Returns index of the string or element that was given if exists
console.log(arr.indexOf('test'))
// Returns boolean value if given element is included in array
console.log(arr.includes('test'))
// Adds an element at the end of array
arr.push('new element')
// Returns total number of elements within the array
console.log(arr.length)
// Removes last element from array
arr.pop()
console.log(arr)
// Adds new element to beginning of the array 
arr.unshift('its first')
console.log(arr)
// Removes an element from beginning of the array
arr.shift()
console.log(arr);
// Return last index of given element within the array
console.log(arr.lastIndexOf(1))

// Created a new array and added 29 element within it with help of array
let newArr = []
for (let i = 1; i <= 29; i++) {
    newArr.push(i)
}
console.log(newArr)

// Different for loops
arr.forEach(element => {
    console.log(element)
});

// Key variable has index of an element
for (const key in arr) {
    console.log('key', key)
}


// iterator variable has element assigned to it 
for (const iterator of arr) {
    console.log(iterator);
}

