import React from "react";
import {CombatTypeImage, FiveStarImage, FourStarImage, ThreeStarImage} from "./StyledComponents";
import four_star_image from "../images/Icon_4_Stars.webp";
import three_star_image from "../images/Icon_3_Stars.webp";

const checkCombatType = (combatType) => {
    switch (combatType.name) {
        case "Ice":
            return (<CombatTypeImage src={require("../images/combat_types/Type_Ice.webp")}></CombatTypeImage>);
        case "Fire":
            return (<CombatTypeImage src={require("../images/combat_types/Type_Fire.webp")}></CombatTypeImage>);
        case "Imaginary":
            return (
                <CombatTypeImage src={require("../images/combat_types/Type_Imaginary.webp")}></CombatTypeImage>);
        case "Quantum":
            return (<CombatTypeImage src={require("../images/combat_types/Type_Quantum.webp")}></CombatTypeImage>);
        case "Wind":
            return (<CombatTypeImage src={require("../images/combat_types/Type_Wind.webp")}></CombatTypeImage>);
        case "Lightning":
            return (
                <CombatTypeImage src={require("../images/combat_types/Type_Lightning.webp")}></CombatTypeImage>);
        case "Physical":
            return (<CombatTypeImage src={require("../images/combat_types/Type_Physical.webp")}></CombatTypeImage>);
    }
}

const checkRarity = (rarity) => {
    if (rarity === "THREE_STAR") {
        return (<ThreeStarImage src={three_star_image}></ThreeStarImage>)
    }
    if (rarity === "FOUR_STAR") {
        return (<FourStarImage src={four_star_image}></FourStarImage>)
    }
    if (rarity === "FIVE_STAR") {
        return (<FiveStarImage src={require("../images/Icon_5_Stars.webp")}></FiveStarImage>)
    }
}

const HelpFunctions = {
    checkCombatType,
    checkRarity,
};

export default HelpFunctions