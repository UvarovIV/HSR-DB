package com.uvaroviv.hsrbdbackend.Impl;

import com.uvaroviv.hsrbdbackend.entities.CombatType;
import com.uvaroviv.hsrbdbackend.repositories.CombatTypeRepository;
import com.uvaroviv.hsrbdbackend.services.CombatTypeService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CombatTypeServiceImpl implements CombatTypeService {

    CombatTypeRepository combatTypeRepository;

    CombatTypeServiceImpl(CombatTypeRepository combatTypeRepository) {
        this.combatTypeRepository = combatTypeRepository;
    }

    @Override
    public Long createCombatType(CombatType combatType) {
        return combatTypeRepository.save(combatType).getId();
    }

    @Override
    public List<CombatType> findAll() {
        return combatTypeRepository.findAll();
    }
}
