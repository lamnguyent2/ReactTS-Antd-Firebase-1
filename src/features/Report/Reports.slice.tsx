const { createSlice } = require("@reduxjs/toolkit");

const ReportSlice = createSlice({
    name: "Reports",
    initialState: [],
    reducers: {
        addReport(state:any, action:any) {
            state.unshift(action.payload);
        },
    },
});

const { actions, reducer } = ReportSlice;
export const { addReport } = actions;
export default reducer;