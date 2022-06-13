const { createSlice } = require("@reduxjs/toolkit");

const UserSlice = createSlice({
    name: "Users",
    initialState: [],
    reducers: {
        addUser(state:any, action:any) {
            state.unshift(action.payload);
        },
    },
});

const { actions, reducer } = UserSlice;
export const { addUser } = actions;
export default reducer;