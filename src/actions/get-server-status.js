'use server';

async function getServerstatus() {
	const options = {
		method: 'GET',
		cache: 'no-store',
	};

	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/status`, options);

		if (!res.ok) {
			throw new Error('Failed to fetch server status');
		}

		const data = await res.json();

		const status = data.status;
		const cpuUsage = data.details.cpu_usage;
		const memoryUsage = data.details.memory_usage;
		const diskFreeSpace = data.details.disk_free_space;
		const diskTotalSpace = data.details.disk_total_space;

		return {
			status,
			cpuUsage,
			memoryUsage,
			diskFreeSpace,
			diskTotalSpace
		};
	} catch (error) {
		console.error('Error fetching server status:', error);
		return { error: 'Unable to fetch server status' };
	}
}

export { getServerstatus };
