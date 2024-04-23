package com.uvaroviv.hsrbdbackend.controllers.DTO;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;

import java.util.List;

@Getter
public class EnemySaveRq {
    private final String name;

    private final String pathToImg;

    private final List<String> combatTypes;

    public EnemySaveRq(@JsonProperty("name") String name,
                       @JsonProperty("pathToImg") String pathToImg,
                       @JsonProperty("combatTypes") List<String> combatTypes) {
        this.name = name;
        this.pathToImg = pathToImg;
        this.combatTypes = combatTypes;
    }
}
