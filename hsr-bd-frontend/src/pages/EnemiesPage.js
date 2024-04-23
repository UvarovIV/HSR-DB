import {useDispatch, useSelector} from "react-redux";
import './EnemiesPage.css';
import React, {useEffect} from "react";
import enemyService from "../services/enemyService";
import EnemyCard from "../components/EnemyCard";

export const EnemiesPage = () => {
    const enemies = useSelector((state) => state.enemies.enemies);
    const selectedEnemy = useSelector((state) => state.enemies.selectedEnemy);

    const dispatch = useDispatch();

    useEffect(() => {
        enemyService.getAllEnemies(dispatch);
    }, [selectedEnemy]);

    return (
        <div className="EnemiesPage">
            {enemies.map((enemy) => (
                <EnemyCard enemy={enemy}/>
            ))}
        </div>
    );
}