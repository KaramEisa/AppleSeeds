

// Why pay a fortune teller when you can just program your fortune yourself?

function tellfortune(jobTitle, location, partnerName, numberOfChildren) {
    return `You will be a ${jobTitle} in ${location} and 
    married to ${partnerName} with ${numberOfChildren} children.`
}
let fortuneTelling = tellfortune("programmer", "Telaviv", "Sharon" , "2");

console.log(fortuneTelling);