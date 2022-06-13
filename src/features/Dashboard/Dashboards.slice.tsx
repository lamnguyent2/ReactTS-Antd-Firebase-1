const { createSlice } = require("@reduxjs/toolkit");

const DashboardSlice = createSlice({
    name: "Dashboards",
    initialState: [],
    reducers: {
        addDashboard(state:any, action:any) {
            state.unshift(action.payload);
        },
    },
});

const { actions, reducer } = DashboardSlice;
export const { addDashboard } = actions;
export default reducer;