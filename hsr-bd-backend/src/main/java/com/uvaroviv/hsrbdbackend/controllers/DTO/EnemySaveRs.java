package com.uvaroviv.hsrbdbackend.controllers.DTO;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class EnemySaveRs {

    private final Long id;
    private final String name;

    private final String pathToImg;

    private final List<String> combatTypes;

    public EnemySaveRs(@JsonProperty("id") Long id,
                       @JsonProperty("name") String name,
                       @JsonProperty("pathToImg") String pathToImg,
                       @JsonProperty("combatTypes") List<String> combatTypes) {
        this.id = id;
        this.name = name;
        this.pathToImg = pathToImg;
        this.combatTypes = combatTypes;
    }
}
