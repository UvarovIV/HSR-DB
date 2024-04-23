package com.uvaroviv.hsrbdbackend.services;

import com.uvaroviv.hsrbdbackend.entities.Enemy;

import java.util.List;

public interface EnemyService {

    String ENEMY_BASE_PATH = "/enemies";
    String ENEMY_BY_ID = "/info";

    Long create( Enemy enemy );

    boolean delete( Long enemyId );

    boolean update( Enemy enemy );

    List<Enemy> findAll();

    Enemy findById( Long id );

}
