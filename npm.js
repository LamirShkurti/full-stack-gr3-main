// const uc = require('upper-case');
// const calc = require('./utils/calculate')
// let testString = 'this is a test string in lower case11111';
// console.log(uc.upperCase(testString));
// console.log(calc.calculate(2,2));

const calc = require('./utils/calculate')
const calculate = require('./promise')

// console.log(calc.sum(1,2))
// const shuma = calc.sum(3)
// console.log('shuma',shuma);
// const shumaFinal = calc.minus(shuma,15)
// console.log('shumaFinal',shumaFinal)


// calc.test(1,1).then((data)=>{
//     console.log(calc.minus(data,1));
// }).catch((error)=>{
//     console.log('error',error);
// })


// calculate.sum(5,5).then((shuma)=>{
//     console.log(shuma);
//     calculate.minus(shuma,2).then((shuma1)=>{
//         console.log(shuma1);
//         calculate.minus(shuma,'a').then((shuma2)=>{
//             console.log(shuma2);
//             calculate.minus(shuma,2).then((shumaFinal)=>{
//                 console.log(shumaFinal)
//             }).catch((err)=>{
//                 console.log(err);
//             })
//         }).catch((err)=>{
//             console.log(err);
//         })
//     }).catch((err)=>{
//         console.log(err);
//     })
// }).catch((err)=>{
//     console.log(err);
// })


async function test() {
    try {
    const shuma = await calculate.sum(2,10)
    console.log('shuma',shuma);
    const shuma1 = await calculate.sum(2,'15')
    console.log('shuma1',shuma1);
    const shuma2 = await calculate.minus(shuma,4)
    console.log('shuma2',shuma2);
    } catch (error) {
        console.log(error)
    }
}

test()

// console.log('shuma',shuma)