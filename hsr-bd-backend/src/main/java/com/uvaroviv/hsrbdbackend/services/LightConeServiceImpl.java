package com.uvaroviv.hsrbdbackend.services;

import com.uvaroviv.hsrbdbackend.entities.LightCone;
import com.uvaroviv.hsrbdbackend.repositories.LightConeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LightConeServiceImpl implements LightConeService {

    LightConeRepository lightConeRepository;

    LightConeServiceImpl(LightConeRepository lightConeRepository) {
        this.lightConeRepository = lightConeRepository;
    }

    @Override
    public Long createLightCone(LightCone lightCone) {
        return lightConeRepository.save(lightCone).getId();
    }

    @Override
    public boolean deleteLightCone(Long lightConeId) {
        Optional<LightCone> lightCone = lightConeRepository.findById(lightConeId);
        if (lightCone.isPresent()) {
            lightConeRepository.deleteById(lightConeId);
            return true;
        }
        return false;
    }

    @Override
    public boolean updateLightCone(LightCone lightCone) {
        boolean lightConeExist = lightConeRepository.existsById(lightCone.getId());
        if (lightConeExist) {
            lightConeRepository.save(lightCone);
            return true;
        }
        return false;
    }

    @Override
    public List<LightCone> findAll() {
        return lightConeRepository.findAll();
    }
}
