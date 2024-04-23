import React, {useEffect, useState} from "react";
import {Button, Form, Input, Modal, Select} from "antd";
import {useDispatch, useSelector} from "react-redux";
import lightConeService from "../services/lightConeService";
import HelpFunctions from "./HelpFunctions";
import characterService from "../services/characterService";

const {Option} = Select;

const ModalForUpdateCharacter = ({selectedCharacter, visible, onCancel}) => {

    const [form] = Form.useForm();

    const dispatch = useDispatch()

    useEffect(() => {
        characterService.getCombatTypes(dispatch)
        lightConeService.getPaths(dispatch)
        lightConeService.getRarities(dispatch)
    }, []);

    const combatTypes = useSelector((state) => state.characters.combatTypes);
    const paths = useSelector((state) => state.lightCones.paths);
    const rarities = useSelector((state) => state.lightCones.rarities);

    const handleCancel = () => {
        form.resetFields();
        onCancel()
    };

    const onFinish = (values) => {
        form.resetFields();
        const characterId = selectedCharacter.id
        const name = values.name ? values.name : selectedCharacter.name
        const pathToImg = values.pathToImg ? values.pathToImg : selectedCharacter.pathToImg
        const rarity = values.rarity.id ? values.rarity.id : selectedCharacter.rarity.id
        const combatType = values.combatType.id ? values.combatType.id : selectedCharacter.combatType.id
        const path = values.path.id ? values.path.id : selectedCharacter.path.id
        characterService.updateCharacter({
            id: characterId,
            name: name,
            pathToImg: pathToImg,
            rarity: {
                id: rarity
            },
            combatType: {
                id: combatType
            },
            path: {
                id: path
            }
        }, dispatch)
        onCancel()
    };

    return (
        <>
            <Modal
                title="Update Info About Character"
                visible={visible}
                onCancel={handleCancel}
                footer={null}
            >
                <Form form={form} name="my-form" onFinish={onFinish}>
                    <Form.Item label="Name" name="name">
                        <Input/>
                    </Form.Item>
                    <Form.Item label="Path To Image" name="pathToImg">
                        <Input/>
                    </Form.Item>

                    <Form.Item label="Rarity" name={["rarity", "id"]}>
                        <Select
                            placeholder={"Выберите редкость персонажа"}>
                            {rarities.map((rarity) => (
                                <Option key={rarity.id} value={String(rarity.id)}>
                                    <div
                                        style={{marginBottom: "-12px"}}>{HelpFunctions.checkRarity(rarity.rarity)}</div>
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item label="Combat Type" name={["combatType", "id"]}
                    >
                        <Select placeholder={"Выберите тип урона персонажа"}>
                            {combatTypes.map((combatType) => (
                                <Option key={combatType.id} value={String(combatType.id)}>
                                    {HelpFunctions.checkCombatType(combatType)}
                                    {combatType.name}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item label="Path" name={["path", "id"]}>
                        <Select placeholder={"Выберите путь персонажа"}>
                            {paths.map((path) => (
                                <Option key={path.id} value={String(path.id)}>
                                    {path.name}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Update</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default ModalForUpdateCharacter;