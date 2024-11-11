'use server';
import axios from 'axios';

async function getServerstatus() {
	try {
		const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/status`, {
			cache: 'no-store',
		});

		const data = res.data;

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
			diskTotalSpace,
		};
	} catch (error) {
		console.error('Error fetching server status:', error);
		return { error: 'Unable to fetch server status' };
	}
}

export { getServerstatus };
