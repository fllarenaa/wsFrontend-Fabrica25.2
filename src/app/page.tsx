// import Image from "next/image";
import styles from "./page.module.css";
import  Card from "@/components/card/page";
import  Header from "@/components/header/page";
import  Hero from "@/components/hero/page";
import axios from "axios";


export default function Home() {
  axios.get("https://pokeapi.co/api/v2/pokemon/").then((res) => console.log(res.data));
  return (
    <div className={styles.page}>
      
      <Header/>
      <Hero/>
      <Card/>
    </div>
  );
}
