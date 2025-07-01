import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
    <div className={styles.navContent}>
      <div className={styles.logoContainer}>
        <Image
          className={styles.logo}
          src="/logofinal.png"
          alt="Logo Exelia"
          width={145}
          height={130}
        />
      </div>

      <div className={styles.menuWrapper}>
        <div className={styles.navLinks}>
           <Link href="/">Inicio</Link>
          <Link href="/Services">Servicios</Link> 
          <Link href="/About">Sobre nosotros</Link>
          <Link href="/Contact">Contacto</Link>
        </div>
      </div>
    </div>
  </nav>

  );
}
