<script>
	import Link from '../components/Link.svelte';

	// Icons
	import Icon from 'svelte-awesome';
	import twitter from 'svelte-awesome/icons/twitter';
	import linkedin from 'svelte-awesome/icons/linkedin';
	import github from 'svelte-awesome/icons/github';
	import envelope from 'svelte-awesome/icons/envelope';
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
</script>

<!-- Hero -->
<div class="hero min-h-screen bg-gradient-to-b from-[#130E1D] to-base-300 to-100%">
	<div class="hero-content flex-col lg:flex-row">
		<img
			src="/dom-green.jpeg"
			class="rounded-xl shadow-2xl mask mask-squircle pb-5 max-w-xs"
			alt="Dominic Nguyen profile pic"
		/>
		<div class="md:pl-8">
			<h1 class="text-4xl font-bold hiddenLeft text-gradient">Dominic Nguyen</h1>
			<p class="py-6 max-w-md md:max-w-sm hiddenBottom text-white">
				Hi there! I'm a full-stack developer & data scientist currently building
				<Link name="XplorePod" link="https://xplorepod.com" />, a productivity app to help people do
				more of what matters to them most and get more out of life.
			</p>

			<ul class="menu menu-horizontal bg-base-100 p-2 rounded-box hiddenLeft">
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
</div>

<!-- Mission -->
<div class="hero min-h-screen bg-gradient-to-b from-base-300 to-gray-800">
	<div class="hero-content flex-col lg:flex-row pb-32">
		<div class="md:pl-8 px-4 py-6 rounded-3xl">
			<div class="">
				<h1 class="text-3xl font-bold animate-pulse hiddenBottom">Personal Mission</h1>

				<p class="text-4xl lg:text-5xl font-extrabold text-pd text-gradient hiddenLeft">
					I aim to <span class="text-white">empower others to use technology for good</span> by unlocking
					their potential to create the change they want to see in the world.
				</p>
			</div>
		</div>
		<img
			src="/astronaut-w-heart-cropped.png"
			class="pb-5 max-w-xs object-scale-down h-52 animate-pulse"
			alt="astronaut with heart"
		/>
	</div>
</div>

<!-- Key Areas -->
<div class="hero min-h-screen bg-gradient-to-b from-gray-800 to-base-200">
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
			<div class="mb-5 rounded-3xl area">
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
	<div class="mt-auto mb-3">
		<p class="text-xs">Made with 🤍 in Houston.</p>
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
