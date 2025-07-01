import Head from 'next/head';
import styles from '../styles/contact.module.css';

export default function Contact() {
  return (
    <>
       <Head>
        <title>Contacto | Exelia Studio</title>
        <meta name="description" content="¿Quieres impulsar tu proyecto? Contáctanos para una propuesta personalizada." />
        <meta name="keywords" content="contacto, hablar con exelia, whatsapp, propuesta digital" />

        <meta property="og:title" content="Contacto | Exelia Studio" />
        <meta property="og:description" content="Hablemos sobre tu idea. Agenda una llamada con Exelia Studio gratuita." />
        <meta property="og:image" content="/logofinal.png" />
        <meta property="og:url" content="https://www.exeliastudio.com/contact" />
        <meta property="og:type" content="website" />
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
