let studenti = {
    emri:'Ibrahim',
    age:23,
    notat:{
        Matematik:7,
        Anglisht:10
    },
    country:{
        name:'Kosovo'
    }
}

studenti.id = 12452349
console.log(studenti)

delete studenti.notat.Anglisht
console.log(studenti)

studenti.notat.Programim = 10
console.log(studenti)


console.log(Object.keys(studenti))

for (const key of Object.keys(studenti)) {
    console.log(key)
}

// for(let key in studenti){
//     console.log(typeof studenti[key])
//     if(typeof studenti[key] == 'object'){
//         for(let key2 in studenti[key]){
//             console.log(`${key2}: ${studenti[key][key2]}`)
//         }
//     }else{
//         console.log(`${key}: ${studenti[key]}`)
//     }
    
// }
