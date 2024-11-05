function CoursesSkeleton() {
	return (
		<div className='w-[384px] h-fit pt-6 px-6 pb-8 rounded-lg shadow-xl bg-white dark:bg-gray-700 flex flex-col gap-y-8 animate-pulse'>
			<div className='w-[336px] h-[240px] bg-gray-300 dark:bg-gray-700 rounded-sm'></div>

			<div className='flex flex-col gap-y-8 h-full justify-between'>
				<div className='flex flex-col gap-y-3'>
					<div className='w-1/4 h-5 bg-gray-50 dark:bg-gray-500 rounded'></div>
					<div className='flex justify-between items-center gap-x-4 w-full'>
						<div className='w-3/4 h-8 bg-gray-100 dark:bg-gray-600 rounded'></div>
						<div className='w-6 h-6 bg-gray-100 dark:bg-gray-600 rounded-full'></div>
					</div>
					<div className='w-full h-6 bg-gray-200 dark:bg-gray-700 rounded'></div>
				</div>
				<div className='flex justify-between items-center'>
					<div className='flex gap-x-3'>
						<div className='w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full'></div>
						<div className='flex flex-col'>
							<div className='w-20 h-5 bg-gray-100 dark:bg-gray-600 rounded'></div>
							<div className='w-24 h-5 bg-gray-100 dark:bg-gray-600 rounded'></div>
						</div>
					</div>
					<div className='w-16 h-7 bg-gray-200 dark:bg-gray-600 rounded'></div>
				</div>
			</div>

		</div>
	);
}

export default CoursesSkeleton;
