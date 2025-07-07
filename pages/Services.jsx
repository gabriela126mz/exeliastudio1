
import Head from 'next/head';
import styles from '../styles/services.module.css';
import MetaTags from "../components/MetaTags";


export default function Services() {
      
      <Head>
        <MetaTags />
        <title>Exelia Studio | Agencia Boutique Digital</title>
        <meta name="description" content="Exelia es tu agencia boutique de marketing digital. Creamos campañas, automatizamos ventas y potenciamos marcas desde Madrid para el mundo." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.exeliastudio.com/Services" />
        <meta property="og:title" content="Exelia Studio | Agencia Boutique Digital" />
        <meta property="og:description" content="Creamos campañas, automatizamos ventas y potenciamos marcas desde Madrid para el mundo." />
        <meta property="og:url" content="https://www.exeliastudio.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.exeliastudio.com/fondo.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

  const services = [
    {
      title: "Webs y Automatización",
      includes: [
        "Web adaptable a cualquier pantalla",
        "Optimización SEO y SEM",
        "Landing page moderna y efectiva",
        "Formulario de contacto funcional",
        "Dominio y hosting",
      ],
      price: "600€",
      message: "Hola Exelia, estoy interesado/a en el servicio de Webs y Automatización. ¿Podrías contarme más?"
    },
    {
      title: "Creación de videos y anuncios",
      includes: [
        "Gestión de campañas Meta Ads , Google Ads,  Tik Tok Ads, Youtube Ads",
        "Informes semanales de rendimiento publicitarios",
        "Diseño de anuncios publicitarios",
      ],
      price: "250€",
      message: "Hola Exelia, quiero más información sobre el servicio de Creación de videos y anuncios."
    },
    {
      title: "Contenido Profesional",
      includes: [
        "Planificación y guionización semanal",
        "Edición profesional con efectos y música de tendencia",
        "Adaptaciones por formato (stories, carruseles, reels)",
        "Creación de Reels, videos, fotos y piezas gráficas",
      ],
      price: "300€",
      message: "Hola Exelia, me interesa el servicio de Contenido profesional. ¿Me das más detalles?"
    },
    {
      title: "Identidad Visual",
      includes: [
        "Identidad y branding estratégico profesional",
        "Paleta de colores y tipografías",
        "Diseño de tarjetas digitales",
        "Plantillas gráficas base para redes o presentaciones"
      ],
      price: "250€",
      message: "Hola Exelia, quiero saber más sobre el servicio de Identidad visual."
    },
    {
      title: "Formación y Mentoría",
      includes: [
        "Diagnóstico comercial inicial",
        "Capacitación en técnicas de venta dinámica",
        "Revisión y mejora de procesos",
        "Soporte por WhatsApp",
      ],
      price: "350€",
      message: "Hola Exelia, me interesa la Formación y Mentoría. ¿Podemos hablar?"
    },
    {
      title: "Consultoría Digital",
      includes: [
        "Asesoría en automatización y digitalización",
        "Revisión de procesos actuales",
        "Recomendaciones tecnológicas",
      ],
      price: "99€",
      message: "Hola Exelia, quisiera más info sobre Consultoría digital. ¡Gracias!"
    },
  ];

  return (
    <>
      <Head>
        <title>Servicios | Exelia Studio</title>
        <meta
          name="description"
          content="Descubre nuestros servicios: publicidad, automatización, diseño web y más para hacer crecer tu negocio."
        />
      </Head>

      <section className={styles.servicesSection}>
        <h2 className={styles.servicesTitle}>Nuestros Servicios</h2>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div className={styles.serviceCard} key={index}>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <ul className={styles.serviceIncludes}>
                {service.includes.map((item, i) => (
                  <li key={i}>✔ {item}</li>
                ))}
              </ul>
              <p className={styles.servicePrice}>Desde: {service.price}</p>
              <a
                className={styles.serviceButton}
                href={`https://wa.me/34610197239?text=${encodeURIComponent(service.message)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Saber más
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
