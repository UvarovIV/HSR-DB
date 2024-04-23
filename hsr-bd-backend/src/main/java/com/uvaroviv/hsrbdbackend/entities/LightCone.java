package com.uvaroviv.hsrbdbackend.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "light_cones")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class LightCone {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 30)
    private String name;

    @ManyToOne
    @JoinColumn(name = "rarity_id", nullable = false)
    private Rarity rarity;

    @ManyToOne
    @JoinColumn(name = "path_id", nullable = false)
    private Path path;

    @Column
    private String pathToImg;

    @Column(length = 1000)
    private String description;

    @Column
    private Integer minLevelHealthPoints;

    @Column
    private Integer minLevelAttack;

    @Column
    private Integer minLevelDefense;

    @Column
    private Integer maxLevelHealthPoints;

    @Column
    private Integer maxLevelAttack;

    @Column
    private Integer maxLevelDefense;

}
