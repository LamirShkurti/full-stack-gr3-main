const arrays = [
    [1,2,3,4],
    [5,6,7,8]
]
let sum = []
for(let i in arrays){
   if(i == 0){
    let index2 = parseInt(i) + 1
    for (let k in arrays[i]) {
    sum.push(arrays[i][k] + arrays[index2][k])
    }
   }
}
console.log(sum);

sum = []
let arr1 = arrays[0]
let arr2 = arrays[1]

for(const i in arr1){sum.push(arr1[i]+ arr2[i])}

console.log(sum);