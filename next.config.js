/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [
      {
        source: '/landingpage',
        destination: '/',      
        permanent: true,       
      },
       {
        source: '/contact',
        destination: '/',      
        permanent: true,       
      },
       {
        source: '/Services',
        destination: '/',      
        permanent: true,       
      },
    ];
  },
};
