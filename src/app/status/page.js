import { getServerstatus } from '@/actions/get-server-status';
import { Section } from '@/components/section/section';

export const metadata = {
	title: 'Status | Eduskill',
};

export default async function StatusPage() {
	const serverStatus = await getServerstatus();

	const isReady = serverStatus?.status === 'success' || serverStatus?.status === 'lag';

	return (
		<>
			<Section id={'Status'} className={'bg-white dark:bg-gray-950'}>
				<div className='container relative mx-auto'>
					<div className='flex items-center relative xl:mt-[200px] mt-[120px]'>
						<div className='flex gap-4 p-4'>
							<div className='flex flex-col gap-2 text-xs text-white'>
								<div className='flex'>
									<div className='w-fit rounded-l bg-badge-primary px-1.5 py-0.5'>Status Eduskill Server</div>
									<div className={`${isReady ? 'bg-badge-secondary' : 'bg-badge-error'} w-fit rounded-r px-1.5 py-0.5`}>
										{isReady ? 'pass' : 'failed'}
									</div>
								</div>
								{isReady && (
									<div className='bg-eduskill-500 p-4 flex flex-col gap-y-2 rounded-lg'>
										<p className='text-xs'>CPU Usage: {serverStatus.cpuUsage.join(', ')}%</p>
										<p className='text-xs'>Memory Usage: {serverStatus.memoryUsage}</p>
										<p className='text-xs'>Disk Free Space: {serverStatus.diskFreeSpace}</p>
										<p className='text-xs'>Disk Total Space: {serverStatus.diskTotalSpace}</p>
									</div>
								)}
								{!isReady && <p className='text-red-500'>Unable to retrieve server details. Please check back later.</p>}
							</div>
						</div>
					</div>
				</div>
			</Section>
		</>
	);
}
