function Title({ title, about, classNameTitle, classNameAbout }) {
	return (
		<div className='flex flex-col gap-y-3'>
			<h5 className={`${classNameTitle} text-base font-semibold leading-6 text-eduskill-400`}>{title}</h5>
			<p className={`${classNameAbout} xl:text-4xl text-2xl font-semibold xl:leading-[2.75rem] leading-relaxed tracking-[-2%] text-[#101828] dark:text-gray-100`}>{about}</p>
		</div>
	);
}

export default Title;
