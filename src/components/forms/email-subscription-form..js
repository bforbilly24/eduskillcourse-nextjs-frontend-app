'use client';

import axios from 'axios';
import { useState } from 'react';
import { Input } from '@/components/shadcn/ui/input';

function EmailSubscriptionForm() {
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post('/api/subscribe', { email });

			if (response.status === 200) {
				setMessage('Subscription successful!');
				setEmail(''); 
			} else {
				setMessage('There was a problem with your subscription.');
			}
		} catch (error) {
			console.error('Error:', error);
			setMessage('An error occurred. Please try again later.');
		}
	};

	return (
		<form onSubmit={handleSubmit} className='flex w-full max-w-sm items-center space-x-2'>
			<Input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required className='mt-2' />
			<button type='submit' className='mt-2 bg-white text-eduskill-600 py-2 px-4 rounded'>
				Subscribe
			</button>
			{message && <p className='text-white mt-2'>{message}</p>}
		</form>
	);
}

export default EmailSubscriptionForm;
