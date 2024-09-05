'use server';

import axios from 'axios';
import { transformDate } from '@/libs/transform-date';

async function getCourses(showAll = false) {
	try {
		const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/course`);

		if (response.data.status === 'success') {
			const rawData = response.data.data;

			const sortedData = showAll ? rawData : rawData.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).slice(0, 3);

			const data = {
				error: false,
				isEmpty: sortedData.length === 0,
				data: sortedData.map((course) => ({
					id: course.id,
					title: course.title,
					description: course.description,
					price_before: parseFloat(course.price_before) === 0 ? 'FREE' : parseFloat(course.price_before).toLocaleString('id-ID'),
					price_after: parseFloat(course.price_after).toLocaleString('id-ID'),
					category_id: course.category_id,
					thumbnail_url: course.thumbnail_url,
					deleted_at: course.deleted_at,
					created_at: transformDate(course.created_at),
					updated_at: transformDate(course.updated_at),
					link: course.link,
				})),
			};

			return data;
		} else {
			return { error: true, isEmpty: true, data: [] };
		}
	} catch (error) {
		console.error('Failed to fetch courses:', error);
		return { error: true, isEmpty: true, data: [] };
	}
}

export { getCourses };
