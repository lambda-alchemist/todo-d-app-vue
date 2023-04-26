import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomeView,
	},
	{
		path: '/todo-d-app',
		name: 'Todo App',
		component: TodoAppView,
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;
