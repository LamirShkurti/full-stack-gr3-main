const arr = [153,143,-8,912,6,53,42,-2,213,-245]
const last = arr[arr.length - 1]
console.log(last);

const middle = Math.round(arr.length / 2)
console.log(arr[middle - 1])

let sum = 0
for (const num of arr) {
    sum += num
}

console.log(sum)
const avg = sum/arr.length
console.log(avg)

const text = 'The quick brown fox jumps over the lazy dog'

const arrOfStrings = text.split(' ')
console.log('arrOfStrings', arrOfStrings);
let min = arrOfStrings[0].length
let strings = []
for (const word of arrOfStrings) {
    if(word.length <= min){
        min = word.length
        strings.push(word)
    }
}

console.log(strings)
console.log(min)


const arr1 = [1,2,5,7,2,3,6,4,2]
const arr2 = [9,8,5,6,3,2,1,5,0]


let unique = []

for (const num of arr1) {
    if(!unique.includes(num)){
        unique.push(num)
    }
}

for (const num of arr2) {
    if(!unique.includes(num)){
        unique.push(num)
    }
}

let arr3 = arr1.concat(arr2)
console.log(arr3);
for (const num of arr3) {
    if(!unique.includes(num)){
        unique.push(num)
    }
}

console.log(unique)


console.log([...new Set(arr3)])

