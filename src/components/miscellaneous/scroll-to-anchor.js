'use client';

import { useEffect, useState } from 'react';
import ChevronTopIcon from '@/components/svgs/chevron-top-icon';
import MailIcon from '@/components/svgs/mail-icon';
import ToggleTheme from '@/hooks/toggle-theme';

const ScrollToAnchor = ({ targetId = 'top', offset = 0, behavior = 'smooth' }) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsVisible(window.scrollY > 300);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToTarget = () => {
		const targetElement = document.getElementById(targetId);
		if (targetElement) {
			window.scrollTo({
				top: targetElement.offsetTop - offset,
				behavior,
			});
		} else {
			window.scrollTo({
				top: 0,
				behavior,
			});
		}
	};

	return (
		<>
			<div className='flex flex-col gap-y-10 fixed xl:bottom-14 bottom-4 xl:left-5 left-4 z-50'>
				<div className='block xl:hidden'>
					<ToggleTheme />
				</div>
			</div>
			{/* <BotsonicIcon /> */}
			<div className='flex flex-col gap-y-10 fixed bottom-10 xl:right-5 right-4 z-50'>
				<button className='w-14 h-14 flex items-center justify-center bg-blue-400 text-white rounded-full shadow-lg hover:bg-eduskill-dark transition-all duration-300'>
					<MailIcon className='fill-white' />
				</button>

				{isVisible && (
					<button onClick={scrollToTarget} className='w-14 h-14 flex items-center justify-center bg-eduskill-400 text-white rounded-full shadow-lg hover:bg-eduskill-dark transition-all duration-300' aria-label='Scroll to top'>
						<ChevronTopIcon className='fill-white' />
					</button>
				)}
			</div>
		</>
	);
};

export default ScrollToAnchor;
