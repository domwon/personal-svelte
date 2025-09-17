<script lang="ts">
	import Link from '../components/Link.svelte';

	// Icons
	import Icon from 'svelte-awesome';
	import twitter from 'svelte-awesome/icons/twitter';
	import linkedin from 'svelte-awesome/icons/linkedin';
	import github from 'svelte-awesome/icons/github';
	import envelope from 'svelte-awesome/icons/envelope';
	import chevronDown from 'svelte-awesome/icons/chevronDown';
	import powerOff from 'svelte-awesome/icons/powerOff';
	import book from 'svelte-awesome/icons/book';
	import group from 'svelte-awesome/icons/group';

	const links = [
		{ name: 'Twitter', color: 'primary', url: 'https://twitter.com/domknguyen' },
		{ name: 'LinkedIn', color: 'secondary', url: 'https://www.linkedin.com/in/dominickhacnguyen' },
		{ name: 'GitHub', color: 'accent', url: 'https://github.com/domwon' },
		{ name: 'Mail', color: 'warning', url: 'mailto:domnguyen531@gmail.com' }
	];

	// Animate on scroll

	import { onMount } from 'svelte';

	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				// Show entry if it is in viewport
				if (entry.isIntersecting) {
					entry.target.classList.add('fade-in');
					observer.unobserve(entry.target);
				}
			});
		});

		// set observer on elements with 'test' class
		const hiddenEls = [
			...document.querySelectorAll('.hiddenLeft'),
			...document.querySelectorAll('.hiddenBottom')
		];
		hiddenEls.forEach((el) => {
			if (el) {
				console.log(el);
				observer.observe(el);
			}
		});
	});

	// Scroll to mission hero element
	function scrollToAnchor(anchorId: string) {
		const anchor = document.querySelector(anchorId);
		if (anchor) {
			anchor.scrollIntoView({ behavior: 'smooth' });
		}
	}

	// Design portfolio items
	const designItems = [
		{
			title: 'SeaSpar',
			img: '/ocean-I.svg',
			desc: 'Digital naval board game playable across multiple phones for more present gatherings',
			link: 'https://seaspar.mobiboard.games',
			date: 'Sep 2023 - present',
			tags: ['Svelte', 'Typescript', 'Firebase', 'Figma', 'TailwindCSS']
		},
		{
			title: 'ROVEE',
			img: '/ice-I.svg',
			desc: 'A fun space-cleaning app that helps you stop scrolling on social media in the morning',
			link: 'https://rovee.app',
			date: 'Aug 2023 - present',
			tags: ['Svelte', 'Typescript', 'Firebase', 'Figma', 'TailwindCSS']
		},
		{
			title: 'Personal Website',
			img: '/gas-special-red-purple.svg',
			desc: 'Visual showcase of personal mission and focus areas',
			link: 'https://domknguyen.com',
			date: 'Apr 2023',
			tags: ['Svelte', 'TypeScript', 'Figma', 'TailwindCSS']
		},
		{
			title: 'XplorePod',
			img: '/savannah-I.svg',
			desc: 'A space-themed app that makes it fun to focus, track, and do more of what matters to you most',
			link: 'https://xplorepod.com',
			date: 'Dec 2021 - present',
			tags: ['Angular', 'Typescript', 'Firebase', 'NodeJS', 'PWA', 'RxJS', 'Figma', 'TailwindCSS']
		},
		{
			title: 'Yumaroo Demo Day Deck',
			img: '/tundra-I.svg',
			desc: 'Visual storytelling of menu analytics startup using animations at NMotion 2018 demo day',
			link: 'https://www.youtube.com/watch?v=N7g0P_zAIEo',
			date: 'Dec 2018',
			tags: [
				'Keynote',
				'Angular',
				'Typescript',
				'Firebase',
				'NodeJS',
				'PWA',
				'RxJS',
				'Ionic',
				'Capacitor'
			]
		},
		{
			title: 'Refyne',
			img: '/desert-I.svg',
			desc: 'Interactive game web app to teach K-12 students basic chemical engineering concepts',
			link: 'https://domwon.github.io/Refyne1',
			date: 'Dec 2017',
			tags: ['Angular', 'JavaScript', 'Ionic']
		},
		{
			title: 'Baseball Data',
			img: '/lava-I.svg',
			desc: 'First & only use of D3 in interactive data visualization project for Udacity Nanodegree',
			link: 'https://domwon.github.io/Baseball-Data',
			date: 'Aug 2017',
			tags: ['D3', 'JavaScript', 'HTML', 'CSS']
		}
	];
