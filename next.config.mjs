/** @type {import('next').NextConfig} */
const nextConfig = {
    // to configure to random user Images from Next Images
    images: {
        remotePatterns:[
            { 
                protocol: 'https',
                hostname: 'randomuser.me',
            },
        ],
    },
    // to increase the uploading size limit
    experimental:{
        serverActions:{
            bodySizeLimit:"5mb",
        },
    },
};

export default nextConfig;
