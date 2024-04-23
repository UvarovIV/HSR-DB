package com.uvaroviv.hsrbdbackend.Impl;

import com.uvaroviv.hsrbdbackend.entities.Path;
import com.uvaroviv.hsrbdbackend.repositories.PathRepository;
import com.uvaroviv.hsrbdbackend.services.PathService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PathServiceImpl implements PathService {

    private final PathRepository pathRepository;

    PathServiceImpl(PathRepository pathRepository) {
        this.pathRepository = pathRepository;
    }

    @Override
    public Integer createPath(Path path) {
        return pathRepository.save(path).getId();
    }

    @Override
    public List<Path> findAll() {
        return pathRepository.findAll();
    }
}
