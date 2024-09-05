'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { getCourses } from '@/actions/get-courses';
import Title from '@/components/miscellaneous/title';
import CoursesSkeleton from '@/components/skeletons/courses-skeleton';

function CoursesSlider() {
	const [state, setState] = useState({
		courses: [],
		loading: true,
		error: false,
		activeIndex: 0,
	});

	const splideRef = useRef(null);
	const router = useRouter();
	const dotCount = 3;
	const skeletonCount = 3;

	useEffect(() => {
		const timer = setTimeout(() => {
			async function loadCourses() {
				const result = await getCourses(false);

				if (!result.error) {
					setState({
						courses: result.data,
						error: false,
						loading: false,
						activeIndex: 0,
					});
				} else {
					setState({
						courses: [],
						error: true,
						loading: false,
						activeIndex: 0,
					});
				}
			}

			loadCourses();
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	const handleSlideChange = (splide) => {
		const newIndex = splide.index;
		setState((prevState) => ({
			...prevState,
			activeIndex: newIndex,
		}));
	};

	const handleIndicatorClick = (index) => {
		if (splideRef.current) {
			splideRef.current.go(index);
		}
	};

	const handleButtonClick = () => {
		router.push('/courses');
	};

	return (
		<div className='flex flex-col gap-y-10'>
			<div className='gap-y-10 flex flex-col'>
				<div className='flex flex-col gap-y-5'>
					<Title title='Jelajahi Kelas' about='Kelas Popular Kami' classNameTitle={'text-left'} classNameAbout={'text-left'} />
					<p className='font-normal leading-[30px] text-xl text-[#667085] dark:text-gray-400'>Mari bergabung dengan kelas terkenal kami, ilmu yang diberikan pasti akan bermanfaat bagi Anda.</p>
				</div>

				{state.loading ? (
					<Splide
						options={{
							type: 'loop',
							perPage: 3,
							perMove: 1,
							gap: 24,
							pagination: false,
							arrows: false,
							drag: true,
							snap: true,
							rewind: true,
							speed: 300,
							focus: 'center',
							breakpoints: {
								640: {
									perPage: 1,
								},
							},
						}}
						onMoved={handleSlideChange}
						ref={splideRef}
						aria-label='Loading Courses'
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
							type: 'loop',
							perPage: 3,
							perMove: 1,
							gap: 24,
							pagination: false,
							arrows: false,
							drag: true,
							snap: true,
							rewind: true,
							speed: 300,
							focus: 'center',
							breakpoints: {
								640: {
									perPage: 1,
								},
							},
						}}
						onMoved={handleSlideChange}
						ref={splideRef}
						aria-label='Popular Courses'
					>
						{state.courses.slice(0, 3).map((course, index) => (
							<SplideSlide key={course.id} className='pt-6 pb-4'>
								<Link href={course.link} target='_blank' rel='noopener noreferrer'>
									<div className='xl:w-[384px] w-full xl:h-fit h-fit px-6 pb-8 rounded-lg shadow-lg shadow-[#101828]/10 dark:shadow-gray-500 bg-white dark:bg-gray-800 flex flex-col gap-y-8'>
										<Image src={`http://127.0.0.1:8000${course.thumbnail_url}`} alt={course.title} width={336} height={240} className='w-[336px] h-[240px] object-cover rounded-sm' />
										<div className='flex flex-col gap-y-8 h-full justify-between'>
											<div className='flex flex-col gap-y-3'>
												<p className='text-sm text-eduskill-400 font-semibold xl:leading-5 leading-snug'>{course.category_id === 1 ? 'Design' : 'Other Category'}</p>
												<div className='flex justify-between items-center gap-x-4 w-full'>
													<h1 className='xl:leading-8 leading-relaxed xl:text-2xl font-semibold text-[#101828] dark:text-gray-100 line-clamp-1'>{course.title}</h1>
													<Image src='/svgs/arrow-buy.svg' width={24} height={24} alt='arrow-buy' />
												</div>
												<p className='text-base text-[#667085] dark:text-gray-200 font-normal xl:leading-6 leading-normal line-clamp-2'>{course.description}</p>
											</div>

											<div className='flex flex-col items-start justify-center gap-y-3'>
												<div className='font-bold xl:text-[26px] text-xl flex'>
													{parseFloat(course.price_after) === 0 ? (
														<>
															<p className='text-[#333333]/50 line-through dark:text-gray-50'>{`Rp${course.price_before}`}</p>
															<span className='text-[#333333]/50 dark:text-gray-50'>&nbsp;-&nbsp;</span>
															<p className='text-eduskill'>FREE</p>
														</>
													) : (
														<>
															<p className='text-[#333333]/50 line-through dark:text-gray-50'>{`Rp${course.price_before}`}</p>
															<span className='text-[#333333]/50 dark:text-gray-50'>&nbsp;-&nbsp;</span>
															<p className='text-eduskill'>{`Rp${course.price_after}`}</p>
														</>
													)}
												</div>
												<div className='flex gap-x-3'>
													<div className='w-10 h-10 bg-gray-400 rounded-full relative flex justify-center items-center overflow-hidden'>
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

				<div className='w-full flex items-center justify-center'>
					{state.loading ? (
						<div className='px-4 py-[0.625rem] w-[11.25rem] rounded-[0.5rem] h-10 bg-gray-200 dark:bg-gray-700 animate-pulse'></div> // Button Skeleton
					) : (
						<button onClick={handleButtonClick} className='px-4 py-[0.625rem] w-fit rounded-[0.5rem] bg-[#F9FAFB] dark:bg-gray-700 border-[0.063rem] border-[#D0D5DD] dark:border-gray-600'>
							<p className='text-[#667085] dark:text-gray-100 text-sm font-semibold leading-5'>Jelajahi Kelas Lainnya</p>
						</button>
					)}
				</div>
			</div>
		</div>
	);
}

export default CoursesSlider;
