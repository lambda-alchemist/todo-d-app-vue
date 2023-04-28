import { createRouter, createWebHistory } from 'vue-router';
import HomeViewVue from '@/view/HomeView.vue';
import TodoAppViewVue from '@/view/TodoAppView.vue';
import AboutUsViewVue from '@/view/AboutUsView.vue'

export const routes = [
	{
		id: 0,
		path: '/',
		name: 'Home',
		component: HomeViewVue,
	},
	{
		id: 1,
		path: '/todo-d-app',
		name: 'Todo App',
		component: TodoAppViewVue,
	},
	{
		id: 2,
		path: '/about-us',
		name: 'About Us',
		component: AboutUsViewVue,
	},
]

export default createRouter({
	history: createWebHistory(),
	routes,
})
