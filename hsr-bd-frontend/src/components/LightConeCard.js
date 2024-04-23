import { Card, Dropdown, Menu, Modal } from "antd";
import React, { useState } from "react";
import HelpFunctions from "./HelpFunctions";
import { useDispatch } from "react-redux";
import { EllipsisOutlined } from "@ant-design/icons";
import lightConeService from "../services/lightConeService";
import ModalForUpdateLightCone from "./ModalForUpdateLightCone";

const LightConeCard = (lightCone) => {

    const dispatch = useDispatch();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleDelete = () => {
        lightConeService.deleteLightCone(lightCone.lightCone, dispatch);
    };

    const handleEdit = () => {
        setIsModalVisible(true);
    };

    const handleCancelUpdate = () => {
        setIsModalVisible(false);
    };

    const menu = (
        <Menu>
            <Menu.Item key="delete" onClick={handleDelete}>
                Delete
            </Menu.Item>
            <Menu.Item key="edit" onClick={handleEdit}>
                Update Info
            </Menu.Item>
        </Menu>
    );

    return (
        <Card
            style={{
                margin: 10,
                position: 'relative',
                maxHeight: 350,
                maxWidth: 250,
                overflow: 'auto',
            }}
        >
            <div style={{textAlign: "center"}}>
                <img src={lightCone.lightCone.pathToImg} width={180} height={200} alt="LightCone"></img><br/>
            </div>
            <div style={{
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: 5,
                wordWrap: 'break-word',
                textAlign: 'center'
            }}>{lightCone.lightCone.name}<br/></div>
            <div style={{textAlign: "center"}}>{HelpFunctions.checkRarity(lightCone.lightCone.rarity.rarity)}<br/></div>
            {lightCone.lightCone.description}<br/>
            <Dropdown overlay={menu} placement="bottomCenter">
                <EllipsisOutlined style={{ position: 'absolute', top: 10, right: 20, fontSize: 20 }} />
            </Dropdown>
            <ModalForUpdateLightCone selectedLightCone={lightCone.lightCone} visible={isModalVisible} onCancel={handleCancelUpdate} />
        </Card>
    )
};

export default LightConeCard;
