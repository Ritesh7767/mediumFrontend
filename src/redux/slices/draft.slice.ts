import { createSlice } from "@reduxjs/toolkit"

export interface draftInterface {
    id: string
    title: string,
    content: string
    image: string,
    subtitle: string,
    topic: string
}

const initialState: draftInterface = {
    id: "",
    image: "",
    title: "",
    subtitle: "",
    content: "",
    topic: ""
}

const draftSlice = createSlice({
    name: "draft",
    initialState,
    reducers: {
        SETDRAFT (state, action) {
            return action.payload
        }
    }
})

export const {SETDRAFT} = draftSlice.actions
export default draftSlice.reducer