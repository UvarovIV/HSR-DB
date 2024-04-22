package com.uvaroviv.hsrbdbackend.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@Table(name = "combat_types")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CombatType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 40)
    private String name;

    @Column
    private String pathToImage;

}
