<script setup lang="ts">
defineProps<{ name: string; path: string }>()
</script>
<template>
	<RouterLink
		:to="$props.path"
		class="mx-1 my-2 border-spacing-x-8 rounded border bg-teal-800 p-2 transition-colors duration-100 hover:border-gray-950 hover:bg-emerald-700"
	>
		{{ $props.name }}
	</RouterLink>
</template>
