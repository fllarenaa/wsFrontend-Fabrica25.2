"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";
import styles2 from "@/components/card/style.module.css";
import Card from "@/components/card/page";
import Header from "@/components/header/page";
import Hero from "@/components/hero/page";
import axios from "axios";

interface PokemonListItem {
  name: string;
  url: string;
}

interface PokemonType {
  type: {
    name: string;
  };
}

interface PokemonData {
  id: number;
  name: string;
  image: string;
  types: string[];
  weight: number;
  base_experience: number;
}

export default function Home() {
  const [pokemons, setPokemons] = useState<PokemonData[]>([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    try {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=50");
      const results: PokemonListItem[] = res.data.results;

      const detailedPokemons = await Promise.all(
        results.map(async (pokemon) => {
          const pokemonRes = await axios.get(pokemon.url);
          return {
            id: pokemonRes.data.id,
            name: pokemonRes.data.name,
            image: pokemonRes.data.sprites.front_default,
            types: pokemonRes.data.types.map((t: PokemonType) => t.type.name),
            weight: pokemonRes.data.weight,
            base_experience: pokemonRes.data.base_experience,
          };
        })
      );

      setPokemons(detailedPokemons);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.page}>
      <Header />
      <Hero />
      <div className={styles2.cardContainer}>
        {pokemons.map((pokemon) => (
          <Card
            key={pokemon.id}
            name={pokemon.name}
            id={pokemon.id}
            image={pokemon.image}
            types={pokemon.types}
            weight={pokemon.weight}
            base_experience={pokemon.base_experience}
          />
        ))}
      </div>
    </div>
  );
}
