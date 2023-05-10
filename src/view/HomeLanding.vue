<script setup lang="ts">
import GreeterUser from '@/components/GreeterUser.vue';
import ButtonCount from '@/components/ButtonCount.vue';
import CardGeneric from '@/components/CardGeneric.vue';
</script>
<template>
	<div class="flex flex-col items-center p-4">
		<CardGeneric>
			<ButtonCount />
		</CardGeneric>
		<GreeterUser />
	</div>
</template>
