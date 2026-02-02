import z from 'zod';

export const recoveryPasswordDto = z.object({
    email: z.email("Invalid email address"),
});