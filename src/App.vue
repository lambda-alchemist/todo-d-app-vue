<script setup lang="ts">
import HelloUser from './components/HelloUser.vue'
import CountButton from './components/CountButton.vue'
import GenericCard from './components/GenericCard.vue'
</script>

<template>
	<div id="root" class="flex flex-col items-center p-4">
		<GenericCard>
			<CountButton/>
		</GenericCard>
		<HelloUser username="Guilherme" />
	</div>
</template>
