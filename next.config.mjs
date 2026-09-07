/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // 1. Redirection 301 du domaine .fr vers .com (avec conservation du chemin)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: '(.*)stratec-digital\\.fr',
          },
        ],
        destination: 'https://stratec-digital.com/:path*',
        permanent: true,
      },
      // 2. Redirection 301 des anciennes pages static HTML vers les nouvelles pages Next.js
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/about.html',
        destination: '/qui-sommes-nous',
        permanent: true,
      },
      {
        source: '/services-tarifs.html',
        destination: '/services-et-tarifs',
        permanent: true,
      },
      {
        source: '/contact.html',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/portfolio.html',
        destination: '/portfolio',
        permanent: true,
      },
      {
        source: '/RGPDcookies.html',
        destination: '/rgpd-cookies',
        permanent: true,
      },
      {
        source: '/mentionslegales.html',
        destination: '/mentions-legales',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
