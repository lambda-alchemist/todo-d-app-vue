<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

const incr = () => count.value++
const decr = () => count.value--
</script>

<template>
	<div class="flex flex-col text-center">
		Count is {{ count }}
		<div class="flex justify-evenly align-middle">
			<button
				@click.prevent="incr"
				class="m-2 rounded bg-blue-900 p-2 text-white hover:bg-blue-200 hover:text-black"
			>
				Increment
			</button>
			<button
				@click.prevent="decr"
				class="m-2 rounded bg-blue-900 p-2 text-white hover:bg-blue-200 hover:text-black"
			>
				Decrement
			</button>
		</div>
	</div>
</template>
