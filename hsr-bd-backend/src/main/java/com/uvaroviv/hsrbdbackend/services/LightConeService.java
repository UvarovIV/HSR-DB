package com.uvaroviv.hsrbdbackend.services;

import com.uvaroviv.hsrbdbackend.entities.LightCone;

import java.util.List;

public interface LightConeService {
    Long createLightCone(LightCone lightCone);

    boolean deleteLightCone(Long lightConeId);

    boolean updateLightCone(LightCone lightCone);

    List<LightCone> findAll();

}
