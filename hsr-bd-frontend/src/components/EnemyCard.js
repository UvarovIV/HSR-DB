import {Card, Dropdown, Menu} from "antd";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import lightConeService from "../services/lightConeService";
import enemyService from "../services/enemyService";
import {EllipsisOutlined} from "@ant-design/icons";

const EnemyCard = (enemy) => {

    const dispatch = useDispatch();

    const handleDelete = () => {
        enemyService.deleteEnemy(enemy.enemy, dispatch);
    };

    const handleEdit = () => {

    };

    const menu = (
        <Menu>
            <Menu.Item key="delete" onClick={handleDelete}>
                Удалить
            </Menu.Item>
            <Menu.Item key="edit" onClick={handleEdit}>
                Изменить
            </Menu.Item>
        </Menu>
    );

    return (
        <Card
            style={{
                margin: 10,
                position: 'relative',
                maxHeight: 450,
                maxWidth: 350,
                overflow: 'auto',
            }}
        >
            <div style={{textAlign: "center"}}>
                {<img src={enemy.enemy.pathToImg} width={300} height={300}></img>}
                <div style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    marginBottom: 5,
                    wordWrap: 'break-word',
                }}>{enemy.enemy.name}<br/></div>
                <Dropdown overlay={menu} placement="bottomRight">
                    <EllipsisOutlined style={{ position: 'absolute', top: 10, right: 20, fontSize: 20 }} />
                </Dropdown>
            </div>
        </Card>
    )
}

export default EnemyCard;