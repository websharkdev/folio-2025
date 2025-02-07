import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Folio. Bortnytskyi | Front-end Developer ',
        short_name: 'Folio',
        description: 'It`s a personal website about Bortnytksyi Oleksii - Front-end Developer',
        start_url: '/',
        display: 'standalone',
        background_color: '#fff',
        theme_color: '#fff',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}