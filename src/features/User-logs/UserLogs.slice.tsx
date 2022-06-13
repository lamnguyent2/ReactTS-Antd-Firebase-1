const { createSlice } = require("@reduxjs/toolkit");

const UserLogSlice = createSlice({
    name: "UserLogs",
    initialState: [],
    reducers: {
        addUserLog(state:any, action:any) {
            state.unshift(action.payload);
        },
    },
});

const { actions, reducer } = UserLogSlice;
export const { addUserLog } = actions;
export default reducer;