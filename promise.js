function sum(num1,num2) {
    return new Promise((resolve,reject)=>{
        if(typeof num1 == 'number' && typeof num2 == 'number'){
            setTimeout(() => {
                resolve(num1 + num2)
            }, 5000);
        }else{
            reject('Both values should be numbers!!!')
        }
    })
}

function minus(num1,num2) {
    return new Promise((resolve,reject)=>{
        if(typeof num1 == 'number' && typeof num2 == 'number'){
            setTimeout(() => {
                resolve(num1 - num2)
            }, 3000);
        }else{
            reject('Both values should be numbers!!!')
        }
    })
}


module.exports = {sum,minus}