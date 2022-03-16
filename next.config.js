module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/now-playing',
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['image.tmdb.org', 'i.pravatar.cc', 'upload.wikimedia.org'],
  },
  reactStrictMode: true,
};
