import React, {useEffect, useState} from "react";
import {Button, Form, Input, Modal, Select} from "antd";
import {useDispatch, useSelector} from "react-redux";
import lightConeService from "../services/lightConeService";
import HelpFunctions from "./HelpFunctions";

const {Option} = Select;

const ModalForAddLightCone = () => {
    const [visible, setVisible] = useState(false);
    const [form] = Form.useForm();

    const dispatch = useDispatch()

    useEffect(() => {
        lightConeService.getPaths(dispatch)
        lightConeService.getRarities(dispatch)
    }, []);

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
        lightConeService.createLightCone({
            name: values.name,
            pathToImg: values.pathToImg,
            description: values.description,
            minLevelHealthPoints: values.minLevelHealthPoints,
            minLevelAttack: values.minLevelAttack,
            minLevelDefense: values.minLevelDefense,
            maxLevelHealthPoints: values.maxLevelHealthPoints,
            maxLevelAttack: values.maxLevelAttack,
            maxLevelDefense: values.maxLevelDefense,
            rarity: {
                id: values.rarity.id
            },
            path: {
                id: values.path.id
            }
        }, dispatch)
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Add Light Cone
            </Button>
            <Modal
                title="Добавление светового конуса"
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
                        label="Path To Image"
                        name="pathToImg"
                        rules={[{required: true, message: 'Please input path to image!'}]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="Description"
                        name="description"
                        rules={[{required: true, message: 'Please input the image URL!'}]}
                    >
                        <Input.TextArea rows={4} placeholder="Введите описание"/>
                    </Form.Item>
                    <Form.Item
                        label="Min. Level Health"
                        name="minLevelHealthPoints"
                        rules={[{required: true, message: 'Please input the minLevelHealth!'}]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="Min. Level Attack"
                        name="minLevelAttack"
                        rules={[{required: true, message: 'Please input the minLevelAttack!'}]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="Min. Level Defense"
                        name="minLevelDefense"
                        rules={[{required: true, message: 'Please input the minLevelDefense!'}]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="Max. Level Health"
                        name="maxLevelHealthPoints"
                        rules={[{required: true, message: 'Please input the maxLevelHealth!'}]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="Max. Level Attack"
                        name="maxLevelAttack"
                        rules={[{required: true, message: 'Please input the maxLevelAttack!'}]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="Max. Level Defense"
                        name="maxLevelDefense"
                        rules={[{required: true, message: 'Please input the maxLevelDefense!'}]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="Rarity"
                        name={["rarity", "id"]}
                        rules={[{required: true, message: 'Please select the rarity ID!'}]}
                    >
                        <Select
                            placeholder={"Выберите редкость светового конуса"}>
                            {rarities.map((rarity) => (
                                <Option key={rarity.id} value={String(rarity.id)}>
                                    <div style={{marginBottom: "-12px"}}>{HelpFunctions.checkRarity(rarity.rarity)}</div>
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Path"
                        name={["path", "id"]}
                        rules={[{required: true, message: 'Please select the path ID!'}]}
                    >
                        <Select placeholder={"Выберите путь для светового конуса"}>
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

export default ModalForAddLightCone;