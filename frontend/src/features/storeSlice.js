import { createSlice } from '@reduxjs/toolkit';


const storeSlice = createSlice({
    name: 'store',
    initialState: {
        items: [],
        filtered: []
    },
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload
            state.filtered = action.payload
        },
        filterItems: (state, action) => {

            state.filtered = state.items.filter((item) => {
                return (
                    item.title.toLowerCase().includes(action.payload) ||
                    item.description.toLowerCase().includes(action.payload)
                );
            });
        }

    }
})

export const { setItems, filterItems } = storeSlice.actions;

export const itemsSelector = (state) => state.store.items;
export const filteredItemsSelector = (state) => state.store.filtered;

export default storeSlice.reducer;