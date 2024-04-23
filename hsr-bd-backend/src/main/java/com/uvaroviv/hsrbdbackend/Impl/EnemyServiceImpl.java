package com.uvaroviv.hsrbdbackend.Impl;

import com.uvaroviv.hsrbdbackend.entities.Enemy;
import com.uvaroviv.hsrbdbackend.repositories.EnemyRepository;
import com.uvaroviv.hsrbdbackend.services.EnemyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EnemyServiceImpl implements EnemyService {


    private final EnemyRepository enemyRepository;

    @Autowired
    public EnemyServiceImpl( EnemyRepository enemyRepository ) {
        this.enemyRepository = enemyRepository;
    }

    @Override
    public Long create( Enemy enemy ) {
        return enemyRepository.save( enemy ).getId();
    }

    @Override
    public boolean delete( Long enemyId ) {
        enemyRepository.deleteById( enemyId );
        return true;
    }

    @Override
    public boolean update( Enemy enemy ) {
        Enemy oldEnemy = findById( enemy.getId() );

        if ( !oldEnemy.getName().equals( enemy.getName() ) ) {
            oldEnemy.setName(enemy.getName());
        }
        if( !oldEnemy.getPathToImg().equals( enemy.getPathToImg() ) ) {
            oldEnemy.setPathToImg( enemy.getPathToImg() );
        }

        enemyRepository.save( oldEnemy );

        return true;
    }

    @Override
    public List<Enemy> findAll() {
        return enemyRepository.findAll();
    }

    @Override
    public Enemy findById( Long id ) {
        Optional<Enemy> enemy = enemyRepository.findById( id );
        return enemy.orElse(null);
    }
}
