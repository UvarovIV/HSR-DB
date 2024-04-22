import axios from "axios";
import {set, setPaths, setRarities, setSelectedLightCone} from "../slices/lightConeSlice";

const API_URL = "/light_cones";
const getAllLightCones = (dispatch) => {
    return axios.get(API_URL).then((response) => {
            dispatch(set(response.data))
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

const getRarities = (dispatch) => {
    return axios.get(API_URL+'/rarities').then((response) => {
            dispatch(setRarities(response.data))
            return response.data;
        },
        (error) => {
            const _content = (error.response && error.response.data) ||
                error.message ||
                error.toString();

            console.error(_content)

            dispatch(setRarities([]));
        });
}

const getPaths = (dispatch) => {
    return axios.get(API_URL+'/paths').then((response) => {
            dispatch(setPaths(response.data))
            return response.data;
        },
        (error) => {
            const _content = (error.response && error.response.data) ||
                error.message ||
                error.toString();

            console.error(_content)

            dispatch(setPaths([]));
        });
}

const createLightCone = (lightCone, dispatch) => {

    return axios.post(API_URL, lightCone).then(
        () => {
            getAllLightCones(dispatch)
        },
        (error) => {
            const _content = (error.response && error.response.data) ||
                error.message ||
                error.toString();

            console.error(_content)
        });
};

const selectLightCone = (lightCone, dispatch) => {
    dispatch(setSelectedLightCone(lightCone))
}

const LightConeService = {
    getAllLightCones,
    getRarities,
    getPaths,
    createLightCone,
    selectLightCone,
};

export default LightConeService