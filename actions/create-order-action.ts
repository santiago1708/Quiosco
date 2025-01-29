"use server"

import { prisma } from "@/src/lib/prisma"
import { OrderSchema } from "@/src/schema"

export async function createOrder(data: unknown) {
    const result = OrderSchema.safeParse(data)
    
    if(!result.success){
        return {
            errors: result.error.issues
        }
    }

    try {
        await prisma.order.create({
            data: {
                
            }
        })
        
    } catch (error) {
        console.log(error);
    }
}