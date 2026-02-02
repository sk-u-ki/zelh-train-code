import z from 'zod';

export const updateProfileDto = z.object({
    username: z.string().min(3, "Username must be at least 3 characters long").optional(),
    email: z.email("Invalid email address").optional(),
});