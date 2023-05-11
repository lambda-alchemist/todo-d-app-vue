<script setup lang="ts"></script>
<template>
	<form class="m-2 flex flex-col p-2 text-center">
		<label for="task-name">Create todo task:</label>
		<input
			placeholder="Insert name here"
			name="task-name"
			type="text"
			class="my-2 rounded bg-slate-700 p-2"
		/>
		<label for="task-date"></label>
		<input
			name="task-date"
			type="date"
			class="my-2 rounded bg-slate-700 p-2"
		/>
		<button
			@click.prevent="$emit('submit')"
			type="button"
			class="m-1 self-center rounded-sm bg-emerald-700 p-2 font-semibold text-black hover:bg-teal-800"
		>
			Create TODO
		</button>
	</form>
</template>
