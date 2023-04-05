<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

const incr = () => count.value++
const decr = () => count.value--
</script>

<template>
	<div class="flex flex-col text-center">
		<span>Count is {{ count }}</span>
		<div class="flex justify-evenly align-middle">
			<button
				@click="incr"
				class="m-2 rounded bg-green-600 p-2 text-white hover:bg-green-200 hover:text-green-900"
			>
				Increment
			</button>
			<button
				@click="decr"
				class="m-2 rounded bg-red-900 p-2 text-white hover:bg-red-200 hover:text-red-900"
			>
				Decrement
			</button>
		</div>
	</div>
</template>
