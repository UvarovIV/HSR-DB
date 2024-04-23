package com.uvaroviv.hsrbdbackend.Impl;

import com.uvaroviv.hsrbdbackend.entities.Rarity;
import com.uvaroviv.hsrbdbackend.repositories.RarityRepository;
import com.uvaroviv.hsrbdbackend.services.RarityService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RarityServiceImpl implements RarityService {

    private final RarityRepository rarityRepository;

    public RarityServiceImpl(RarityRepository rarityRepository) {
        this.rarityRepository = rarityRepository;
    }
    @Override
    public List<Rarity> findAll() {
        return rarityRepository.findAll();
    }
}
