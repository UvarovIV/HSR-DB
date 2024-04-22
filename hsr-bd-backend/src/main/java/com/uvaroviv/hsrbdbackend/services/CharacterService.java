package com.uvaroviv.hsrbdbackend.services;

import com.uvaroviv.hsrbdbackend.entities.Character;

import java.util.List;

public interface CharacterService {
    Long createCharacter(Character character);

    boolean deleteCharacter(Long characterId);

    boolean updateCharacter(Character character);

    List<Character> findAll();
}
