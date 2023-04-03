<script>
	import Link from '../components/Link.svelte';

	// Social Icons
	import Icon from 'svelte-awesome';
	import twitter from 'svelte-awesome/icons/twitter';
	import linkedin from 'svelte-awesome/icons/linkedin';
	import github from 'svelte-awesome/icons/github';
	import envelope from 'svelte-awesome/icons/envelope';

	const links = [
		{ id: 1, name: 'Twitter', url: 'https://twitter.com/domknguyen' },
		{ id: 2, name: 'LinkedIn', url: 'https://www.linkedin.com/in/dominickhacnguyen' },
		{ id: 3, name: 'GitHub', url: 'https://github.com/domwon' },
		{ id: 3, name: 'Mail', url: 'mailto:hi@domknguyen.com' }
	];
</script>

<!-- Hero -->
<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row">
		<img
			src="/dom-profile.jpg"
			class="rounded-xl shadow-2xl mask mask-squircle pb-5 max-w-xs"
			alt="Dominic Nguyen profile pic"
		/>
		<div class="md:pl-8">
			<h1 class="text-4xl font-bold">Dominic Nguyen</h1>

			<p class="py-6 max-w-md md:max-w-sm">
				Hi there! I'm a full-stack developer & data scientist currently building
				<Link name="XplorePod" link="https://xplorepod.com" />, a productivity app to help people do
				more of what matters to them most and get more out of life.
			</p>

			<ul class="menu menu-horizontal bg-base-100 p-2 rounded-box">
				{#each links as link}
					<li>
						<a class="link link-accent" href={link.url} target="_blank" rel="noopener noreferrer">
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
<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row">
		<div class="md:pl-8">
			<div class="">
				<h1 class="text-3xl font-bold animate-pulse">Personal Mission</h1>

				<p class="text-5xl font-extrabold text-pd gradient-text">
					I aim to empower others to use technology for good by unlocking their potential to create
					the change they want to see in the world.
				</p>
			</div>
		</div>
	</div>
</div>

<!-- Key Areas -->
<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row">
		<div class="md:pl-8">
			<h1 class="text-3xl font-bold">Key Areas</h1>
			<p class="text-pd">
				Here are ideas/areas I think are key to achieving my personal mission. I'm aware I might not
				have have time to work on all of these, so if one appeals to you, go for it! I truly believe
				these are needed in the world so it honestly shouldn't matter who gets the credit for it.
			</p>

			<h2 class="text-2xl font-bold">Area 1: Authentic Personal Focus</h2>
			<p class="text-pd">
				Focus is necessary for people to prioritize what's personally important and maximize their
				potential and impact on the world. To help, I highly recommend apps like
				<Link name="Forest" link="https://www.forestapp.cc/" /> and
				<Link name="Fabulous" link="https://www.thefabulous.co/" />
				which aid in digital detox and building healthy habits.
				<br /><br />
				However, there's still an opportunity to specifically help those who want to create good yet
				lack focus or discipline. So I'm building
				<Link name="XplorePod" link="https://xplorepod.com" /> to address this -
				<i>big update coming in April 2023!</i>
			</p>
			<!--  -->

			<h2 class="text-2xl font-bold">Area 2: Enhanced STEM Education</h2>
			<p class="text-pd">
				STEM education is crucial to prepare people to accelerate positive societal change.
				<Link name="Brilliant" link="https://brilliant.org/" /> excels in affordable interactive content
				yet could benefit from greater breadth and industry recognition. Meanwhile,
				<Link name="Udacity" link="https://www.udacity.com/" /> leads in professional development but
				is quite expensive.
				<br /><br />
				Thus, I believe there are still ways to make STEM learning more interactive and accessible.
				<i>I'm actively looking for opportunities to contribute in this space.</i>
			</p>

			<h2 class="text-2xl font-bold">Area 3: Purpose-led Recruiting</h2>
			<p class="text-pd">
				Matching purpose-driven individuals with organizations that share their values is essential
				for reducing turnover and driving positive change.
				<Link name="Idealist" link="https://www.idealist.org/" /> and
				<Link name="MovingWorlds" link="https://movingworlds.org/" /> offer valuable resources in the
				nonprofit sector, while <Link name="LinkedIn" link="https://www.linkedin.com/" /> is an excellent
				tool for professional networking.
				<br /><br />
				Nevertheless, I think there's a potential for for-profit organizations to make purpose-driven
				recruiting the norm rather than an exception.
				<i>I plan to build something in this area soon!</i>
			</p>
		</div>
	</div>
</div>

<!-- About Me -->
<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row">
		<div class="mt-auto mb-3">
			<p class="text-xs">Made with 🤍 in Houston.</p>
		</div>
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
