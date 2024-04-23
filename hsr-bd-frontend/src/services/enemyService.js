import axios from "axios";
import {set, setSelectedEnemy} from "../slices/enemySlice";


const API_URL = "/enemies";
const getAllEnemies = (dispatch) => {
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

const createEnemy = (enemy, dispatch) => {

    return axios.post(API_URL, enemy).then(
        () => {
            getAllEnemies(dispatch)
        },
        (error) => {
            const _content = (error.response && error.response.data) ||
                error.message ||
                error.toString();

            console.error(_content)
        });
};

const updateEnemy = (enemy, dispatch) => {

    return axios.put(API_URL, enemy).then(
        () => {
            getAllEnemies(dispatch)
        },
        (error) => {
            const _content = (error.response && error.response.data) ||
                error.message ||
                error.toString();

            console.error(_content)
        });
};

const deleteEnemy = (enemy, dispatch) => {

    return axios.delete(API_URL+`/${enemy.id}`).then(
        () => {
            getAllEnemies(dispatch)
        },
        (error) => {
            const _content = (error.response && error.response.data) ||
                error.message ||
                error.toString();
            console.error(_content)
        });
};

const selectEnemy = (enemy, dispatch) => {
    dispatch(setSelectedEnemy(enemy))
}

const EnemyService = {
    getAllEnemies,
    createEnemy,
    selectEnemy,
    updateEnemy,
    deleteEnemy,
};

export default EnemyService