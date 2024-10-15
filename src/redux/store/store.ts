import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../slices/user.slice'
import draftReducer from '../slices/draft.slice'

const store = configureStore({
    reducer: {
        userReducer,
        draftReducer
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch