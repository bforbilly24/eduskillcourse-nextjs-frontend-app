'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getCourses } from '@/actions/get-courses';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/shadcn/ui/pagination';
import CoursesSkeleton from '@/components/skeletons/courses-skeleton';
import DurationIcon from '@/components/svgs/duration-icon';
import LessonIcon from '@/components/svgs/lesson-icon';
import LevelIcon from '@/components/svgs/level-icon';

function CoursesCard() {
	const [state, setState] = useState({
		courses: [],
		loading: true,
		error: false,
		currentPage: 1,
		totalPages: 1,
		nextPageUrl: null,
		prevPageUrl: null,
		isLastPage: false,
	});

	const fetchCourses = async (page = 1) => {
		setState((prevState) => ({ ...prevState, loading: true }));
		const result = await getCourses(true, page);
		if (!result.error) {
			setState({
				courses: result.data,
				error: false,
				loading: false,
				currentPage: result.currentPage,
				totalPages: result.totalPages || 1,
				nextPageUrl: result.nextPageUrl,
				prevPageUrl: result.prevPageUrl,
				isLastPage: result.isLastPage,
			});
		} else {
			setState((prevState) => ({
				...prevState,
				courses: [],
				error: true,
				loading: false,
			}));
		}
	};

	useEffect(() => {
		fetchCourses(state.currentPage);
	}, [state.currentPage]);

	const handlePageChange = (page) => {
		// Avoid unnecessary fetch if already on the current page
		if (page === state.currentPage || (state.isLastPage && page > state.currentPage)) {
			return;
		}

		// Update currentPage in the state before fetching to reflect the change in the UI
		setState((prevState) => ({ ...prevState, currentPage: page }));
		fetchCourses(page);
	};

	const skeletonCount = 9;

	return (
		<div className='w-full flex flex-col gap-y-10'>
			<div className='gap-y-6 flex flex-col'>
				<div className='flex flex-col gap-y-3'>
					<p className='font-semibold text-base leading-6 mb-2 text-eduskill'>Jelajahi Kelas</p>
					<h1 className='font-semibold leading-[44px] text-[#101828] dark:text-gray-100 tracking-[-2%] text-4xl'>Kelas Popular Kami</h1>
				</div>

				{state.loading ? (
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto'>
						{Array.from({ length: skeletonCount }).map((_, index) => (
							<CoursesSkeleton key={index} />
						))}
					</div>
				) : state.error ? (
					<p className='text-center text-base text-red-500 dark:text-red-300 font-semibold'>Error! Cek Database Anda</p>
				) : state.courses.length === 0 ? (
					<p className='text-center text-base text-gray-500 dark:text-gray-100 font-semibold'>Kelas Belum Tersedia</p>
				) : (
					<>
						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-content-center justify-items-center gap-y-4 mx-auto w-full'>
							{state.courses.map((course) => (
								<Link key={course.id} href={course.link} target='_blank' rel='noopener noreferrer' className='sm:w-full lg:w-[384px] h-[560px] pt-0 px-0 pb-8 rounded-lg shadow-xl bg-white dark:bg-gray-800 relative group overflow-hidden block'>
									<Image src={`http://127.0.0.1:8000${course.thumbnail_url}`} alt={course.title} width={384} height={240} className='w-full h-[240px] object-cover rounded-t-lg' />
									<div className='w-full h-[320px] group-hover:h-full bg-white dark:bg-gray-800 transition-transform duration-300 ease-in-out transform translate-y-0 group-hover:-translate-y-32 rounded-b-lg p-7'>
										<div className='flex flex-col gap-y-4 h-full group-hover:h-[400px] justify-between'>
											<div className='flex flex-col gap-y-3 items-start'>
												<div className='bg-eduskill-500 py-1.5 px-3 rounded-md w-fit'>
													<p className='text-xs text-white font-semibold leading-5'>{course.category?.name || 'Other Category'}</p>
												</div>
												<div className='flex justify-between items-center gap-x-4 w-full'>
													<h1 className='leading-8 text-xl font-semibold text-[#101828] dark:text-gray-100 line-clamp-1 group-hover:line-clamp-none transition-all duration-300 ease-in-out'>{course.title}</h1>
													<Image src='/svgs/arrow-buy.svg' width={24} height={24} alt='arrow-buy' />
												</div>
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
											</div>
										</div>
									</div>
								</Link>
							))}
						</div>
						<div className='flex justify-center items-center mt-6'>
                        <div className='flex justify-center items-center mt-6 sm:w-full lg:w-full'>
							<Pagination>
								<PaginationContent>
									{/* Previous Button */}
									<PaginationItem>
										<PaginationPrevious href='#' onClick={() => handlePageChange(state.currentPage - 1)} disabled={state.currentPage === 1} />
									</PaginationItem>

									{/* Next Button */}
									<PaginationItem>
										<PaginationNext href='#' onClick={() => handlePageChange(state.currentPage + 1)} disabled={state.isLastPage} />
									</PaginationItem>
								</PaginationContent>
							</Pagination>
						</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
}

export default CoursesCard;
