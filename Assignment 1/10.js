// Create a function that will accept 2 parameters,
// those 2 parameters should not be empty and should be numbers
// otherwise we need to return a message to user that given values are wrong or empty.
// if given numbers are correct return the string that tells result (SUM) of given numbers

function dhjetshi(a, b) {
    if(typeof a=="number" && typeof b =="number"){
        return a + b
    }else {
        console.log("Given numbers are wrong");
    }
    
}

dhjetshi(1, 2)
dhjetshi('a', 2)
dhjetshi()

