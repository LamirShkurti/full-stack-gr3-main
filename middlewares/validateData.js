const validateData = (fields)=>{
    return (req,res,next) => {
        // let missing = []
        // for(let field of fields){
        //     if(!req.body[field]){
        //         missing.push(field)
        //     }
        // }

        let missingFields = fields.filter(field => !req.body[field])
        console.log(missingFields)
        if(missingFields.length > 0){
            res.status(422).send(`Given data can't be empty: ${missingFields.join(', ')}`)
        }
            next();
    }
}



module.exports = validateData

