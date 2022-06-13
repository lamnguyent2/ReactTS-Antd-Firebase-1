const { createSlice } = require("@reduxjs/toolkit");

const ManagementSlice = createSlice({
    name: "Managements",
    initialState: [],
    reducers: {
        addManagement(state:any, action:any) {
            state.unshift(action.payload);
        },
    },
});

const { actions, reducer } = ManagementSlice;
export const { addManagement } = actions;
export default reducer;