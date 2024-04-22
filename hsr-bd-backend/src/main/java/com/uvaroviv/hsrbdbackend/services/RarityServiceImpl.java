package com.uvaroviv.hsrbdbackend.services;

import com.uvaroviv.hsrbdbackend.entities.Rarity;
import com.uvaroviv.hsrbdbackend.repositories.RarityRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RarityServiceImpl implements RarityService{

    private final RarityRepository rarityRepository;

    public RarityServiceImpl(RarityRepository rarityRepository) {
        this.rarityRepository = rarityRepository;
    }
    @Override
    public List<Rarity> findAll() {
        return rarityRepository.findAll();
    }
}
