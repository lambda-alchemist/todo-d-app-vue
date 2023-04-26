import { createRouter, createWebHistory } from 'vue-router';
import HomeViewVue from '@/view/HomeView.vue';
import TodoAppViewVue from '@/view/TodoAppView.vue';

export const routes = [
	{
		id: 0,
		path: '/',
		name: 'Home',
		component: HomeViewVue,
	},
	{
		path: '/todo-d-app',
		name: 'Todo App',
		component: TodoAppViewVue,
	}
];

export default createRouter({
	history: createWebHistory(),
	routes,
})
