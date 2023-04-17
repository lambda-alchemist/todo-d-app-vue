<script setup lang="ts">
import GreeterUser from './components/GreeterUser.vue'
import ButtonCount from './components/ButtonCount.vue'
import CardGeneric from './components/CardGeneric.vue'
import NavBar from './components/NavBar.vue';
</script>

<template>
	<div id="root" class="flex flex-col items-center">
		<NavBar/>
		<div class="p-4">
			<CardGeneric>
				<ButtonCount/>
			</CardGeneric>
			<GreeterUser username="Alchemist" />
		</div>
	</div>
</template>
