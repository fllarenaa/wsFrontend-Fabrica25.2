"use client";

import { types } from "util";
import styles from "./style.module.css";
import Image from "next/image";
import Link from "next/link";


interface CardProps {
    name: string;
    id: number;
    image: string;
    types: string[];
    weight: number;
    base_experience: number;
}

export default function Card({ name, id, image, types, weight, base_experience }: CardProps) {
    return (
        <div className={styles.card}>
            <Image src={image} alt={name} width={80} height={80} />
            <h2 className={styles.pokemonName}>{name}</h2>
            <h3 className={styles.pokemonId}>#{id}</h3>
            <h4 className={styles.pokemonType}>Tipo: {types.join("/ ")}</h4>
            <h4 className={styles.pokemonType}>Peso: {weight / 10} Kg</h4>
            <h4 className={styles.pokemonType}>EXP Base: {base_experience}</h4>
            <Link href={`/pokemon/${id}`}><button className={styles.SeeDetails}>Ver Detalhes</button></Link>
            {/* <button className={styles.SeeDetails}>Ver Detalhes</button> */}
        </div>
    );
}
