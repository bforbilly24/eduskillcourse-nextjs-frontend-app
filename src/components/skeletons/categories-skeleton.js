function CategoriesSkeleton() {
	return (
		<div className='w-full flex flex-col gap-y-10 overflow-hidden'>
			<div className='flex gap-x-10'>
				{[...Array(3)].map((_, index) => (
					<div key={index} className='w-[24.375rem] h-[15.188rem] bg-white dark:bg-gray-700 animate-pulse border-2 border-[#D8D8D8]/40 rounded-[0.75rem] flex-shrink-0'>
						<div className='flex flex-col gap-y-5 w-full h-full justify-between p-8'>
							<div className='bg-gray-200 dark:bg-gray-700 h-8 w-2/3 rounded-md'></div>
							<div className='bg-gray-100 dark:bg-gray-600 h-4 w-1/2 rounded-md'></div>
							<div className='flex gap-x-2 items-center'>
								<div className='bg-gray-100 dark:bg-gray-600 h-4 w-16 rounded-full'></div>
								<div className='bg-gray-100 dark:bg-gray-600 h-4 w-4 rounded-full'></div>
							</div>
						</div>
					</div>
				))}
			</div>

			<div className='flex gap-x-3 items-center justify-center'>
				{[...Array(2)].map((_, index) => (
					<div key={index} className='w-3 h-3 bg-gray-200 dark:bg-gray-600 rounded-full animate-pulse' />
				))}
			</div>
		</div>
	);
}

export { CategoriesSkeleton };
