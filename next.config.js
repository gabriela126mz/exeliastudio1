// next-sitemap.config.js
module.exports = {
  siteUrl: 'https://www.exeliastudio.com',
  generateRobotsTxt: true,
  exclude: [
    '/landingpage',   //  ← ruta vieja que da 404
    '/contact',  
    '/Services', //  ← añade todas las que quieras ocultar
  ],
};
