package com.uvaroviv.hsrbdbackend.Impl;

import com.uvaroviv.hsrbdbackend.repositories.CharacterRepository;
import com.uvaroviv.hsrbdbackend.entities.Character;
import com.uvaroviv.hsrbdbackend.services.CharacterService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
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
        Optional<Character> character = characterRepository.findById(characterId);
        if (character.isPresent()) {
            characterRepository.deleteById(characterId);
            return true;
        }
        return false;
    }

    @Override
    public boolean updateCharacter(Character character) {
        boolean characterExist = characterRepository.existsById(character.getId());
        if (characterExist) {
            characterRepository.save(character);
            return true;
        }
        return false;
    }

    @Override
    public List<Character> findAll() {
        return characterRepository.findAll();
    }
}
