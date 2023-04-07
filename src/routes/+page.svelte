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
			title: 'Personal Website',
			img: '/lava-I.svg',
			desc: 'Visual showcase of personal mission and focus areas',
			link: 'https://domknguyen.com',
			date: 'Apr 2023',
			tags: ['Figma', 'Svelte', 'TailwindCSS']
		},
		{
			title: 'XplorePod',
			img: '/tundra-I.svg',
			desc: 'Productivity app that gamifies activity logging (gamification & UI updates in progress).',
			link: 'https://xplorepod.com',
			date: 'Dec 2021 - present',
			tags: ['Figma', 'Angular', 'Ionic']
		},
		{
			title: 'Yumaroo Demo Day Deck',
			img: '/ocean-I.svg',
			desc: 'Visual storytelling of meal recommendation startup using animations in Keynote',
			link: 'https://www.youtube.com/watch?v=N7g0P_zAIEo',
			date: 'Dec 2018',
			tags: ['Keynote']
		},
		{
			title: 'Refyne',
			img: '/desert-I.svg',
			desc: 'Interactive game web app to teach K-12 students basic chemical engineering concepts',
			link: 'https://domwon.github.io/Refyne1',
			date: 'Dec 2017',
			tags: ['Angular', 'Ionic']
		},
		{
			title: 'Baseball Data',
			img: '/gas-special-red-purple.svg',
			desc: 'First & only use of D3 in interactive data visualization project for Udacity Nanodegree',
			link: 'https://domwon.github.io/Baseball-Data',
			date: 'Aug 2017',
			tags: ['D3']
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
				Hi there! I'm a full-stack developer & data scientist currently building
				<Link name="XplorePod" link="https://xplorepod.com" />, a productivity app to help people do
				more of what matters to them most and get more out of life.
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
			<Icon data={chevronDown} class="hover:text-gray-50 hover:scale-125" />
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
				class="text-4xl lg:text-5xl font-extrabold py-6 max-w-md md:max-w-xl text-gradient hiddenLeft"
			>
				I aim to <span class="text-white">empower others to use technology for good</span>
				by unlocking their potential to
				<span class="text-[#DD7BEC] text-glow-change">create positive change.</span>
			</p>
		</div>
		<img
			src="/astronaut-w-heart-cropped.png"
			class="pb-5 max-w-xs object-scale-down h-52 animate-wigglePulse"
			alt="astronaut with heart"
		/>
	</div>
</div>

<!-- Key Areas -->
<div
	class="hero min-h-screen bg-svg bg-no-repeat bg-center"
	style="background-image: url('/bg-personal-key-areas.svg')"
>
	<div class="hero-content flex-col lg:flex-row mb-5">
		<div class="md:pl-8">
			<h1 class="text-3xl font-bold text-white">Key Areas</h1>
			<p class="text-pd mb-2">
				Below are areas I think are key to achieving my personal mission. I'm aware I might not have
				have time to work on all of these, so if one appeals to you, go for it! I truly believe
				these are needed in the world so it honestly shouldn't matter who gets the credit for it.
			</p>
			<div class="mb-5 rounded-3xl area">
				<h2 class="text-2xl font-bold text-primary text-glow-primary hiddenBottom">
					<Icon data={powerOff} />
					Area 1: Authentic Personal Focus
				</h2>
				<p class="text-pd hiddenLeft">
					Focus is necessary for people to prioritize what's personally important and maximize their
					potential and impact on the world. To help, I highly recommend apps like
					<Link name="Forest" link="https://www.forestapp.cc/" color="primary" /> and
					<Link name="Fabulous" link="https://www.thefabulous.co/" color="primary" />
					which aid in digital detox and building healthy habits.
					<br /><br />
					However, there's still an opportunity to specifically help those who want to create good yet
					lack focus or discipline, something I personally recently struggled with. That's why I'm building
					<Link name="XplorePod" link="https://xplorepod.com" color="primary" /> to address this -
					<i>big update coming in April 2023!</i>
				</p>
			</div>
			<div class="mb-5 rounded-3xl area">
				<h2 class="text-2xl font-bold text-accent text-glow-accent hiddenBottom">
					<Icon data={book} />
					Area 2: Enhanced STEM Education
				</h2>
				<p class="text-pd hiddenLeft">
					STEM education is crucial to prepare people to accelerate positive societal change.
					<Link name="Brilliant" link="https://brilliant.org/" /> excels in affordable interactive content
					yet could benefit from greater breadth and industry recognition. Meanwhile,
					<Link name="Udacity" link="https://www.udacity.com/" /> leads in professional development but
					is quite expensive.
					<br /><br />
					Thus, I believe there are still ways to make STEM learning more interactive and accessible.
					<i>I'm actively looking for opportunities to contribute in this space.</i>
				</p>
			</div>
			<div class="mb-10 rounded-3xl area">
				<h2 class="text-2xl font-bold text-secondary text-glow-secondary hiddenBottom">
					<Icon data={group} />
					Area 3: Purpose-led Recruiting
				</h2>
				<p class="text-pd hiddenLeft">
					Matching purpose-driven individuals with organizations that share their values is
					essential for reducing turnover and driving positive change.
					<Link name="Idealist" link="https://www.idealist.org/" color="secondary" /> and
					<Link name="MovingWorlds" link="https://movingworlds.org/" color="secondary" /> offer valuable
					resources in the nonprofit sector, while <Link
						name="LinkedIn"
						link="https://www.linkedin.com/"
						color="secondary"
					/> is an excellent tool for professional networking.
					<br /><br />
					Nevertheless, I think there's a potential for for-profit organizations to make purpose-driven
					recruiting the norm rather than an exception.
					<i>I plan to build something in this area soon!</i>
				</p>
			</div>
		</div>
	</div>
</div>

<!-- Design Portfolio -->
<div
	class="hero min-h-screen bg-svg bg-no-repeat bg-center"
	style="background-image: url('/bg-personal-design-portfolio.svg')"
>
	<!-- TODO: Change BG SVG to blend with BG section above it -->
	<div class="hero-content flex-col lg:flex-row mb-5">
		<div class="md:pl-8 mt-10">
			<h1 class="text-3xl font-bold text-white">Design Portfolio</h1>
			<p class="text-pd mb-2" />

			<div class="container text-pd">
				<div class="flex flex-wrap -mx-1 lg:-mx-4">
					{#each designItems as item}
						<div
							class="w-full md:w-1/2 card hover:scale-95 group"
						>
							<a href={item.link} target="_blank" rel="noopener noreferrer" class="flex flex-col items-center justify-center md:mx-5">
								<img
									alt="planet"
									class="max-w-xs object-scale-down h-36 my-4 group-hover:animate-wigglePulse"
									src={item.img}
								/>

								<div class="card-body px-1">
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
