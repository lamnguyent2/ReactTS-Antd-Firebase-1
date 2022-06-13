const { createSlice } = require("@reduxjs/toolkit");

const ServiceSlice = createSlice({
    name: "Services",
    initialState: [],
    reducers: {
        addService(state:any, action:any) {
            state.unshift(action.payload);
        },
    },
});

const { actions, reducer } = ServiceSlice;
export const { addService } = actions;
export default reducer;