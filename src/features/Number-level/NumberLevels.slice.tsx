const { createSlice } = require("@reduxjs/toolkit");

const NumberLevelSlice = createSlice({
    name: "NumberLevels",
    initialState: [],
    reducers: {
        addNumberLevel(state:any, action:any) {
            state.unshift(action.payload);
        },
    },
});

const { actions, reducer } = NumberLevelSlice;
export const { addNumberLevel } = actions;
export default reducer;