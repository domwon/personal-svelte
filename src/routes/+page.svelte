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
			...document.querySelectorAll('.hiddenRight')
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
			<p class="py-6 max-w-md md:max-w-sm hiddenRight text-white">
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
				<h1 class="text-3xl font-bold animate-pulse hiddenRight">Personal Mission</h1>

				<p class="text-5xl font-extrabold text-pd text-gradient hiddenLeft">
					I aim to <span class="text-white">empower others to use technology for good</span> by unlocking
					their potential to create the change they want to see in the world.
				</p>
			</div>
		</div>
		<svg width="189" height="189" viewBox="0 0 189 189" fill="none" xmlns="http://www.w3.org/2000/svg" class="animate-pulse">
			<circle cx="94.5" cy="94.5" r="94.5" fill="#7FEA5A" fill-opacity="0.1"/>
			<circle cx="94.7527" cy="94.7527" r="79.0869" fill="url(#paint0_linear_616_60)"/>
			<mask id="mask0_616_60" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="15" y="15" width="159" height="159">
			<circle cx="94.7527" cy="94.7527" r="79.0869" fill="#CF6050"/>
			</mask>
			<g mask="url(#mask0_616_60)">
			<path d="M108.79 107.203C101.916 112.551 90.3764 100.095 91.0145 91.4098C91.148 89.5923 92.1967 87.8366 93.8419 86.1481C94.9332 85.028 96.1689 83.0189 97.3582 84.0344C101.931 87.9394 102.694 95.3756 108.689 95.8468C110.989 96.0275 113.387 95.7145 115.317 95.4776C117.023 95.2683 118.746 95.0617 120.446 94.812C121.263 94.6921 121.97 94.6115 122.592 94.5629C135.31 93.5707 158.695 81.8433 159.967 94.5361C159.989 94.7537 160 94.9912 160 95.25C160 96.1658 159.881 96.9876 159.66 97.73C155.502 111.701 133.686 102.924 119.109 102.924C113.188 103.656 110.546 105.836 108.79 107.203Z" fill="#46A3B7"/>
			<path d="M68.7112 142.805C75.6361 139.867 80.4016 151.555 87.0489 155.077C89.2361 156.236 89.7516 157.099 88.2437 158.765C87.1879 159.932 85.5176 160.761 84.1252 161.494C78.7711 164.313 73.2844 155.6 67.2504 155.149C64.9696 154.978 62.5964 155.288 60.6832 155.522C58.977 155.732 57.2545 155.938 55.5537 156.188C54.7373 156.308 54.0305 156.388 53.4079 156.437C40.6902 157.429 17.3053 169.157 16.033 156.464C16.0112 156.246 16 156.009 16 155.75C16 154.834 16.1185 154.012 16.3396 153.27C20.4984 139.299 42.3141 148.076 56.8905 148.076C64.718 147.108 66.8143 143.61 68.7112 142.805Z" fill="#46A3B7"/>
			<path d="M131.474 56.0919C142.402 62.4748 153.49 68.7209 164.754 74.4919C181.767 83.2088 192.172 94.3607 181.672 99.552C175.287 102.709 153.626 99.552 127.348 97.0252C105.822 97.4611 86.3395 104.605 77.5709 104.605C63.1409 104.605 62.4607 92.2762 48.6134 85.1269C42.9758 82.2162 36.8006 80.344 30.6402 78.8262C18.6498 75.872 8.08557 76.4158 8.08557 67.2097C8.08557 54.5529 19.7691 43.3647 37.6484 36.5985C48.9442 32.3237 60.9442 48.5119 75.8022 48.5119C102.042 46.5682 115.424 46.7177 131.474 56.0919Z" fill="#46A3B7"/>
			<path d="M85.0404 131.786C76.5034 134.153 69.1707 139.8 60.7949 142.686C51.3359 145.945 42.3007 149.511 38.6219 152.638C35.2651 155.492 41.3975 158.722 45.4434 156.978C46.7349 156.421 48.0403 155.661 49.3943 154.781C64.1779 145.172 83.0793 146.38 100.711 146.38C116.204 148.153 118.177 147.509 131.082 147.889C142.657 148.23 154.675 147.755 165.729 144.304C168.817 143.339 170.807 141.833 170.807 138.489C170.807 133.21 164.971 130.692 157.606 128.517C147.231 125.453 135.075 123.336 127.722 131.271C125.139 134.059 122.852 136.545 117.978 136.545C100.464 135.248 94.0536 129.287 85.0404 131.786Z" fill="#46A3B7"/>
			<path d="M127.825 72.8792C138.114 76.244 147.868 81.3927 158.564 83.0595C166.262 84.259 172.878 85.2164 176.707 86.4867C182.455 88.3931 174.447 93.4435 168.427 94.0953C156.194 95.4197 137.146 94.8125 120.677 94.5518C112.621 94.4243 108.902 85.4987 100.888 86.328C76.0338 91.8085 56.3469 99.7444 42.861 95.2411C29.3751 90.7378 15.7103 95.3249 14.6991 85.5533C14.2119 80.8442 15.5753 78.3049 18.4863 76.3252C29.4167 68.8913 43.9012 67.4034 56.4461 71.57C64.4699 74.2349 71.2923 77.3084 78.6648 76.5456C100.737 72.5964 113.01 68.034 127.825 72.8792Z" fill="#71CC6F"/>
			<path d="M60.6772 155.578C53.2887 153.161 46.2842 149.464 38.6033 148.267C32.9696 147.389 28.1425 146.692 25.4182 145.753C21.4113 144.372 27.1162 140.742 31.3114 140.14C35.8917 139.483 41.3475 139.403 47.531 139.439C57.0335 139.494 66.7509 145.769 76.2491 146.064C79.0681 146.151 81.429 146.248 84.2348 146.535C99.6089 148.106 108.572 141.428 121.691 139.519C135.965 137.442 141.303 142.301 142.029 149.318C142.449 153.375 140.101 155.621 136.259 157.599C127.819 161.945 117.541 164.52 109.348 159.725C109.011 159.528 108.678 159.327 108.346 159.124C100.547 154.35 91.333 153.889 82.3545 155.621C74.1582 157.202 67.8303 157.917 60.6772 155.578Z" fill="#71CC6F"/>
			<circle cx="37.143" cy="110.924" r="5.8115" fill="#2A9C3C"/>
			<circle cx="114.461" cy="76.0548" r="8.84358" fill="#2A9C3C"/>
			<circle cx="58.6203" cy="119.262" r="3.53743" fill="#46B751"/>
			</g>
			<defs>
			<linearGradient id="paint0_linear_616_60" x1="36.6377" y1="51.7981" x2="173.84" y2="173.84" gradientUnits="userSpaceOnUse">
			<stop stop-color="#B5EC6F"/>
			<stop offset="1" stop-color="#228632"/>
			</linearGradient>
			</defs>
			</svg>
	</div>
