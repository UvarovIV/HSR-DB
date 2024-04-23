package com.uvaroviv.hsrbdbackend.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import java.util.List;

@Entity
@Table(name = "enemies")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Enemy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NonNull
    @Column(length = 40)
    private String name;

    @NonNull
    @Column
    private String pathToImg;

}
