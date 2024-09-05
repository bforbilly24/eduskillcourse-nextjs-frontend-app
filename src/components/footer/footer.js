import Image from 'next/image';
import Link from 'next/link';
import GithubIcon from '@/components/svgs/github-icon';
import InstagramIcon from '@/components/svgs/instagram-icon';
import EmailSubscriptionForm from '../forms/email-subscription-form.';

function Footer() {
	return (
		<footer className='bg-white dark:bg-gray-950 w-full'>
			<div className='bg-eduskill-600 mt-[5.25rem]'>
				<div className='container mx-auto flex flex-col'>
					<div className='w-full grid xl:grid-cols-eduskill-footer grid-cols-1 xl:gap-y-0 gap-y-10 justify-between pt-16 pb-12'>
						<div className='flex flex-col gap-y-9'>
							<Image src='/images/brand/logo.png' width={173} height={54} alt='logo_eduskill' />
							<p className='text-white font-normal text-base leading-6 text-start'>Pengalaman belajar terbaik yang menciptakan lebih banyak bakat di dunia.</p>
						</div>

						<div className='flex flex-col gap-y-4'>
							<h5 className='text-[#98A2B3] text-[0.875rem] leading-5'>Produk</h5>
							<div className='flex flex-col gap-y-3'>
								<p className='text-white font-medium leading-6 text-base'>Overview</p>
								<p className='text-white font-medium leading-6 text-base'>Features</p>
								<p className='text-white font-medium leading-6 text-base'>Solutions</p>
								<p className='text-white font-medium leading-6 text-base'>Tutorials</p>
								<p className='text-white font-medium leading-6 text-base'>Pricing</p>
							</div>
						</div>

						<div className='flex flex-col gap-y-4'>
							<h5 className='text-[#98A2B3] text-[0.875rem] leading-5'>Perusahaan</h5>
							<div className='flex flex-col gap-y-3'>
								<p className='text-white font-medium leading-6 text-base'>About Us</p>
								<p className='text-white font-medium leading-6 text-base'>Careers</p>
							</div>
						</div>

						<div className='flex flex-col gap-y-4'>
							<h5 className='text-[#98A2B3] text-[0.875rem] leading-5'>Legalitas</h5>
							<div className='flex flex-col gap-y-3'>
								<p className='text-white font-medium leading-6 text-base'>Privacy</p>
								<p className='text-white font-medium leading-6 text-base'>Cookies</p>
								<Link href='https://wa.me/6281553546308?text=Halo%20min,%20saya%20mempunyai%20pertanyaan%20seputar%20Eduskill,%20apa%20saja%20Kelas%20Eduskill?" target="_blank' rel='noopener noreferrer'>
									<p className='text-white font-medium leading-6 text-base'>Contact</p>
								</Link>
							</div>
						</div>

						<div className='flex flex-col gap-y-4'>
							<h5 className='text-[#98A2B3] text-[0.875rem] leading-5'>Berlangganan buletin kami</h5>
							<p className='text-white font-medium leading-6 text-base'>Tetap perbarui informasi tentang rilis dan fitur baru, panduan, dan studi kasus.</p>
							<EmailSubscriptionForm />
						</div>
					</div>

					<div className='w-full flex justify-between items-center py-12'>
						<div className='w-full'>
							<p className='uppercase text-[#98A2B3] font-normal leading-6 text-base text-start'>&#169; 2024 Eduskill, inc.</p>
						</div>
						<div className='w-fit flex gap-x-6'>
							<Link href='https://github.com/eduskilldev'>
								<GithubIcon className='fill-[#98A2B3]' />
							</Link>
							<Link href='https://www.instagram.com/eduskillid'>
								<InstagramIcon className='fill-[#98A2B3]' />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export { Footer };
