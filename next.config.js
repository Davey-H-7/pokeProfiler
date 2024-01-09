/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol:'https',
                hostname:'raw.githubusercontent.com',
                pathname:'/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/**'
            }
        ]
    }
}
