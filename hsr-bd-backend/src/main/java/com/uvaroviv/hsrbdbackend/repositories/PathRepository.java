package com.uvaroviv.hsrbdbackend.repositories;

import com.uvaroviv.hsrbdbackend.entities.Path;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PathRepository extends JpaRepository<Path, Integer> {

}
