"use client";

import styles from "@/components/header/style.module.css";
import "@/app/globals.css";
// import {  } from "module";
import Image from "next/image";
// import { Logo } from "@/public/Logo.png";
export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
            <Image src="/Logo.png" alt="Logo" width={50} height={50}/>
                <ul className={styles.menu}>
                    <li className={styles.optionHeader}>Início</li>
                    <li className={styles.optionHeader}>Pokemon</li>
                    <li className={styles.optionHeader}>Favoritos</li>
                    <li className={styles.optionHeader}>Estatísticas</li>
                </ul>
            </nav>
        </header>
    );
}