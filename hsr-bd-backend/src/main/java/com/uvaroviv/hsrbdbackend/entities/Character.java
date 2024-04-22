package com.uvaroviv.hsrbdbackend.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "characters")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Character {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 40)
    private String name;

    @ManyToOne
    @JoinColumn(name = "rarity_id", nullable = false)
    private Rarity rarity;

    @ManyToOne
    @JoinColumn(name = "path_id", nullable = false)
    private Path path;

    @ManyToOne
    @JoinColumn(name = "combat_type_id", nullable = false)
    private CombatType combatType;

    @Column
    private String pathToImg;
}
