const inventory = {
    water: true,
    elec: true,
    soap:4
}

function washingMachine() {
    return new Promise((resolve,reject)=>{
        if(inventory.water && inventory.elec && inventory.soap > 0){
            setTimeout(() => {
                resolve('Clean dishes')
            }, 5000);
        }else{
            reject('Error no clean dishes')
        }
    })
}

async function start(){
    try {
        const result = await washingMachine();
        console.log(result);
    } catch (error) {
        console.log(error)
    }
}

start()