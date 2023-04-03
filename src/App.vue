<script setup lang="ts">
import HelloUser from './components/HelloUser.vue';
import CountButton from './components/CountButton.vue';
</script>

<template>
	<div id="root">
		<div id="card">
			<CountButton/>
		</div>
		<HelloUser username="Guilherme"/>
	</div>
</template>

