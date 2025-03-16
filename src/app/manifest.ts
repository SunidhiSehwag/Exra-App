import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    short_name: 'Exra',
    name: 'Exra-Its Simple',
    start_url: '/',
    display: 'standalone',
    theme_color: '#F7F9FE',
    background_color: '#F7F9FE',
    icons: [
      {
        'src': '/images/ExraLogo.png',
        'sizes': '800x800',
        'type': 'image/jpeg'
      }
    ]
  };
}
