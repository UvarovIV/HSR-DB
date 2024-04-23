package com.uvaroviv.hsrbdbackend.repositories;

import com.uvaroviv.hsrbdbackend.entities.EnemyCombatType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EnemyCombatTypeRepository extends JpaRepository<EnemyCombatType, Long> {
    public void deleteAllByEnemyId(Long enemyId);
}
