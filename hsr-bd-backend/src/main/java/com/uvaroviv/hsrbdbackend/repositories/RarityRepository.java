package com.uvaroviv.hsrbdbackend.repositories;

import com.uvaroviv.hsrbdbackend.entities.Rarity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RarityRepository extends JpaRepository<Rarity, Integer> {
}