</script>

<!-- Splash -->
<div
	class="hero min-h-screen bg-svg bg-no-repeat bg-center"
	style="background-image: url('/bg-personal-splash.svg')"
>
	<div class="hero-content flex-col lg:flex-row">
		<img
			src="/dom-green.jpeg"
			class="rounded-xl shadow-2xl mask mask-squircle pb-5 max-w-xs"
			alt="Dominic Nguyen profile pic"
		/>
		<div class="md:pl-8">
			<h1 class="text-4xl font-bold hiddenLeft text-gradient">Dominic Nguyen</h1>
			<p class="py-6 max-w-md hiddenBottom text-white">
				Hi there! I'm a full-stack developer & data scientist currently solo building a few
				<Link name="apps" link="/apps" /> to help people focus and get more out of life. Previously,
				I did research at NASA, data science at a Fortune 5 company, and led venture-backed startups.
			</p>

			<ul class="menu menu-horizontal bg-base-300 p-2 rounded-box hiddenLeft">
				{#each links as link}
					<li class="linkie hiddenLeft">
						<a
							class="link link-{link.color}"
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
						>
							{#if link.name === 'Twitter'}
								<Icon data={twitter} />
							{/if}
							{#if link.name === 'LinkedIn'}
								<Icon data={linkedin} />
							{/if}
							{#if link.name === 'GitHub'}
								<Icon data={github} />
							{/if}
							{#if link.name === 'Mail'}
								<Icon data={envelope} />
							{/if}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<div class="mt-auto mb-3 tooltip" data-tip="My mission">
		<button on:click={() => scrollToAnchor('#mission')} class="animate-bounce">
			<Icon data={chevronDown} class="hover:text-gray-50 hover:scale-125 lg:scale-150" />
		</button>
	</div>
</div>

<!-- Mission -->
<div
	id="mission"
	class="hero min-h-screen bg-svg bg-no-repeat bg-center"
	style="background-image: url('/bg-personal-mission.svg')"
>
	<div class="hero-content flex-col lg:flex-row pb-32">
		<div class="md:pl-8 py-6 rounded-3xl">
			<h1 class="text-3xl font-bold animate-pulse hiddenBottom">Personal Mission</h1>

			<p
				class="text-4xl lg:text-5xl font-extrabold py-6 max-w-md md:max-w-lg text-gradient hiddenLeft"
			>
				I aim to <span class="text-white">build experiences</span>
				that make life
				<span class="text-[#DD7BEC] text-glow-change">more meaningful.</span>
			</p>
		</div>
		<img
			src="/astronaut-w-heart-cropped.png"
			class="pb-5 max-w-xs object-scale-down h-52 animate-wigglePulse"
			alt="astronaut with heart"
		/>
	</div>
</div>

<!-- Design Portfolio -->
<div
	class="hero min-h-screen bg-svg bg-no-repeat bg-center"
	style="background-image: url('/bg-personal-key-areas.svg')"
>
	<div class="hero-content flex-col lg:flex-row mb-5">
		<div class="md:pl-8 mt-10">
			<h1 class="text-3xl font-bold text-white">Projects</h1>

			<div class="container text-pd">
				<div class="flex flex-wrap -mx-1 lg:-mx-4">
					{#each designItems as item}
						<div class="w-full md:w-1/2 card hover:scale-95 group">
							<a
								href={item.link}
								target="_blank"
								rel="noopener noreferrer"
								class="flex flex-col items-center justify-center md:mx-5"
							>
								<img
									alt="planet"
									class="max-w-xs object-scale-down h-36 my-4 group-hover:animate-wigglePulse hiddenBottom"
									src={item.img}
								/>

								<div class="card-body px-1 hiddenLeft">
									<h2 class="card-title text-gray-300 group-hover:text-white">{item.title}</h2>

									<p>{item.desc}</p>
									<p class="italic text-gray-600">{item.date}</p>
									<div class="card-actions justify-end opacity-0 group-hover:opacity-100">
										{#each item.tags as tag}
											<div class="badge badge-outline">{tag}</div>
										{/each}
									</div>
								</div>
							</a>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
	<div class="mt-auto mb-3">
		<p class="text-xs">Made with 🤍 in Houston.</p>
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
