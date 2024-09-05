import Image from 'next/image';
import Link from 'next/link';
import TutorsCard from '@/components/cards/tutors-card';
import Title from '@/components/miscellaneous/title';
import { Section } from '@/components/section/section';
import CategoriesSlider from '@/components/slders/categories-slider';
import CoursesSlider from '@/components/slders/courses-slider';
import { collaborations, svgs } from '@/utils/constants';

export default function HomePage() {
	return (
		<>
			<div className='relative'>
				<Image src='/svgs/eclipse-orbit-left.svg' width={407} height={489} alt='orbit-left' className='absolute z-0 xl:top-[83px] top-10 xl:-left-6 left-10 xl:w-[407px] xl:h-[489px] w-52 h-56' />
			</div>
			<Image src='/svgs/eclipse-left.svg' width={285} height={476} alt='eclipse-left' className='absolute z-0 top-[359px] left-0' />
			<Image src='/svgs/eclipse-right.svg' width={300} height={490} alt='eclipse-right' className='absolute z-0 top-0 right-0' />
			<div className='relative'>
				<Image src='/svgs/eclipse-orbit-right.svg' width={407} height={489} alt='orbit-right' className='absolute z-0 top-[380px] right-0 xl:w-[407px] xl:h-[489px] w-52 h-56' />
			</div>
			<div className='w-[22px] h-[22px] bg-[#7F56D9]/60 absolute top-[739px] left-[360px] rounded-full' />

			<Section id={'hero'} className={'bg-white dark:bg-gray-950'}>
				<div className='container relative mx-auto'>
					<div className='flex xl:flex-row flex-col-reverse xl:gap-y-0 gap-y-10 items-center justify-between relative mt-[200px]'>
						<div className='z-10 h-fit flex flex-col gap-y-[50px]'>
							<div className='flex flex-col gap-y-9'>
								<div className='flex flex-col gap-y-5'>
									<p className='xl:leading-[5.125rem] leading-[3rem] xl:w-[602px] w-fit xl:text-[60px] text-4xl tracking-[-0.5px] font-bold text-[#101828] dark:text-gray-100'>
										Upgrade <span className='text-eduskill'>Skillmu</span> <br /> Bersama <span className='text-eduskill uppercase'>eduskill</span>
									</p>
									<p className='xl:leading-[180%] leading-[140%] text-sm text-[#646464] xl:w-[30.438rem] w-fit dark:text-gray-300'>Eduskill Menyediakan Kelas Design, Web Development, Business Plan Yang Cocok Untuk Mahasiswa Maupun Pemula</p>
								</div>
								<div className='flex justify-start gap-x-7'>
									<Link href='https://eduskill.mayar.link/pl/basic-web-development'>
										<button className='xl:px-7 px-8 py-4 font-semibold text-white bg-eduskill rounded-lg xl:text-lg text-base shadow-2xl shadow-[#101828]/5'>Daftar</button>
									</Link>
									<Link href='https://wa.me/6281553546308?text=Saya%20memiliki%20kendala,%20yaitu...'>
										<button className='xl:px-7 px-8 py-4 font-semibold bg-[#F4EBFF] dark:bg-gray-50 rounded-lg xl:text-lg text-base text-eduskill-400 shadow-2xl shadow-[#101828]/5'>CS Admin</button>
									</Link>
								</div>
							</div>
							<div className='flex items-center justify-start gap-x-[2.125rem]'>
								{svgs.map((item) => (
									<div className='xl:flex-row flex flex-col xl:gap-y-0 gap-y-3 items-center justify-center gap-x-[0.625rem]' key={item.id}>
										<Image src={item.icon} alt={item.alt} width={32} height={32} className='w-8 h-8' />
										<p className='text-center xl:leading-[2.5rem] leading-snug text-base text-[#1D2939] dark:text-gray-200 font-normal'>{item.name}</p>
									</div>
								))}
							</div>
						</div>
						<div id='headerBlur' className='relative top-[0px] right-0'>
							<div className='z-10 xl:w-[495px] w-60 xl:h-[495px] h-60 bg-eduskill rounded-full relative overflow-hidden'>
								<Image src='/images/home/person.png' width={366} height={432} alt='person' className='xl:w-[22.875rem] w-auto xl:h-[27rem] h-auto absolute xl:top-[68px] xl:left-[46px] xl:-bottom-[5px]' />
							</div>

							<div className='z-0 absolute -top-[21px] -left-[22.56px] border-2 border-eduskill xl:w-[495.72px] w-60 xl:h-[495.72px] h-60 rounded-full' />

							<div className='z-10 absolute xl:-top-[19px] -top-20 xl:-right-[35.72px] -right-20 w-fit xl:p-[18px] p-3 gap-y-3 bg-eduskill-card dark:bg-gray-100 border-eduskill border rounded-[18px] flex flex-col items-center justify-center '>
								<Image src='/svgs/online-courses.svg' alt='online-courses' width='81' height='80' className='xl:w-[5.063rem] w-14 xl:h-20 h-14' />
								<div className='flex flex-col gap-y-3 items-center justify-center'>
									<p className='text-[#101828] font-bold text-[25px]'>15+</p>
									<p className='text-[#101828]/80 font-normal text-[15px]'>Online Courses</p>
								</div>
							</div>

							<div className='z-10 absolute xl:top-[155px] -top-10 xl:-left-[93px] -left-20 w-fit xl:p-[18px] p-3 xl:gap-x-6 gap-x-3 bg-eduskill-card dark:bg-gray-100 border-eduskill border rounded-[18px] flex items-center justify-center '>
								<div className='flex items-center bg-eduskill rounded-xl p-1.5'>
									<Image src='/svgs/video.svg' alt='video-courses' width='36' height='36' className='xl:w-[2.25rem] w-7 xl:h-[2.25rem] h-7' />
								</div>
								<div className='flex flex-col xl:gap-y-1.5 gap-y-0.5'>
									<p className='text-[#101828] font-bold text-[25px]'>20+</p>
									<p className='text-[#101828]/80 font-normal text-[15px]'>Video Courses</p>
								</div>
							</div>

							<div className='z-10 absolute xl:bottom-[39.28px] bottom-0 xl:-right-[2.96px] -right-20 w-fit xl:p-[18px] p-3 gap-x-3 bg-eduskill-card dark:bg-gray-100 border-eduskill border rounded-[18px] flex items-center justify-center '>
								<div className='flex items-center bg-eduskill rounded-xl p-1.5'>
									<Image src='/svgs/tutor.svg' alt='tutors' width='36' height='36' className='xl:w-[2.25rem] w-7 xl:h-[2.25rem] h-7' />
								</div>
								<div className='flex flex-col gap-y-0'>
									<p className='text-[#101828]/80 font-normal text-[15px]'>Tutors</p>
									<p className='text-[#101828] font-bold text-[25px]'>10+</p>
								</div>
							</div>

							<div className='z-10 absolute xl:bottom-[37.11px] -bottom-6 xl:left-[9.56px] left-0 bg-eduskill rounded-full w-[42px] h-[42px]' />
						</div>
					</div>

					<div className='flex mt-[7.813rem] xl:flex-row flex-col xl:gap-y-0 gap-y-5 items-center justify-start gap-x-[55px]'>
						<div className='flex flex-col xl:items-start items-center gap-y-0 xl:gap-x-0 gap-x-5'>
							<p className='font-bold leading-[34px] text-[30px] text-eduskill'>10+</p>
							<p className='text-[25px] leading-[34px] md:text-xl font-light text-[#101828] dark:text-gray-100'>Collaborations</p>
						</div>
						<div className='flex gap-x-[3.75rem]'>
							{collaborations.map((item, index) => (
								<Image key={index} src={item.image} alt={item.alt} width={item.width} height={item.height} className='w-full h-full' />
							))}
						</div>
					</div>
				</div>
			</Section>

			<Section id={'categories'} className={'bg-white dark:bg-gray-950'}>
				<div className='container mx-auto mt-[8.188rem]'>
					<div className='flex flex-col gap-y-16 items-center justify-center'>
						<Title title='Kategori Kelas' about='Course Online Berbasis Project' classNameTitle={'text-center'} classNameAbout={'text-center'} />
						<CategoriesSlider />
					</div>
				</div>
			</Section>

			<Section id={'services'} className={'bg-white dark:bg-gray-950'}>
				<div className='container mx-auto mt-[8.188rem]'>
					<div className='flex flex-col gap-y-16 items-center justify-center'>
						<div className='flex flex-col gap-y-[3.563rem] w-full items-center justify-center'>
							<Title title='Pelayanan Kami' about='Masih binggung ingin mempelajari apa??' classNameTitle={'text-center'} classNameAbout={'text-center'} />
							<p className='text-center font-light xl:text-[1.563rem] text-base xl:leading-[2.75rem] leading-relaxed tracking-[2%] xl:w-[64.813rem] w-full'>
								Ikuti<span className='text-eduskill font-medium'> Tes Minat Bakat </span>untuk membantu anda dalam menemukan jalur yang sesuai dengan potensi, serta memberikan arahan dalam memilih pendidikan atau pekerjaan yang sesuai dengan minat dan bakat yang dimiliki.
							</p>
						</div>
						<button className='px-7 py-4 bg-eduskill rounded-[0.5rem] xl:w-[12.5rem] w-fit'>
							<p className='xl:text-[1.125rem] text-base font-semibold leading-[1.75rem] text-white'>Ikuti Test!</p>
						</button>
					</div>
				</div>
			</Section>

			<Section id={'courses-recent'} className={'bg-white dark:bg-gray-950'}>
				<div className='container mx-auto mt-[8.188rem]'>
					<CoursesSlider />
				</div>
			</Section>

			<Section id={'tutors'} className={'bg-white dark:bg-gray-950'}>
				<div className='container mx-auto mt-[5.125rem]'>
					<div className='w-full flex flex-col justify-center items-center gap-y-8'>
						<div className='xl:w-[48rem] w-full flex flex-col gap-y-5'>
							<Title title='Tutor' about='Para Mentor' classNameTitle={'text-center'} classNameAbout={'text-center'} />
							<p className='font-normal xl:text-lg text-base xl:leading-[1.875rem] leading-loose text-[#667085] dark:text-gray-400 text-center w-full'>Di EDUSKILL, instruktur dari seluruh dunia mengajar jutaan siswa. Kami menawarkan pengetahuan dan kemampuan.</p>
						</div>
						<TutorsCard />
					</div>
				</div>
			</Section>

			{/* <Section id={'services'} className={'bg-white dark:bg-gray-950'}></Section> */}
		</>
	);
}
