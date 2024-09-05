'use client';

import { motion } from 'framer-motion';

function ChevronTopIcon({ className }) {
	return (
		<motion.svg
			xmlns='http://www.w3.org/2000/svg'
			width='36'
			height='36'
			viewBox='0 0 24 24'
			style={{ msFilter: '' }}
			className={className}
			animate={{
				y: [0, -5, 0], // Bounce effect
			}}
			transition={{
				duration: 1.2,
				repeat: Infinity,
				repeatType: 'loop',
				ease: 'easeInOut',
			}}
		>
			<path d='m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z'></path>
		</motion.svg>
	);
}

export default ChevronTopIcon;
