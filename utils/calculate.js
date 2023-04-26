function sum(a, b) {
    if(typeof a=="number" && typeof b =="number"){
        setTimeout(() => {
            return a + b
        }, 500);
    }else {
        return "Given numbers are wrong"
    }
    
}

function minus(a, b) {
    if(typeof a=="number" && typeof b =="number"){
        setTimeout(() => {
            return a - b
        }, 500);
    }else {
        return "Given numbers are wrong"
    }
    
}


function test(a,b) {
    return new Promise((resolve,reject)=>{
        if(typeof a=="number" && typeof b =="number"){
           setTimeout(() => {
            resolve(a+b)
           }, 5000);
        }else {
            reject("Given numbers are wrong")
        }
    })
}



module.exports = {sum, minus, test}