</div>

<!-- Key Areas -->
<div class="hero min-h-screen bg-gradient-to-b from-gray-800 to-base-200">
	<div class="hero-content flex-col lg:flex-row mb-5">
		<div class="md:pl-8">
			<h1 class="text-3xl font-bold text-white">Key Areas</h1>
			<p class="text-pd mb-2">
				Below are areas I think are key to achieving my personal mission. I'm aware I might
				not have have time to work on all of these, so if one appeals to you, go for it! I truly
				believe these are needed in the world so it honestly shouldn't matter who gets the credit
				for it.
			</p>
			<div class="mb-5 rounded-3xl hiddenRight area">
				<h2 class="text-2xl font-bold text-primary text-glow-primary">
					<Icon data={powerOff}/>
					Area 1: Authentic Personal Focus
				</h2>
				<p class="text-pd">
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
			<div class="mb-5 rounded-3xl hiddenLeft area">
				<h2 class="text-2xl font-bold text-accent text-glow-accent">
					<Icon data={book}/>
					Area 2: Enhanced STEM Education
				</h2>
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
			</div>
			<div class="mb-5 rounded-3xl hiddenRight area">
				<h2 class="text-2xl font-bold text-secondary text-glow-secondary">
					<Icon data={group}/>
					Area 3: Purpose-led Recruiting
				</h2>
				<p class="text-pd">
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
