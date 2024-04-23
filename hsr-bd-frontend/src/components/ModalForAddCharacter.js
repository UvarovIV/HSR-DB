import React, {useEffect, useState} from 'react';
import {Form, Input, Button, Select, Modal} from 'antd';
import characterService from "../services/characterService";
import lightConeService from "../services/lightConeService";
import {useDispatch, useSelector} from "react-redux";
import HelpFunctions from "./HelpFunctions";

const {Option} = Select;

const ModalForAddCharacter = () => {
    const [visible, setVisible] = useState(false);
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

    const showModal = () => {
        setVisible(true);
    };

    const handleCancel = () => {
        form.resetFields();
        setVisible(false);
    };

    const onFinish = (values) => {
        form.resetFields();
        setVisible(false);
        characterService.createCharacter({
            name: values.name,
            pathToImg: values.pathToImg,
            rarity: {
                id: values.rarity.id
            },
            combatType: {
                id: values.combatType.id
            },
            path: {
                id: values.path.id
            }
        }, dispatch)
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Add Character
            </Button>
            <Modal
                title="Добавление персонажа"
                visible={visible}
                onCancel={handleCancel}
                footer={null}
            >
                <Form form={form} name="my-form" onFinish={onFinish}>
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{required: true, message: 'Please input the name!'}]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Path to Image"
                        name="pathToImg"
                        rules={[{required: true, message: 'Please input the image URL!'}]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Rarity"
                        name={["rarity", "id"]}
                        rules={[{required: true, message: 'Please select the rarity ID!'}]}
                    >
                        <Select
                            placeholder={"Выберите редкость персонажа"}>
                            {rarities.map((rarity) => (
                                <Option key={rarity.id} value={String(rarity.id)}>
                                    <div style={{marginBottom: "-12px"}}>{HelpFunctions.checkRarity(rarity.rarity)}</div>
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Combat Type"
                        name={["combatType", "id"]}
                        rules={[{required: true, message: 'Please select the combat type ID!'}]}
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

                    <Form.Item
                        label="Path"
                        name={["path", "id"]}
                        rules={[{required: true, message: 'Please select the path ID!'}]}
                    >
                        <Select placeholder={"Выберите путь персонажа"}>
                            {paths.map((path) => (
                                <Option key={path.id} value={String(path.id)}>
                                    {path.name}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Add
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default ModalForAddCharacter;
