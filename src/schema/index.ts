import { z } from 'zod'

export const OrderSchema = z.object({
    name: z.string()
                .min(1, 'Tu nombre es obligatorio')
    
})