import React, {useEffect} from "react";
import './LightConesPage.css';
import LightConeCard from "../components/LightConeCard";
import {useDispatch, useSelector} from "react-redux";
import lightConeService from "../services/lightConeService";
import ModalForAddLightCone from "../components/ModalForAddLightCone";

export const LightConesPage = () => {

    const lightCones = useSelector((state) => state.lightCones.lightCones);
    const selectedLightCone = useSelector((state) => state.lightCones.selectedLightCone);

    const dispatch = useDispatch();

    useEffect(() => {
        lightConeService.getAllLightCones(dispatch);
    }, [selectedLightCone]);

    return (
        <div className="LightConesPage">
            <div style={{position: "absolute", top: 20, right: 20}}><ModalForAddLightCone /></div>
            {lightCones.map((lightCone) => (
                <LightConeCard lightCone={lightCone}/>
            ))}
        </div>
    );
}