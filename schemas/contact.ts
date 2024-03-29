import * as z from "zod"

export const ContactSchema = z.object({
    name: z.string({required_error : "Name is Required"}),
    email: z.string().email({message : "Email is Required"}),
    companyName: z.string({required_error: "Company Name is required"}),
    softwareName: z.string({required_error: "Software Name is required"}),
    softwareType: z.enum(["Enterprise", "SaaS"],{
        required_error : "Select the Enterprise Category"
    }),
    currentSoftwareIntegration: z.enum(["yes", "no"], {
        required_error : "select either Yes or No"
    }),
    expectations: z.string()
    
})