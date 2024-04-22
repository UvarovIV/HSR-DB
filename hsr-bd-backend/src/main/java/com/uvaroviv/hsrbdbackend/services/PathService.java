package com.uvaroviv.hsrbdbackend.services;

import com.uvaroviv.hsrbdbackend.entities.Path;

import java.util.List;

public interface PathService {

    Integer createPath(Path path);
    List<Path> findAll();
}
