"use client";

import styles from "@/components/card/style.module.css";
import Image from "next/image";
export default function Card() {
    return (
      
                <div className={styles.card}>
                    <Image src="" alt="Logo" width={50} height={50} />
                    <h2 className="PokemonName">Mewtow</h2>
                    <h3 className="PokemonId">1234567</h3>
                    <h4 className="pokemonType">pishyc</h4>
                    <button className={styles.SeeDetails}>Ver Detalhes</button>
                </div>

 
    );
}