package com.uvaroviv.hsrbdbackend.services;

import com.uvaroviv.hsrbdbackend.entities.CombatType;
import com.uvaroviv.hsrbdbackend.entities.Path;

import java.util.List;

public interface CombatTypeService {
    Long createCombatType(CombatType combatType);
    List<CombatType> findAll();
}
