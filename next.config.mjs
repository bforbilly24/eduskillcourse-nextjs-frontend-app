/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'dashboard.eduskill.id',
				port: '', 
				pathname: '/storage/**',
			},
		],
	},
};

export default nextConfig;
