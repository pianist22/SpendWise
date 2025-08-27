import arcjet, { tokenBucket } from "@arcjet/next"

// Rate Limiting to how many number of transaction user can use
const aj = arcjet({
    key:process.env.ARCJET_KEY,
    characteristics:["userId"],//Track the user based on Clerk UserId
    rules:[
        tokenBucket({
            mode:"LIVE",
            refillRate:10,
            interval:3600,
            capacity:10,
        }),
    ],
});

export default aj;