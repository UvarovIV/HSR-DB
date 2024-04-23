import axios from "axios";
import {set, setCombatTypes, setSelectedCharacter} from "../slices/characterSlice";

const API_URL = "/characters";
const getAllCharacters = (dispatch) => {
    return axios.get(API_URL).then((response) => {
            dispatch(set(response.data))
            console.log(response.data)
            return response.data;
        },
        (error) => {
            const _content = (error.response && error.response.data) ||
                error.message ||
                error.toString();

            console.error(_content)

            dispatch(set([]));
        }
    )
}

const getCombatTypes = (dispatch) => {
    return axios.get(API_URL+'/combat_types').then((response) => {
            dispatch(setCombatTypes(response.data))
            return response.data;
        },
        (error) => {
            const _content = (error.response && error.response.data) ||
                error.message ||
                error.toString();

            console.error(_content)

            dispatch(setCombatTypes([]));
        });
}

const createCharacter = (character, dispatch) => {

    return axios.post(API_URL, character).then(
        () => {
            getAllCharacters(dispatch)
        },
        (error) => {
            const _content = (error.response && error.response.data) ||
                error.message ||
                error.toString();

            console.error(_content)
        });
};

const updateCharacter = (character, dispatch) => {

    return axios.put(API_URL, character).then(
        () => {
            getAllCharacters(dispatch)
        },
        (error) => {
            const _content = (error.response && error.response.data) ||
                error.message ||
                error.toString();

            console.error(_content)
        });
};

const deleteCharacter = (character, dispatch) => {

    return axios.delete(API_URL+`/${character.id}`).then(
        () => {
            getAllCharacters(dispatch)
        },
        (error) => {
            const _content = (error.response && error.response.data) ||
                error.message ||
                error.toString();
            console.error(_content)
        });
};

const selectCharacter = (character, dispatch) => {
    dispatch(setSelectedCharacter(character))
}

const CharacterService = {
    getAllCharacters,
    getCombatTypes,
    createCharacter,
    updateCharacter,
    deleteCharacter,
    selectCharacter,
};

export default CharacterService