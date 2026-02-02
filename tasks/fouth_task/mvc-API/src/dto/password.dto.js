import z from 'zod';

export const passwordDto = z.object({
    newPassword: z.string().min(6, "Password must be at least 6 characters long"),
})