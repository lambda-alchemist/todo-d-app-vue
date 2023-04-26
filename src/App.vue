<script setup lang="ts">
import GreeterUser from './components/GreeterUser.vue'
import ButtonCount from './components/ButtonCount.vue'
import CardGeneric from './components/CardGeneric.vue'
import NavBar from './components/NavBar.vue';
</script>

<template>
	<NavBar/>
	<div class="p-4 flex flex-col items-center">
		<CardGeneric>
			<ButtonCount/>
		</CardGeneric>
		<GreeterUser username="Alchemist" />
	</div>
</template>
