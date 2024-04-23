import React, { useEffect, useState } from "react";
import './CharactersPage.css';
import { useDispatch, useSelector } from "react-redux";
import characterService from "../services/characterService";
import CharacterCard from "../components/CharacterCard";
import ModalForAddCharacter from "../components/ModalForAddCharacter";

export const CharactersPage = () => {

    const characters = useSelector((state) => state.characters.characters);
    const selectedCharacter = useSelector((state) => state.characters.selectedCharacter);

    const dispatch = useDispatch();

    useEffect(() => {
        characterService.getAllCharacters(dispatch);
    }, [selectedCharacter]);

    return (
        <div className="CharactersPage">
            <div style={{position: "absolute", top: 20, right: 20}}><ModalForAddCharacter /></div>
            {characters.map((character) => (
                <CharacterCard character={character}/>
            ))}
        </div>
    );
}

