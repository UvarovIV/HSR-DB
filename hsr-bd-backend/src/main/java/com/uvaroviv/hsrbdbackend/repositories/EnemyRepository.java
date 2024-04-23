package com.uvaroviv.hsrbdbackend.repositories;

import com.uvaroviv.hsrbdbackend.entities.Enemy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EnemyRepository extends JpaRepository<Enemy, Long> {
}
