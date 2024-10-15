import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface initialState {
    id: string,
    username: string,
    email: string,
    image: string
}

const initialState: initialState = {
    id: "",
    username: "",
    email: "",
    image: ""
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        SETUSER (state, action: PayloadAction){
            console.log(action.payload)
            return action.payload
        },
        SETIMAGE (state, action: PayloadAction<string>){
            state.image = action.payload || ""
        }
    }
})

export const {SETUSER} = userSlice.actions
export default userSlice.reducer