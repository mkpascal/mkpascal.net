module.exports = {
    async redirects() {
        return [
            {
                source: '/about',
                destination: '/',
                permanent: true
            },
            {
                source: '/posts',
                destination: '/articles',
                permanent: true
            },
            {
                source: '/projects',
                destination: '/',
                permanent: true
            },
            {
                source: '/2015/10/25/broadcast-audio-liquidsoap.html',
                destination: '/posts/broadcast-audio-liquidsoap',
                permanent: true
            },
            {
                source: '/2011/12/26/easymp-2-77-for-os-x-lion.html',
                destination: '/posts/easymp-2-77-for-os-x-lion',
                permanent: true

            }
        ]
    },
}
