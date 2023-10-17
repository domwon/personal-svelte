<script lang="ts">
	export let title: string;
	export let desc: string;
	export let icon: string;
	export let link: string;
</script>

<a
	class="card max-w-lg hover:bg-zinc-950 hover:animate-pulse p-4 flex flex-row items-center mt-3"
	href={link}
	target="_blank"
>
	<img src={icon} alt={title + ' icon'} class="ml-1 mr-3 h-16" />
	<div>
		<h2 class="text-2xl font-bold underline">{title}</h2>
		<p>{desc}</p>
	</div>
</a>
