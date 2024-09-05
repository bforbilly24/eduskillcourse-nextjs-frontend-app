import { StandaloneGradient } from '@/components/miscellaneous/standalone-gradient';

function NotReadyResponsive() {
	return (
		<main className='flex h-screen w-screen flex-col place-content-center items-center justify-center p-5 text-center lg:p-10 xl:hidden'>
			<StandaloneGradient />
			<div>[WARN]</div>
			<div>Harap gunakan perangkat desktop untuk tujuan pengalaman pengguna yang terbaik alih-alih menggunakan ponsel cerdas, tablet, atau desktop kecil!</div>
		</main>
	);
}

export { NotReadyResponsive };
