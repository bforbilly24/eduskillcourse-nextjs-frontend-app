'use server'

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const { email } = req.body;

		const transporter = nodemailer.createTransport({
			service: 'Gmail',
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASSWORD,
			},
		});

		const mailOptions = {
			from: process.env.EMAIL_USER,
			to: 'eduskill129@gmail.com',
			subject: 'New Newsletter Subscription',
			text: `Please subscribe me to the newsletter. My email is: ${email}`,
		};

		try {
			await transporter.sendMail(mailOptions);
			res.status(200).json({ message: 'Email sent successfully' });
		} catch (error) {
			console.error('Error sending email:', error);
			res.status(500).json({ message: 'Error sending email', error });
		}
	} else {
		res.setHeader('Allow', ['POST']);
		res.status(405).end(`Method ${req.method} Not Allowed`);
	}
}
