<script setup lang="ts">
import NavBarButton from './NavBarButton.vue'
const navBarHRef = [
	{
		id: 1,
		href: '/docs',
		name: 'Docs',
	},
	{
		id: 2,
		href: '/contribute',
		name: 'Contribute',
	},
	{
		id: 3,
		href: '/about',
		name: 'About Us',
	},
]
</script>
<template>
	<nav class="flex w-full bg-emerald-950 font-sans font-semibold text-black">
		<div class="flex flex-row">
			<NavBarButton
				v-for="link in navBarHRef"
				:key="link.id"
				:href="link.href"
				:name="link.name"
			/>
		</div>
	</nav>
</template>
