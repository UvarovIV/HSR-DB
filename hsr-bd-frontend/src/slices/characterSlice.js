import {createSlice} from "@reduxjs/toolkit";

export const characterSlice = createSlice({
    name: 'characters',
    initialState: {
        characters: [],
        selectedCharacter: null,
        combatTypes: [],
    },
    reducers: {
        set: (state, action) => {
            state.characters = action.payload;
        },
        setSelectedCharacter: (state, action) => {
            state.selectedCharacter = action.payload;
        },
        setCombatTypes: (state, action) => {
            state.combatTypes = action.payload;
        },
    },
})

export const {
    set,
    setSelectedCharacter,
    setCombatTypes,
} = characterSlice.actions;

export default characterSlice.reducer;