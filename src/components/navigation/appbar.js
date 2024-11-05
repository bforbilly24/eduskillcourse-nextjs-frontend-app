'use client';

import Link from 'next/link';
import { useState } from 'react';
// import { FaBell, FaGlobe, FaUser, FaWallet } from 'react-icons/fa';
// Example icons
// import { IoIosShuffle } from 'react-icons/io';
import HomeIcon from '../svgs/home-icon';

// Example central icon

function AppBar() {
	const [activeIndex, setActiveIndex] = useState(2); // Assuming the central icon is the default active

	const handleClick = (index) => {
		setActiveIndex(index);
	};

	return (
		<nav className='fixed bottom-0 left-0 right-0 xl:hidden flex items-center justify-between bg-white dark:bg-gray-700 shadow-md px-6 py-3'>
			{/* Left Icons */}
			<Link href='/explore'>
				<button onClick={() => handleClick(0)} className={`flex flex-col items-center ${activeIndex === 0 ? 'text-eduskill' : 'text-gray-500 dark:text-gray-300'}`}>
					<HomeIcon className='foll-black dark:fill-gray-100' />
				</button>
			</Link>

			<Link href='/wallet'>
				<button onClick={() => handleClick(1)} className={`flex flex-col items-center ${activeIndex === 1 ? 'text-eduskill' : 'text-gray-500 dark:text-gray-300'}`}>
					<HomeIcon className='foll-black dark:fill-gray-100' />
				</button>
			</Link>

			{/* Center Prominent Icon */}
			<div className='relative'>
				<Link href='/shuffle'>
					<button onClick={() => handleClick(2)} className='flex items-center justify-center w-16 h-16 bg-eduskill text-white rounded-full transform -translate-y-4 shadow-lg'>
					<HomeIcon className="foll-black dark:fill-gray-100" />
					</button>
				</Link>
				<div className='absolute bottom-0 left-0 right-0 mx-auto h-2 bg-white rounded-t-full'></div>
			</div>

			{/* Right Icons */}
			<Link href='/notifications'>
				<button onClick={() => handleClick(3)} className={`flex flex-col items-center ${activeIndex === 3 ? 'text-eduskill' : 'text-gray-500 dark:text-gray-300'}`}>
					<HomeIcon className='foll-black dark:fill-gray-100' />
				</button>
			</Link>

			<Link href='/profile'>
				<button onClick={() => handleClick(4)} className={`flex flex-col items-center ${activeIndex === 4 ? 'text-eduskill' : 'text-gray-500 dark:text-gray-300'}`}>
					<HomeIcon className='foll-black dark:fill-gray-100' />
				</button>
			</Link>
		</nav>
	);
}

export default AppBar;
