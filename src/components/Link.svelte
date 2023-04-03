<a
	class="link {colorClass} link-hover font-bold"
	href="{link}"
	target="_blank"
	rel="noopener noreferrer"
>
	{name}
</a>

<script>
    export let name = 'XplorePod';
    export let link = 'https://xplorepod.com';
    export let color = 'accent';
    let colorClass = color ? `link-${color}`: '';
  </script>
