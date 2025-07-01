import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; 2025 Exelia. Todos los derechos reservados.</p>

        <div className={styles.footerLinks}>
          <a href="/" className={styles.footerLink}>Política de privacidad</a>
          <a href="/" className={styles.footerLink}>Términos de servicio</a>
        </div>
      </div>
    </footer>
  );
}
