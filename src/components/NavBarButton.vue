<script setup lang="ts">
defineProps<{ name: string; path: string }>();
</script>
<template>
	<RouterLink
		:to="$props.path"
		class="mx-1 my-2 rounded bg-emerald-700 p-2 transition-colors duration-100 hover:bg-teal-800 hover:text-slate-200"
	>
		{{ $props.name }}
	</RouterLink>
</template>
