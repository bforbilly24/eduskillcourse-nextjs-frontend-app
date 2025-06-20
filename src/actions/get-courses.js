'use server'

import axios from 'axios';
import { formatDuration } from '@/libs/transform-date';

async function getCourses(showAll = false, page = 1) {
	try {
		const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/course?page=${page}`);
		if (response?.data?.status === 'success') {
			const paginationData = response.data.data;
			const rawData = Array.isArray(paginationData.data) ? paginationData.data : [];

			const sortedData = showAll ? rawData : rawData.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).slice(0, 3);

			return {
				error: false,
				isEmpty: sortedData.length === 0, // Set isEmpty to true if no data
				data: sortedData.map((course) => ({
					id: course.id,
					title: course.title,
					description: course.description,
					price_before: parseFloat(course.price_before) === 0 ? 'FREE' : parseFloat(course.price_before).toLocaleString('id-ID'),
					price_after: parseFloat(course.price_after).toLocaleString('id-ID'),
					category_id: course.category_id,
					category: course.category,
					level: course.level,
					thumbnail_url: course.thumbnail_url,
					deleted_at: course.deleted_at,
					created_at: course.created_at,
					updated_at: course.updated_at,
					link: course.link,
					lesson_total: course.lesson_total,
					duration_total: formatDuration(course.duration_total),
				})),
				currentPage: paginationData.current_page,
				nextPageUrl: paginationData.next_page_url,
				prevPageUrl: paginationData.prev_page_url,
				isLastPage: !paginationData.next_page_url || sortedData.length === 0,
			};
		} else {
			return { error: true, isEmpty: true, data: [] };
		}
	} catch (error) {
		return { error: true, isEmpty: true, data: [] };
	}
}

export { getCourses };
