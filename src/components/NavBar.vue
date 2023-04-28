<script setup lang="ts">
import NavBarButton from './NavBarButton.vue'
import { routes } from '@/router/index';
const urls = [
	{
		id: routes[0].id,
		name: routes[0].name,
		path: routes[0].path,
	},
	{
		id: routes[1].id,
		name: routes[1].name,
		path: routes[1].path,
	},
	{
		id: routes[2].id,
		name: routes[2].name,
		path: routes[2].path,
	}
]
</script>
<template>
	<nav class="flex w-full bg-emerald-950 font-sans font-semibold text-black">
		<div class="flex flex-row">
			<NavBarButton
				v-for="url in urls"
				:key="url.id"
				:name="url.name"
				:path="url.path"
			/>
		</div>
	</nav>
</template>
