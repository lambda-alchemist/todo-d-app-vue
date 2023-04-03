<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
</script>

<template>
	<div class="m-2 flex flex-col p-2 text-center">
		Hello, {{ name }}!
		<form class="m-4 p-4">
			<input placeholder="username" v-model="name" class="rounded border-blue-400 p-2" />
		</form>
	</div>
</template>
