'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { getCourses } from '@/actions/get-courses';
import CoursesSkeleton from '@/components/skeletons/courses-skeleton';
import DurationIcon from '@/components/svgs/duration-icon';
import LessonIcon from '@/components/svgs/lesson-icon';
import LevelIcon from '@/components/svgs/level-icon';
import Link from 'next/link';

function CoursesSlider() {
	const [state, setState] = useState({
		courses: [],
		loading: true,
		error: false,
		activeIndex: 0,
	});

	const splideRef = useRef(null);

	useEffect(() => {
		(async () => {
			try {
				const [page1, page2] = await Promise.all([getCourses(true, 1), getCourses(true, 2)]);
				const allCourses = [...(page1?.data || []), ...(page2?.data || [])].sort((a, b) => b.id - a.id).slice(0, 6);

				setState({ courses: allCourses, loading: false, error: false, activeIndex: 0 });
			} catch {
				setState((prev) => ({ ...prev, error: true, loading: false }));
			}
		})();
	}, []);

	// Update active index on swipe
	const handleSlideChange = (splide) => {
		setState((prevState) => ({
			...prevState,
			activeIndex: splide.index,
		}));
	};

	const handleIndicatorClick = (index) => {
		if (splideRef.current) {
			splideRef.current.go(index);
			setState((prevState) => ({ ...prevState, activeIndex: index }));
		}
	};

	const skeletonCount = 3;
	const dotCount = 4;

	return (
		<div className='flex flex-col gap-y-10'>
			<div className='gap-y-6 flex flex-col'>
				<div className='flex flex-col gap-y-5'>
					<p className='font-semibold text-base leading-6 mb-2 text-eduskill'>Jelajahi Kelas</p>
					<h1 className='font-semibold leading-[44px] text-[#101828] dark:text-gray-100 tracking-[-2%] text-4xl'>Kelas Popular Kami</h1>
					<p className='font-normal leading-[30px] text-xl text-[#667085] dark:text-gray-400'>Mari bergabung dengan kelas terkenal kami, ilmu yang diberikan pasti akan bermanfaat bagi Anda.</p>
				</div>

				{state.loading ? (
					<Splide
						options={{
							type: 'slide',
							perPage: 3,
							perMove: 1,
							gap: '1rem',
							pagination: false,
							arrows: false,
							drag: true,
							snap: false,
							speed: 300,
							breakpoints: {
								640: {
									// Tailwind's sm breakpoint
									perPage: 1, // Show 1 card on small screens
								},
								1024: {
									// Tailwind's lg breakpoint
									perPage: 3, // Show 3 cards on large screens
								},
							},
						}}
						ref={splideRef}
						onMoved={handleSlideChange}
						aria-label='Popular Courses'
					>
						{Array.from({ length: skeletonCount }).map((_, index) => (
							<SplideSlide key={index} className='pt-6 pb-4'>
								<CoursesSkeleton />
							</SplideSlide>
						))}
					</Splide>
				) : state.error ? (
					<p className='text-center text-base text-red-500 dark:text-red-300 font-semibold'>Error! Cek Database Anda</p>
				) : state.courses.length === 0 ? (
					<p className='text-center text-base text-gray-500 dark:text-gray-100 font-semibold'>Kelas Belum Tersedia</p>
				) : (
					<Splide
						options={{
							type: 'slide',
							perPage: 3,
							perMove: 1,
							gap: '1rem',
							pagination: false,
							arrows: false,
							drag: true,
							snap: false,
							speed: 300,
							breakpoints: {
								640: {
									// Tailwind's sm breakpoint
									perPage: 1, // Show 1 card on small screens
								},
								1024: {
									// Tailwind's lg breakpoint
									perPage: 3, // Show 3 cards on large screens
								},
							},
						}}
						ref={splideRef}
						onMoved={handleSlideChange}
						aria-label='Popular Courses'
					>
						{state.courses.map((course) => (
							<SplideSlide key={course.id} className='pt-6 pb-4'>
								<Link href={course.link} target='_blank' rel='noopener noreferrer' className='sm:w-full lg:w-[384px] h-[560px] pt-0 px-0 pb-8 rounded-lg shadow-xl bg-white dark:bg-gray-800 relative group overflow-hidden block'>
									<Image src={`http://127.0.0.1:8000${course.thumbnail_url}`} alt={course.title} width={384} height={240} className='w-full h-[240px] object-cover rounded-t-lg' />
									<div className='w-full h-[320px] group-hover:h-full bg-white dark:bg-gray-800 transition-transform duration-300 ease-in-out transform translate-y-0 group-hover:-translate-y-32 rounded-b-lg p-7'>
										<div className='flex flex-col gap-y-4 h-full group-hover:h-[400px] justify-between'>
											<div className='flex flex-col gap-y-3 items-start'>
												<div className='bg-eduskill-500 py-1.5 px-3 rounded-md w-fit'>
													<p className='text-xs text-white font-semibold leading-5'>{course.category?.name || 'Other Category'}</p>
												</div>
												<h1 className='leading-8 text-xl font-semibold text-[#101828] dark:text-gray-100 line-clamp-1 group-hover:line-clamp-none transition-all duration-300 ease-in-out'>{course.title}</h1>
												<p className='text-base text-[#667085] dark:text-gray-200 font-normal leading-6 line-clamp-1 group-hover:line-clamp-none overflow-hidden transition-all duration-300 ease-in-out group-hover:max-h-full'>{course.description}</p>
											</div>

											<div className='flex flex-col gap-y-4'>
												<div className='flex gap-x-4'>
													<div className='flex items-center gap-x-2'>
														<LessonIcon className='text-[#0C0924]/60 dark:text-gray-100' />
														<p className='text-sm text-[#0C0924]/60 dark:text-gray-100 font-base capitalize leading-5'>{course.lesson_total} Pelajaran</p>
													</div>
													<div className='flex items-center gap-x-2'>
														<DurationIcon className='text-[#0C0924]/60 dark:text-gray-100' />
														<p className='text-sm text-[#0C0924]/60 dark:text-gray-100 font-base capitalize leading-5'>{course.duration_total}</p>
													</div>
												</div>

												<div className='flex justify-between items-center w-full'>
													<div className='flex gap-x-2'>
														<LevelIcon className='text-[#0C0924]/60 dark:text-gray-100' />
														<p className='text-sm text-[#0C0924]/60 dark:text-gray-100 font-base leading-5'>{course.level?.name || 'Level Unknown'}</p>
													</div>
													<div className='flex'>
														{parseFloat(course.price_after) === 0 ? (
															<div className='flex gap-x-3 items-center justify-center'>
																<p className='font-bold text-sm text-[#333333]/50 line-through dark:text-gray-50'>{`Rp${course.price_before}`}</p>
																<p className='font-bold text-xl text-eduskill'>FREE</p>
															</div>
														) : (
															<div className='flex gap-x-3 items-center justify-center'>
																<p className='font-bold text-sm text-[#333333]/50 line-through dark:text-gray-50'>{`Rp${course.price_before}`}</p>
																<p className='font-bold text-xl text-eduskill'>{`Rp${course.price_after}`}</p>
															</div>
														)}
													</div>
												</div>
												<div className='flex gap-x-3 mt-4'>
													<div className='w-10 h-10 bg-[#0C0924]/60 dark:bg-gray-100 rounded-full relative flex justify-center items-center overflow-hidden'>
														<Image src='/images/courses/avatar-eduskill.jpg' alt='avatar-eduskill' width={40} height={40} className='w-full h-full object-cover rounded-full' />
													</div>
													<div className='flex flex-col'>
														<p className='text-[#101828] dark:text-gray-100 font-medium leading-5 text-sm'>Eduskill</p>
														<p className='text-[#667085] dark:text-gray-200 font-normal leading-5 text-sm'>2024 Enrolled</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</Link>
							</SplideSlide>
						))}
					</Splide>
				)}
			</div>

			<div className='flex gap-x-3 items-center justify-center'>
				{state.loading
					? Array.from({ length: dotCount }).map((_, index) => <div key={index} className='w-3 h-3 bg-gray-200 dark:bg-gray-600 rounded-full animate-pulse'></div>)
					: Array.from({ length: dotCount }).map((_, index) => (
							<motion.div
								key={index}
								onClick={() => handleIndicatorClick(index)}
								className={`cursor-pointer rounded-full ${state.activeIndex === index ? 'bg-eduskill w-12 h-3' : 'bg-[#D9D9D9] w-3 h-3'}`}
								animate={{
									width: state.activeIndex === index ? '3rem' : '0.75rem',
									backgroundColor: state.activeIndex === index ? '#FF7B00' : '#D9D9D9',
								}}
								transition={{ duration: 0.3, ease: 'easeInOut' }}
							/>
						))}
			</div>
		</div>
	);
}

export default CoursesSlider;
