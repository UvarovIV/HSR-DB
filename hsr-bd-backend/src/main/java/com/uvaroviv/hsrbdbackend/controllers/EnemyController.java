package com.uvaroviv.hsrbdbackend.controllers;

import com.uvaroviv.hsrbdbackend.controllers.DTO.EnemyByIdRq;
import com.uvaroviv.hsrbdbackend.controllers.DTO.EnemySaveRq;
import com.uvaroviv.hsrbdbackend.entities.CombatType;
import com.uvaroviv.hsrbdbackend.entities.Enemy;
import com.uvaroviv.hsrbdbackend.entities.EnemyCombatType;
import com.uvaroviv.hsrbdbackend.repositories.CombatTypeRepository;
import com.uvaroviv.hsrbdbackend.repositories.EnemyCombatTypeRepository;
import com.uvaroviv.hsrbdbackend.services.EnemyService;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@Slf4j
@RestController
@RequestMapping(EnemyService.ENEMY_BASE_PATH)
public class EnemyController {

    private final EnemyService enemyService;
    private final EnemyCombatTypeRepository enemyCombatTypeRepository;
    private final CombatTypeRepository combatTypeRepository;

    public EnemyController(EnemyService enemyService, EnemyCombatTypeRepository enemyCombatTypeRepository, CombatTypeRepository combatTypeRepository) {
        this.enemyService = enemyService;
        this.enemyCombatTypeRepository = enemyCombatTypeRepository;
        this.combatTypeRepository = combatTypeRepository;
    }

    @PostMapping
    public ResponseEntity<?> addEnemy(@Valid @RequestBody EnemySaveRq enemy) {
        Enemy rq = new Enemy(null, enemy.getName(), enemy.getPathToImg());
        long enemyId = enemyService.create(rq);
        rq.setId(enemyId);

        List<CombatType> weakness = combatTypeRepository.findAll().stream()
                .filter(combatType -> enemy.getCombatTypes().contains(combatType.getName())).toList();
        for (CombatType combatType: weakness) {
            enemyCombatTypeRepository.save(new EnemyCombatType(null, rq, combatType));
        }

        if ( enemyId == -1 ) {
            return ResponseEntity.badRequest().body("Введена некорректная информация");
        }
        log.info( "Добавление врага {}", enemy );
        return ResponseEntity.created(URI.create("/enemies/" + enemyId)).build();
    }

    @DeleteMapping("/{enemyId}")
    @Transactional
    public ResponseEntity<?> deleteEnemy(@PathVariable long enemyId) {

        enemyCombatTypeRepository.deleteAllByEnemyId(enemyId);
        boolean isDeleted = enemyService.delete(enemyId);

        if (isDeleted) {
            log.info("Удаление врага по id");
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping
    public ResponseEntity<?> updateEnemy(@Valid @RequestBody Enemy enemy) {

        boolean isUpdated = enemyService.update(enemy);

        if (isUpdated) {
            log.info("Обновление информации о враге");
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }

    }

    @GetMapping
    public List<Enemy> getEnemy() {
        log.info("Вывод всех врагов");
        return enemyService.findAll();
    }

    @PostMapping(EnemyService.ENEMY_BY_ID)
    public Enemy getEnemyById( EnemyByIdRq enemy ) {
        return enemyService.findById( enemy.id() );
    }
}
