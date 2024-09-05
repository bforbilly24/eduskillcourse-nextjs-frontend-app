'use client';

import Image from 'next/image';
import Link from 'next/link';
// Import Link from next/link
import { useEffect, useState } from 'react';
import { getCourses } from '@/actions/get-courses';
import Title from '@/components/miscellaneous/title';
import CoursesSkeleton from '../skeletons/courses-skeleton';

function CoursesCard() {
	const [state, setState] = useState({
		courses: [],
		loading: true,
		error: false,
	});

	useEffect(() => {
		async function loadCourses() {
			const result = await getCourses(true);

			if (!result.error) {
				setState({
					courses: result.data,
					error: false,
					loading: false,
				});
			} else {
				setState({
					courses: [],
					error: true,
					loading: false,
				});
			}
		}

		loadCourses();
	}, []);

	const skeletonCount = 9;

	return (
		<div className='w-full flex flex-col gap-y-10'>
			<div className='gap-y-6 flex flex-col'>
				<div className='flex flex-col gap-y-3'>
					<Title title='Jelajahi Kelas' about='Kelas Populer Kami' />
				</div>

				{state.loading ? (
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-6 mx-auto w-full'>
						{Array.from({ length: skeletonCount }).map((_, index) => (
							<CoursesSkeleton key={index} />
						))}
					</div>
				) : state.error ? (
					<p className='text-center text-base text-red-500 dark:text-red-300 font-semibold'>Error! Cek Database Anda</p>
				) : state.courses.length === 0 ? (
					<p className='text-center text-base text-gray-500 dark:text-gray-100 font-semibold'>Kelas Belum Tersedia</p>
				) : (
					<div className='grid grid-cols-1 xl:grid-cols-3 place-items-center gap-6 mx-auto w-full'>
						{state.courses.map((course) => (
							<Link key={course.id} href={course.link} target='_blank' rel='noopener noreferrer'>
								<div className='xl:w-[384px] w-full h-fit pt-6 px-6 pb-8 rounded-lg shadow-xl bg-white dark:bg-gray-800 flex flex-col gap-y-8'>
									<Image src={`http://dashboard.eduskill.id${course.thumbnail_url}`}  alt={course.title} width={336} height={240} className='w-[336px] h-[240px] object-cover rounded-sm' />
									<div className='flex flex-col gap-y-8 h-full justify-between'>
										<div className='flex flex-col gap-y-3'>
											<p className='text-sm text-eduskill-400 font-semibold leading-5'>{course.category_id === 1 ? 'Design' : 'Other Category'}</p>
											<div className='flex justify-between items-center gap-x-4 w-full'>
												<h1 className='leading-8 text-2xl font-semibold text-[#101828] dark:text-gray-100 line-clamp-1'>{course.title}</h1>
												<Image src='/svgs/arrow-buy.svg' width={24} height={24} alt='arrow-buy' />
											</div>
											<p className='text-base text-[#667085] dark:text-gray-200 font-normal leading-6 line-clamp-2'>{course.description}</p>
										</div>

										<div className='flex flex-col items-start justify-center gap-y-3'>
											<div className='font-bold text-[26px] flex'>
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
						))}
					</div>
				)}
			</div>
		</div>
	);
}

export default CoursesCard;
