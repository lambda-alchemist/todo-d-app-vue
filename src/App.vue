<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
</script>

<template>
	<div class="h-full min-h-screen w-full bg-slate-950 text-white">
		<NavBar />
		<RouterView />
	</div>
</template>
