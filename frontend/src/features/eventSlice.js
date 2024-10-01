import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RRule, RRuleSet } from 'rrule';
import moment from 'moment-timezone'


const eventSlice = createSlice({
    name: 'event',
    initialState: {
        items: [],
        selectedItem: null,
    },
    reducers: {
        selectItem: (state, action) => {
            state.selectedItem = state.items.find((item) => item.public_id === action.payload);
        },
        setAllEvents:(state,action) =>{
            state.items = action.payload
        }
    }
});

export const { selectItem,setAllEvents } = eventSlice.actions;
export const eventsSelector = (state) => state.event.items;
export const eventSelector = (state) => state.event.selectedItem;

export default eventSlice.reducer;
