<script setup lang="ts">
import CardGeneric from '@/components/CardGeneric.vue';
import FormTodo from '@/components/FormTodo.vue';
</script>
<template>
	<div class="flex flex-col items-center p-4">
		<CardGeneric class="w-auto">
			<FormTodo></FormTodo>
		</CardGeneric>
	</div>
</template>
