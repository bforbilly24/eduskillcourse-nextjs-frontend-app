'use client';

import { useEffect, useState } from 'react';
import { Navbar } from '@/components/navigation/navbar';

function Header() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const headerBlur = document.getElementById('headerBlur');
			if (headerBlur) {
				const { top } = headerBlur.getBoundingClientRect();
				if (top <= 0) {
					if (!isScrolled) {
						setIsScrolled(true);
						// console.log('Header blur');
					}
				} else {
					if (isScrolled) {
						setIsScrolled(false);
						// console.log('Header transparent');
					}
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [isScrolled]);

	return (
		<header className={`transition-shadow duration-300 fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'bg-white/60 shadow-md backdrop-blur-3xl ' : 'bg-transparent'} dark:bg-gray-950/80 dark:backdrop-blur-xl`}>
			<Navbar />
		</header>
	);
}

export { Header };
