'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import CloseIcon from '@/components/svgs/close-icon';
import HamburgerIcon from '@/components/svgs/hamburger-icon';
import ToggleTheme from '@/hooks/toggle-theme';
import { navMenuItem } from '@/utils/constants';

function Navbar() {
	const pathname = usePathname();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleMenuItemClick = () => {
		// Close the menu when a menu item is clicked
		setIsMenuOpen(false);
	};

	return (
		<nav className='container mx-auto w-full flex items-center justify-between py-4 relative'>
			<div className='flex items-center justify-between w-full md:w-auto'>
				<Image src='/images/brand/logo.png' width={173} height={54} alt='logo_eduskill' />

				{/* Mobile: Hamburger Menu and Button */}
				<div className='flex items-center xl:hidden gap-x-3'>
					<Link href='https://eduskill.myr.id/portal'>
						<button className='text-white bg-eduskill px-4 py-[10px] h-10 w-fit text-sm font-semibold leading-5 rounded-lg shadow-2xl shadow-black/5 dark:shadow-gray-100/5 ml-4'>Masuk Kelas</button>
					</Link>
					<button className='outline-none' onClick={toggleMenu}>
						{isMenuOpen ? <CloseIcon className='fill-black dark:fill-gray-200' /> : <HamburgerIcon className='fill-black dark:fill-gray-200' />}
					</button>
				</div>
			</div>

			{/* Desktop Menu */}
			<div className='hidden md:flex gap-x-8 items-center'>
				{navMenuItem.map((item) => (
					<Link href={item.slug} key={item.id}>
						<p className={`text-base font-medium leading-6 ${pathname === item.slug ? 'font-bold text-eduskill' : 'text-[#101828] dark:text-gray-200 hover:text-eduskill-400'}`}>{item.name}</p>
					</Link>
				))}
				<Link href='https://eduskill.myr.id/portal'>
					<button className='text-white bg-eduskill px-4 py-[10px] h-10 text-sm font-semibold leading-5 rounded-lg shadow-2xl shadow-black/5 dark:shadow-gray-100/5 capitalize w-fit'>Masuk Kelas</button>
				</Link>
				<ToggleTheme />
			</div>

			{/* Mobile Menu */}
			<div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} w-[25rem] rounded-lg dark:bg-gray-950/90 bg-white/90 backdrop-blur-xl text-white absolute top-20 left-1/2 transform -translate-x-1/2 shadow-md`}>
				<div className='flex flex-col items-start p-4 gap-y-5'>
					{navMenuItem.map((item) => (
						<Link href={item.slug} key={item.id} className='w-full' onClick={handleMenuItemClick}>
							<p className={`text-base font-medium px-5 py-2 w-full ${pathname === item.slug ? 'bg-eduskill rounded-md text-white' : 'text-black dark:text-white hover:bg-gray-600 rounded-md'}`}>{item.name}</p>
						</Link>
					))}
				</div>
			</div>
		</nav>
	);
}

export { Navbar };
