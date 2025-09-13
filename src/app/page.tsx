// import Image from "next/image";
import styles from "./page.module.css";
import  Card from "@/components/card/page";
import  Header from "@/components/header/page";


export default function Home() {
  return (
    <div className={styles.page}>
      <Card/>
      <Header/>
    </div>
  );
}
