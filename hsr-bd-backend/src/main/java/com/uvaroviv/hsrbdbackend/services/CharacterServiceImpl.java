package com.uvaroviv.hsrbdbackend.services;

import com.uvaroviv.hsrbdbackend.repositories.CharacterRepository;
import com.uvaroviv.hsrbdbackend.entities.Character;

import java.util.List;

public class CharacterServiceImpl implements CharacterService {

    CharacterRepository characterRepository;

    CharacterServiceImpl(CharacterRepository charactersRepository) {
        this.characterRepository = charactersRepository;
    }

    @Override
    public Long createCharacter(Character character) {
        return characterRepository.save(character).getId();
    }

    @Override
    public boolean deleteCharacter(Long characterId) {
        return false;
    }

    @Override
    public boolean updateCharacter(Character character) {
        return false;
    }

    @Override
    public List<Character> findAll() {
        return null;
    }
}
