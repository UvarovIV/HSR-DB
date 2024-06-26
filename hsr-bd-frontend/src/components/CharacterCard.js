import {Card, Dropdown, Menu} from "antd";
import React, {useState} from "react";
import HelpFunctions from "./HelpFunctions";
import {EllipsisOutlined} from "@ant-design/icons";
import characterService from "../services/characterService";
import {useDispatch} from "react-redux";
import ModalForUpdateCharacter from "./ModalForUpdateCharacter";

const CharacterCard = (character) => {

    const dispatch = useDispatch();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleDelete = () => {
        characterService.deleteCharacter(character.character, dispatch);
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
                {<img src={character.character.pathToImg} width={300} height={300}></img>}
                <div style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    marginBottom: 5,
                    wordWrap: 'break-word',
                }}>{character.character.name}<br/></div>
                {HelpFunctions.checkRarity(character.character.rarity.rarity)}<br/>
                {HelpFunctions.checkCombatType(character.character.combatType)}
                {character.character.combatType.name}<br/>
                {character.character.path.name}
                <Dropdown overlay={menu} placement="bottomRight">
                    <EllipsisOutlined style={{ position: 'absolute', top: 10, right: 20, fontSize: 20 }} />
                </Dropdown>
                <ModalForUpdateCharacter selectedCharacter={character.character} visible={isModalVisible} onCancel={handleCancelUpdate} />
            </div>
        </Card>
    )
}

export default CharacterCard;