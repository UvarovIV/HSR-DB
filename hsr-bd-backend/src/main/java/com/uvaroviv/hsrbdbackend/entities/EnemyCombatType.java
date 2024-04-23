package com.uvaroviv.hsrbdbackend.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import java.util.List;

@Entity
@Table(name = "enemy_combat_type")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class EnemyCombatType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NonNull
    @ManyToOne
    @JoinColumn(name = "enemy_id", nullable = false)
    private Enemy enemy;

    @NonNull
    @ManyToOne
    @JoinColumn(name = "combat_type_id", nullable = false)
    private CombatType combatType;
}
