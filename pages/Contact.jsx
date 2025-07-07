import Head from 'next/head';
import styles from '../styles/contact.module.css';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Exelia Studio | Agencia Boutique Digital</title>
        <meta name="description" content="Exelia es tu agencia boutique de marketing digital. Creamos campañas, automatizamos ventas y potenciamos marcas desde Madrid para el mundo." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://www.exeliastudio.com/" />
        <meta property="og:title" content="Exelia Studio | Agencia Boutique Digital" />
        <meta property="og:description" content="Creamos campañas, automatizamos ventas y potenciamos marcas desde Madrid para el mundo." />
        <meta property="og:url" content="https://www.exeliastudio.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.exeliastudio.com/fondo.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.contactContainer}>
        <h2>Contáctanos</h2>
        <p className={styles.introText}>
          ¡Estamos aquí para ayudarte! Si tienes alguna pregunta o necesitas más información sobre nuestros servicios,
          no dudes en contactarnos. Te responderemos lo antes posible.
        </p>

        <div className={styles.contactInfo}>
          <div className={styles.contactCard}>
            <h3>Mario García</h3>
            <p>
              <strong>Teléfono:</strong> +34&nbsp;610&nbsp;197&nbsp;239
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:exeliastore@gmail.com">exeliastore@gmail.com</a>
            </p>
          </div>

          <div className={styles.contactCard}>
            <h3>Gabriela Malasquez</h3>
            <p>
              <strong>Teléfono:</strong> +34&nbsp;692&nbsp;20&nbsp;92&nbsp;04
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:exeliastore@gmail.com">exeliastore@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
