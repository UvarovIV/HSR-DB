import {Card} from "antd";
import React, {useState} from "react";
import styled from 'styled-components';
import lc_image from "../images/Light_Cone_Brighter_Than_the_Sun.webp";
import three_star_image from "../images/Icon_3_Stars.webp"
import four_star_image from "../images/Icon_4_Stars.webp"
import five_star_image from "../images/Icon_5_Stars.webp"

const LightConeCard = (lightCone) => {

    const ThreeStarImage = styled.img`
      width: 45px;
      height: 20px;
      margin-bottom: 5px;
    `;

    const FourStarImage = styled.img`
      width: 60px;
      height: 20px;
      margin-bottom: 5px;
    `;

    const FiveStarImage = styled.img`
      width: 75px;
      height: 20px;
      margin-bottom: 5px;
    `;

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

    const [isCardExpanded, setIsCardExpanded] = useState(false);

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
            <div style={{textAlign: "center"}}><img src={lc_image}
                 width={180} height={200}></img><br /></div>
            <div style={{
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: 5,
                wordWrap: 'break-word',
                textAlign: 'center'
            }}>{lightCone.lightCone.name}<br /></div>
            <div style={{textAlign: "center"}}>{checkRarity(lightCone.lightCone.rarity.rarity)}<br /></div>
            {lightCone.lightCone.description}<br />

        </Card>
    )
}

export default LightConeCard;