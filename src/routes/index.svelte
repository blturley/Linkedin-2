<script lang="ts">
	import { getContext } from 'svelte';
	const proslist: any = getContext('storeContext');
	import Pro from '../components/pro.svelte';

	let searchTerm: string = '';
	let filteredPros: any = [];

	$: {
		if (searchTerm) {
			filteredPros = $proslist.filter((pro: any) =>
				pro.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
		} else {
			filteredPros = [...$proslist];
		}
	}
</script>

<svelte:head>
	<title>LinkedIn 2</title>
</svelte:head>

<h1 class="text-4xl text-center my-5 uppercase">LinkedIn 2</h1>

<h3 class="text-2xl text-center mb-8 uppercase">Explore <b>HOT</b> professionals in your area:</h3>

<input
	type="text"
	placeholder="Search Professionals"
	bind:value={searchTerm}
	class="w-full rounded-md p-4 border-2 border-gray-300 my-3 text-slate-900"
/>

{#each filteredPros as pro}
	<Pro name={pro.name} image={pro.img} />
{/each}
