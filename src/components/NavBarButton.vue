<script setup lang="ts">
defineProps<{ name: string }>()
</script>
<template>
	<a
		class="m-0.5 my-1.5 rounded bg-cyan-950 p-2 transition-colors duration-100 hover:bg-emerald-700"
		>{{ $props.name }}</a
	>
</template>
