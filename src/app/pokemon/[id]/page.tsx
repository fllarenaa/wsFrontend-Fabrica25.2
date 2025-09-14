"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Image from "next/image";

interface PokemonDetail {
  id: number;
  name: string;
  sprites: { front_default: string };
  types: { type: { name: string } }[];
  weight: number;
  base_experience: number;
  abilities: { ability: { name: string } }[];
  stats: { base_stat: number; stat: { name: string } }[];
}

export default function PokemonPage() {
  const { id } = useParams(); // pega o ID da URL
  const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      setPokemon(res.data);
    };
    fetchPokemon();
  }, [id]);

  if (!pokemon) return <p>Carregando...</p>;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>
        {pokemon.name} #{pokemon.id}
      </h1>
      <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={150} height={150} />
      <p>Tipo(s): {pokemon.types.map((t) => t.type.name).join(" / ")}</p>
      <p>Peso: {pokemon.weight / 10} kg</p>
      <p>EXP Base: {pokemon.base_experience}</p>
      <p>Habilidades: {pokemon.abilities.map((a) => a.ability.name).join(", ")}</p>

      <h3>Stats:</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {pokemon.stats.map((s) => (
          <li key={s.stat.name}>
            {s.stat.name}: {s.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
}
