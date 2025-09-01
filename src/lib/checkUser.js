
import { currentUser } from "@clerk/nextjs/server"
import { db } from "./prisma";

export const checkUser = async()=>{
    // check if user exisits for clerk 
    const user = await currentUser();
    if(!user) return null;
    // if yes then check its entry in the DB 

    try{
        const loggedInUser = await db.user.findUnique({
            where: {
                clerkUserId: user.id, 
            }
        });
        if(loggedInUser){
            return loggedInUser;
        }

        const name = `${user.firstName} ${user.lastName}`;
        const newUser = await db.user.create({
            data:{
                clerkUserId: user.id,
                name: name,
                imageUrl: user.imageUrl,
                email: user.emailAddresses[0].emailAddress,
            },
        });
        return newUser;

    }
    catch(error){
        console.log("Hello");
        console.log(error.message);
    }
    
}