import Head from 'next/head';
import styles from '../styles/about.module.css'; 
export default function About() {
  return (
    <>
      <Head>   
        <title>Exelia Studio | Agencia Boutique Digital</title>
        <meta name="description" content="Exelia es tu agencia boutique de marketing digital. Creamos campañas, automatizamos ventas y potenciamos marcas desde Madrid para el mundo." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.exeliastudio.com/" />
        <meta property="og:title" content="Exelia Studio | Agencia Boutique Digital" />
        <meta property="og:description" content="Creamos campañas, automatizamos ventas y potenciamos marcas desde Madrid para el mundo." />
        <meta property="og:url" content="https://www.exeliastudio.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.exeliastudio.com/fondo.png" />
        <link rel="icon" href="/logofinal.png" />
      </Head>

      <div className={styles.aboutContainer}>
        <h3 className={styles.aboutTitle}>Conectamos ideas con resultados reales</h3>

        <p className={styles.aboutDescription}>
          En un mundo cada vez más competitivo y digital, Exelia nace con una misión clara: ayudar a marcas,
          negocios y profesionales a crecer de forma consciente, estratégica y efectiva. Ya no hablamos de solo
          estar online: hablamos de destacar, conectar y vender.
          <br />
          Somos una agencia de marketing digital especializada en soluciones digitales personalizadas, que combina
          estrategia, diseño y tecnología para impulsar negocios con alma.
        </p>

        <p className={styles.aboutDescription}>
          <b>Nuestra visión:</b>
          <br />
          Empoderar a emprendedores, negocios minoristas, centros de salud, franquicias y marcas personales para que:
          <br />
          🔹 Aumenten sus ventas con procesos más inteligentes.
          <br />
          🔹 Construyan una imagen potente y coherente.
          <br />
          🔹 Se apoyen en tecnología accesible para crecer con orden.
          <br />
          🔹 Tengan acompañamiento real, sin promesas vacías.
          <br />
          Nos mueve ver a nuestros clientes crecer con propósito, diseño y resultados medibles.
        </p>

        <p className={styles.aboutDescription}>
          <b>¿Por qué trabajar con un partner digital?</b>
          <br />
          Porque no vendemos servicios sueltos: construimos contigo estrategias completas que funcionan.
          <br />
          🔹 Creamos tu presencia digital desde cero: web, identidad, contenido y automatización.
          <br />
          🔹 Diseñamos campañas que venden: en Meta, Google, YouTube, TikTok o donde esté tu cliente.
          <br />
          🔹 Formamos y capacitamos equipos reales: desde atención hasta cierre de ventas.
          <br />
          🔹 Auditamos tu negocio digital: para ordenar, automatizar y multiplicar tus oportunidades.
          <br />
          <br />
          <b>¿Por qué elegir Exelia?</b>
          <br />
          🔹 Atención personalizada, no soluciones genéricas.
          <br />
          🔹 Estilo cercano, profesional y orientado a resultados.
          <br />
          🔹 Acompañamiento real, con seguimiento y mejoras continuas.
          <br />
          🔹 Creatividad con estrategia: cada paso tiene un porqué.
        </p>
      </div>
    </>
  );
}
