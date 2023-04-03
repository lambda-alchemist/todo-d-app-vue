<script setup lang='ts'>
import { ref } from 'vue'

const count = ref(0)

const incr = () => count.value++
const decr = () => count.value--
</script>

<template>
	<span>Count is {{ count }}</span>
	<button @click.prevent='incr'>Increment</button>
	<button @click.prevent='decr'>Decrement</button>
</template>
