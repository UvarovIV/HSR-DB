package com.uvaroviv.hsrbdbackend.controllers;

import com.uvaroviv.hsrbdbackend.entities.LightCone;
import com.uvaroviv.hsrbdbackend.entities.Path;
import com.uvaroviv.hsrbdbackend.entities.Rarity;
import com.uvaroviv.hsrbdbackend.services.LightConeService;
import com.uvaroviv.hsrbdbackend.services.PathService;
import com.uvaroviv.hsrbdbackend.services.RarityService;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("light_cones")
public class LightConeController {
    private final PathService pathService;
    private final RarityService rarityService;
    private final LightConeService lightConeService;

    @Autowired
    public LightConeController(PathService pathService, RarityService rarityService, LightConeService lightConeService) {
        this.pathService = pathService;
        this.rarityService = rarityService;
        this.lightConeService = lightConeService;
    }

    @PostMapping
    public ResponseEntity<?> addLightCone(@Valid @RequestBody LightCone lightCone) {
        long lightConeId = lightConeService.createLightCone(lightCone);
        if (lightConeId == -1) {
            return ResponseEntity.badRequest().body("Введена некорректная информация");
        }
        log.info("Добавление светового конуса {}", lightCone);
        return ResponseEntity.created(URI.create("/light_cones/" + lightConeId)).build();
    }

    @DeleteMapping("/{lightConeId}")
    public ResponseEntity<?> deleteLightCone(@PathVariable long lightConeId) {
        boolean isDeleted = lightConeService.deleteLightCone(lightConeId);

        if (isDeleted) {
            log.info("Удаление светового конуса по id");
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping
    public ResponseEntity<?> updateLightCone(@Valid @RequestBody LightCone lightCone) {

        boolean isUpdated = lightConeService.updateLightCone(lightCone);

        if (isUpdated) {
            log.info("Обновление информации о световом конусе");
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }

    }

    @GetMapping
    public List<LightCone> getLightCones() {
        log.info("Вывод всех световых конусов");
        return lightConeService.findAll();
    }

    @GetMapping("/rarities")
    public List<Rarity> getRarities() {
        log.info("Вывод всех возможных редкостей");
        return rarityService.findAll();
    }

    @GetMapping("/paths")
    public List<Path> getPaths() {
        log.info("Вывод всех возможных путей");
        return pathService.findAll();
    }
}
