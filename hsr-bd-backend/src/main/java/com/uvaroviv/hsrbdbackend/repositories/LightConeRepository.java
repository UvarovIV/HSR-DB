package com.uvaroviv.hsrbdbackend.repositories;

import com.uvaroviv.hsrbdbackend.entities.LightCone;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LightConeRepository extends JpaRepository<LightCone, Long> {
}
