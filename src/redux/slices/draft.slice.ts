import { createSlice } from "@reduxjs/toolkit"

export interface draftInterface {
    id: string
    title: string,
    date: Date | undefined,
    published: boolean,
    userId: string,
    content: string
    image: string,
    imageUrl?: string,
    subtitle: string,
    topic: string
}

export const initialDraftState: draftInterface = {
    id: "",
    image: "",
    date: undefined,
    published: false,
    userId: "",
    imageUrl: "",
    title: "",
    subtitle: "",
    content: "",
    topic: ""
}

const draftSlice = createSlice({
    name: "draft",
    initialState: initialDraftState,
    reducers: {
        SETDRAFT (state, action) {
            return {...state, ...action.payload}
        }
    }
})

export const {SETDRAFT} = draftSlice.actions
export default draftSlice.reducer