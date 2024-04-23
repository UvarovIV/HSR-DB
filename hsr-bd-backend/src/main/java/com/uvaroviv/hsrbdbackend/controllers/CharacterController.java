package com.uvaroviv.hsrbdbackend.controllers;

import com.uvaroviv.hsrbdbackend.entities.Character;
import com.uvaroviv.hsrbdbackend.entities.CombatType;
import com.uvaroviv.hsrbdbackend.services.CharacterService;
import com.uvaroviv.hsrbdbackend.services.CombatTypeService;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("characters")
public class CharacterController {

    private final CombatTypeService combatTypeService;
    private final CharacterService characterService;

    @Autowired
    public CharacterController(CombatTypeService combatTypeService, CharacterService characterService) {
        this.combatTypeService = combatTypeService;
        this.characterService = characterService;
    }

    @PostMapping
    public ResponseEntity<?> addCharacter(@Valid @RequestBody Character character) {
        long characterId = characterService.createCharacter(character);
        if (characterId == -1) {
            return ResponseEntity.badRequest().body("Введена некорректная информация");
        }
        log.info("Добавление персонажа {}", character);
        return ResponseEntity.created(URI.create("/characters/" + characterId)).build();
    }

    @DeleteMapping("/{characterId}")
    public ResponseEntity<?> deleteCharacter(@PathVariable long characterId) {
        boolean isDeleted = characterService.deleteCharacter(characterId);

        if (isDeleted) {
            log.info("Удаление персонажа по id");
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping
    public ResponseEntity<?> updateCharacter(@Valid @RequestBody Character character) {

        boolean isUpdated = characterService.updateCharacter(character);

        if (isUpdated) {
            log.info("Обновление информации о персонаже");
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }

    }

    @GetMapping
    public List<Character> getCharacters() {
        log.info("Вывод всех персонажей");
        return characterService.findAll();
    }

    @GetMapping("/combat_types")
    public List<CombatType> getCombatTypes() {
        log.info("Вывод всех возможных типов");
        return combatTypeService.findAll();
    }

}
