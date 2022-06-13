const { createSlice } = require("@reduxjs/toolkit");

const DeviceSlice = createSlice({
    name: "Devices",
    initialState: [],
    reducers: {
        addDevice(state:any, action:any) {
            state.unshift(action.payload);
        },
    },
});

const { actions, reducer } = DeviceSlice;
export const { addDevice } = actions;
export default reducer;