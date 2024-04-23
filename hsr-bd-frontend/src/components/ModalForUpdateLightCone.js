import React, {useEffect, useState} from "react";
import {Button, Form, Input, Modal, Select} from "antd";
import {useDispatch, useSelector} from "react-redux";
import lightConeService from "../services/lightConeService";
import HelpFunctions from "./HelpFunctions";

const {Option} = Select;

const ModalForUpdateLightCone = ({selectedLightCone, visible, onCancel}) => {

    const [form] = Form.useForm();

    const dispatch = useDispatch()

    useEffect(() => {
        lightConeService.getPaths(dispatch)
        lightConeService.getRarities(dispatch)
    }, []);

    const paths = useSelector((state) => state.lightCones.paths);
    const rarities = useSelector((state) => state.lightCones.rarities);


    const handleCancel = () => {
        form.resetFields();
        onCancel()
    };

    const onFinish = (values) => {
        form.resetFields();
        const lightConeId = selectedLightCone.id
        const name = values.name ? values.name : selectedLightCone.name
        const pathToImg = values.pathToImg ? values.pathToImg : selectedLightCone.pathToImg
        const description = values.description ? values.description : selectedLightCone.description
        const minLevelHealthPoints = values.minLevelHealthPoints ? values.minLevelHealthPoints : selectedLightCone.minLevelHealthPoints
        const minLevelAttack = values.minLevelAttack ? values.minLevelAttack : selectedLightCone.minLevelAttack
        const minLevelDefense = values.minLevelDefense ? values.minLevelDefense : selectedLightCone.minLevelDefense
        const maxLevelHealthPoints = values.maxLevelHealthPoints ? values.maxLevelHealthPoints : selectedLightCone.maxLevelHealthPoints
        const maxLevelAttack = values.maxLevelAttack ? values.maxLevelAttack : selectedLightCone.maxLevelAttack
        const maxLevelDefense = values.maxLevelDefense ? values.maxLevelDefense : selectedLightCone.maxLevelDefense
        const rarity = values.rarity.id ? values.rarity.id : selectedLightCone.rarity.id
        const path = values.path.id ? values.path.id : selectedLightCone.path.id
        lightConeService.updateLightCone({
            id: lightConeId,
            name: name,
            pathToImg: pathToImg,
            description: description,
            minLevelHealthPoints: minLevelHealthPoints,
            minLevelAttack: minLevelAttack,
            minLevelDefense: minLevelDefense,
            maxLevelHealthPoints: maxLevelHealthPoints,
            maxLevelAttack: maxLevelAttack,
            maxLevelDefense: maxLevelDefense,
            rarity: {
                id: rarity
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
                title="Изменение светового конуса"
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
                    <Form.Item label="Description" name="description">
                        <Input.TextArea rows={4} placeholder="Введите описание"/>
                    </Form.Item>
                    <Form.Item label="Min. Level Health" name="minLevelHealthPoints">
                        <Input/>
                    </Form.Item>
                    <Form.Item label="Min. Level Attack" name="minLevelAttack">
                        <Input/>
                    </Form.Item>
                    <Form.Item label="Min. Level Defense" name="minLevelDefense">
                        <Input/>
                    </Form.Item>
                    <Form.Item label="Max. Level Health" name="maxLevelHealthPoints">
                        <Input/>
                    </Form.Item>
                    <Form.Item label="Max. Level Attack" name="maxLevelAttack">
                        <Input/>
                    </Form.Item>
                    <Form.Item label="Max. Level Defense" name="maxLevelDefense">
                        <Input/>
                    </Form.Item>
                    <Form.Item label="Rarity" name={["rarity", "id"]}>
                        <Select
                            placeholder={"Выберите редкость светового конуса"}>
                            {rarities.map((rarity) => (
                                <Option key={rarity.id} value={String(rarity.id)}>
                                    <div
                                        style={{marginBottom: "-12px"}}>{HelpFunctions.checkRarity(rarity.rarity)}</div>
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item label="Path" name={["path", "id"]}>
                        <Select placeholder={"Выберите путь для светового конуса"}>
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

export default ModalForUpdateLightCone;