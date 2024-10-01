
import { configureStore, } from '@reduxjs/toolkit';
import sessionReducer from '../features/session/sessionSlice'
import eventReduser from '../features/eventSlice'
import storeReduser from '../features/storeSlice'

const store = configureStore({
    reducer: {
        session: sessionReducer, 
        store:storeReduser,
        event:eventReduser,
    }
});

export default store;

