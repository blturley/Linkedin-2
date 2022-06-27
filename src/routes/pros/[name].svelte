<script lang="ts">
	import {page} from '$app/stores';
	const name: string = $page.params.name;
	import { getContext } from 'svelte';
	const proslist: any = getContext('storeContext');
	export let pro: any = $proslist.filter((pro: any) => pro.name.toLowerCase() == name.toLowerCase())[0];
</script>

<h1 class="text-4xl text-center my-5 uppercase">Meet <b>{pro.name}</b>:</h1>

<div class="grid grid-cols-2 gap-4 mt-20">
	<div class="w-full">
		<img src={pro.img} alt="{pro.name}" class="mx-auto w-96">
	</div>
	
	<div class="mt-20">
		<h3 class="text-2xl text-center mb-8 uppercase">{pro.name}'s bio:</h3>
	<p>I was born with glass bones and paper skin. Every morning I break my legs, and every afternoon I break my arms. At night, I lie awake in agony until my heart attacks put me to sleep.</p>
	</div>
</div>

