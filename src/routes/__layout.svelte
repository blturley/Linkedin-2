<script>
	import Nav from '../components/nav.svelte';
	import { setContext } from 'svelte';
	import { proslist } from '../stores/mystore';
	setContext('storeContext', proslist);
</script>

<body class="bg-cyan-800 text-slate-300 h-screen">
	<Nav />
	<div class="p-8 max-w-6xl mx-auto">
		<slot />
	</div>
</body>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
