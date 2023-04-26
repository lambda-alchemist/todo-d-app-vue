<script setup lang="ts">
import GreeterUser from '@/components/GreeterUser.vue'
import ButtonCount from '@/components/ButtonCount.vue'
import CardGeneric from '@/components/CardGeneric.vue'
</script>
<template>
	<div class="p-4 flex flex-col items-center">
		<CardGeneric>
			<ButtonCount/>
		</CardGeneric>
		<GreeterUser username="Alchemist" />
	</div>
</template>
