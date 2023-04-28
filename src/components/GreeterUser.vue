<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
</script>

<template>
	<div class="m-2 flex flex-col p-2 text-center">
		Hello, {{ name }}!
		<form class="m-4 p-4">
			<input
				v-model="name"
				placeholder="username"
				class="rounded border-2 border-emerald-500 bg-slate-900 p-2 text-zinc-100 placeholder-shown:text-zinc-800"
			/>
		</form>
	</div>
</template>
