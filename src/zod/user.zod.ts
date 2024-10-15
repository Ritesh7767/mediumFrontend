import * as zod from 'zod'

export const userRegister = zod.object({
    username: zod.string().min(1, "Username cannot be empty"),
    email: zod.string().email(),
    password: zod.string().min(8, "Password should contain minimum 8 characters")
})

export const userLogin = userRegister.pick({
    email: true,
    password: true
})

export type userInterface = zod.infer<typeof userRegister>