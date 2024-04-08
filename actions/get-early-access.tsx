"use server"

import { ContactSchema } from "@/schemas/contact"
import * as z from "zod"

export const getEarlyAccess = async (values: z.infer<typeof ContactSchema>, token: string) => {

    console.log(token);
    

    const human = validateHuman(token)

    if(!human) {
        
        return {
            error : "You are not authorized Bot"
        }
    }


    const validatedFields =  ContactSchema.safeParse(values)

    if(!validatedFields.success) {
        return {
            error : "Oops Something pleasetry Again"
        }
    }

    const {...data} = validatedFields.data

    // configure data to the database or send  data to email 
    console.log(data);
    
    return {
        success: "success"
    }
    

}



const validateHuman = async (token:string):Promise<boolean> => {
    const secret = process.env.RECAPTCHA_SECRET_KEY
    const response  = await fetch(`https://www.google.com/recaptcha/api/siteverify?${secret}&response=${token}`, {
        method: "POST"
    })
    const data = await response.json()
    return data.succuess
}