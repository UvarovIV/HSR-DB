import React, {useEffect} from "react";
import './LightConesPage.css';
import LightConeCard from "../components/LightConeCard";
import {useDispatch, useSelector} from "react-redux";
import lightConeService from "../services/lightConeService";

const LightConesPage = () => {

    const lightCones = useSelector((state) => state.lightCones.lightCones);
    const selectedLightCone = useSelector((state) => state.lightCones.selectedLightCone);

    const dispatch = useDispatch();

    useEffect(() => {
        lightConeService.getAllLightCones(dispatch);
    }, [selectedLightCone]);

    return (
        <div className="MainPage">

            {lightCones.map((lightCone) => (
                <LightConeCard lightCone={lightCone}/>
            ))}
        </div>
    );
}

export default LightConesPage;