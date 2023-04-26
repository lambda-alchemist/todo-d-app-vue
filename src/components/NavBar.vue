<script setup lang="ts">
import NavBarButton from './NavBarButton.vue'
import { routes } from '@/router/index';
const urls = [
	{
		id: routes[0].id,
		name: routes[0].name,
		path: '/',
	},
	{
		id: 2,
		name: 'Todo App',
		path: '/todo-d-app',
	},
	{
		id: 3,
		name: 'About',
		path: '/about',
	},
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
