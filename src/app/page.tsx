// import Image from "next/image";

import { useState, useEffect } from "react";
import styles from "./page.module.css";
import  Card from "@/components/card/page";
import  Header from "@/components/header/page";
import  Hero from "@/components/hero/page";
// import GridContainer from "@/components/grid/page";
import axios from "axios";
// import { useEffect } from "react";


export default function Home() {

  useEffect(() => {
    getPokemons();
  }, []);
  const getPokemons = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=50")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  
  return (
    <div className={styles.page}>
      
      <Header/>
      <Hero/>
      <Card/>
    </div>
  );
}
