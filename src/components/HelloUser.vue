<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
</script>

<template>
	Hello, {{ name }}!
	<form id="username">
		<input v-model="name" />
	</form>
</template>
