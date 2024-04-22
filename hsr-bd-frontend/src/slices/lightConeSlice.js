import {createSlice} from "@reduxjs/toolkit";

export const lightConeSlice = createSlice({
    name: 'lightCones',
    initialState: {
        lightCones: [],
        selectedLightCone: null,
        rarities: [],
        paths: [],
    },
    reducers: {
        set: (state, action) => {
            state.lightCones = action.payload;
        },
        setSelectedLightCone: (state, action) => {
            state.selectedLightCone = action.payload;
        },
        setRarities: (state, action) => {
            state.rarities = action.payload;
        },
        setPaths: (state, action) => {
            state.paths = action.payload;
        },
    },
})

export const {
    set,
    setSelectedLightCone,
    setRarities,
    setPaths,
} = lightConeSlice.actions;

export default lightConeSlice.reducer;