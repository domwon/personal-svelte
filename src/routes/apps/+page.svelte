<script lang="ts">
	import AppLink from '../../components/AppLink.svelte';

	let apps = [
		{
			title: 'XplorePod',
			desc: 'A space-themed app that makes it fun to focus, track, and do more of what matters to you most.',
			icon: 'scout-icon.svg',
			link: 'https://xplorepod.com',
			a: 'Hi'
		},
		{
			title: 'ROVEE',
			desc: 'A fun space-cleaning app that helps you stop scrolling on social media in the morning.',
			icon: 'rovee.svg',
			link: 'https://rovee.app'
		},
		{
			title: 'SeaSpar',
			desc: 'Digital naval board game playable across multiple phones for more present gatherings.',
			icon: 'seaspar.svg',
			link: 'https://seaspar.mobiboard.games'
		}
	];
</script>

<div class="flex flex-col h-full w-full justify-center items-center">
	<div
		class="flex flex-col h-screen w-full justify-center items-center overflow-hidden bg-zinc-900 bg-gradient-to-b from-zinc-900 to-zinc-950"
	>
		<div class="absolute top-10 lg:top-20">
			<div class="max-w-lg p-4">
				<h1 class="text-4xl font-bold mb-3">Dom's apps</h1>
				<p>Here are a few projects I'm currently building:</p>
			</div>

			<div class="mt-5">
				{#each apps as app}
					<AppLink {...app} />
				{/each}

				<div class="p-4">
					<p class="mt-5">
						Learn more about me <a href="/" class="underline hover:opacity-75">here</a>.
					</p>
				</div>
			</div>
		</div>

		<div class="-mb-[50rem] scale-[2] z-0">
			<img src="tundra-I.svg" alt="tundra planet" />
		</div>
	</div>
</div>
