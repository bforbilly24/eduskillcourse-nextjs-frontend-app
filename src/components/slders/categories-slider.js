'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import ChevronLeftIcon from '@/components/svgs/chevron-right-icon';
import { categoriesClass } from '@/utils/constants';
import { CategoriesSkeleton } from '../skeletons/categories-skeleton';

const CategoriesSlider = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [loading, setLoading] = useState(true);
	const splideRef = useRef(null);

	// Total number of slides
	const totalSlides = categoriesClass.length;

	useEffect(() => {
		const timer = setTimeout(() => setLoading(false), 2000);
		return () => clearTimeout(timer);
	}, []);

	const handleIndicatorClick = (index) => {
		if (splideRef.current) {
			splideRef.current.go(index);
		}
		setActiveIndex(index);
	};

	const handleSlideChange = (splide) => {
		setActiveIndex(splide.index);
	};

	return loading ? (
		<CategoriesSkeleton />
	) : (
		<div className='w-full flex flex-col gap-y-10'>
			<Splide
				ref={splideRef}
				options={{
					type: 'loop',
					perPage: 3,
					perMove: 1,
					gap: '2.5rem',
					pagination: false,
					arrows: false,
					drag: true,
					snap: true,
					rewind: true,
					speed: 600,
					easing: 'ease',
					breakpoints: {
						640: {
							perPage: 1,
						},
					},
				}}
				onMoved={handleSlideChange}
			>
				{categoriesClass.map((item) => (
					<SplideSlide key={item.id}>
						<div className='w-full h-[15rem] xl:w-[24.375rem] xl:h-[15.188rem] group px-10 py-[1.875rem] bg-white dark:bg-gray-700 border-2 border-[#D8D8D8]/40 dark:border-gray-50/40 rounded-[0.75rem] hover:bg-eduskill dark:hover:bg-eduskill hover:border-eduskill-400/40'>
							<div className='flex flex-col gap-y-[1.375rem] w-full h-full justify-between'>
								<div className='flex flex-col gap-y-[1.875rem] items-start justify-center'>
									<div className='gap-x-5 flex items-center justify-start w-full'>
										<div className='group-hover:text-white'>{item.icon}</div>
										<h5 className='line-clamp-1 leading-[150%] font-bold text-[#101828] dark:text-gray-100 text-2xl tracking-[2%] group-hover:text-white group-hover:text-xl transition-all duration-300'>{item.category}</h5>
									</div>
									<div className='w-[18.313rem] line-clamp-2 flex items-center justify-start'>
										<p className='text-[#646464] dark:text-gray-300 text-base leading-[180%] font-normal group-hover:text-white'>{item.desc}</p>
									</div>
								</div>
								<div className='w-full flex gap-x-[1.313rem] items-center justify-start'>
									<p className='font-medium text-eduskill text-base leading-[140%] group-hover:text-white'>Selengkapnya</p>
									<ChevronLeftIcon className='fill-eduskill group-hover:fill-white' />
								</div>
							</div>
						</div>
					</SplideSlide>
				))}
			</Splide>

			<div className='flex gap-x-3 items-center justify-center'>
				{Array.from({ length: totalSlides }).map((_, index) => (
					<motion.div
						key={index}
						onClick={() => handleIndicatorClick(index)}
						className={`cursor-pointer rounded-full ${activeIndex === index ? 'bg-eduskill w-12 h-3' : 'bg-[#D9D9D9] w-3 h-3'}`}
						animate={{
							width: activeIndex === index ? '3rem' : '0.75rem',
							backgroundColor: activeIndex === index ? '#FF7B00' : '#D9D9D9',
						}}
						transition={{ duration: 0.3, ease: 'easeInOut' }}
					/>
				))}
			</div>
		</div>
	);
};

export default CategoriesSlider;
