<script setup lang="ts">
import HelloUser from './components/GreeterUser.vue'
import CountButton from './components/ButtonCount.vue'
import GenericCard from './components/CardGeneric.vue'
import NavBar from './components/NavBar.vue';
</script>

<template>
	<div id="root" class="flex flex-col items-center">
		<NavBar/>
		<div class="p-4">
			<GenericCard>
				<CountButton/>
			</GenericCard>
			<HelloUser username="Guilherme" />
		</div>
	</div>
</template>
