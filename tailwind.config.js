/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	prefix: '',
	theme: {
		container: {
			padding: '2.5rem',
			screens: {
				// sm: '100%', 
				// md: '100%',
				// lg: '1024px',
				// '2xl': '1440px',
				'2xl': '1280px',
			},
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					50: '#F5F5F5',
					100: '#EAEAEB',
					200: '#CBCBCC',
					300: '#ACACAD',
					400: '#6E6D70',
					500: '#302F32',
					600: '#2B2A2D',
					700: '#1D1C1E',
					800: '#161517',
					900: '#0E0E0F',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				eduskill: {
					DEFAULT: '#FF7B00',
					400: '#F8A62B',
					500: '#FF7B00',
					600: '#101828',
					card: '#F5F5F4',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				'badge-primary': {
					DEFAULT: '#555555',
				},
				'badge-secondary': {
					DEFAULT: '#04503B',
				},
				'badge-error': {
					DEFAULT: '#B91C1C',
				},
			},
			gridTemplateColumns: {
				'eduskill-footer': '20rem repeat(3, 11.5rem) 20rem',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			boxShadow: {
				'online-courses': '0px 18.36px 38.25px rgba(0, 0, 0, 0.15)',
				'video-courses': '0px 18.36px 38.25px rgba(13, 12, 56, 0.15)',
				custom: '0 4px 6px 0 rgba(16, 24, 40, 0.03)',
			},
		},
	},
	plugins: [],
};
