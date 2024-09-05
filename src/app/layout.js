import { ThemeProvider } from 'next-themes';
import { Inter as Font } from 'next/font/google';
import { Credit } from '@/components/credit/credit';
import { NotReadyResponsive } from '@/components/miscellaneous/not-ready-responsive';
import ScrollToAnchor from '@/components/miscellaneous/scroll-to-anchor';
import { Header } from '@/components/navigation/header';
import { ProgressBarProvider } from '@/components/providers/progress-bar-provider';
import '@/styles/globals.css';
import { Footer } from '@/components/footer/footer';

const font = Font({ subsets: ['latin'] });

export const metadata = {
	title: {
		template: 'Eduskill | %s ',
		default: 'Eduskill',
	},
	description: 'Eduskill - Learning Course',
};

export const viewport = {
	width: 'device-width',
	height: 'device-height',
	initialScale: 1.0,
	userScalable: false,
	targetDensitydpi: 'device-dpi',
};

export default function RootLayout({ children, hideNavbar }) {
	return (
		<html lang='id' suppressHydrationWarning={true} className='scroll-smooth'>
			<body className={font.className}>
				<ThemeProvider attribute='class'>
					<ProgressBarProvider>
						<main className='h-full flex flex-col'>
							{!hideNavbar && <Header />}
							{children}
                            <Footer />
							<Credit />
							<ScrollToAnchor />
						</main>
					</ProgressBarProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
