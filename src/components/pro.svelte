<script lang="ts">
	export let name: string;
	export let image: string;
</script>

<a
	href={`/pros/${name}`}
	class="m-1 bg-cyan-900 p-5 text-center rounded-md shadow-sm hover:shadow-lg inline-block"
>
	<img src={image} alt="pro" class="w-56" />
	<p class="text-2xl">{name}</p>
</a>
