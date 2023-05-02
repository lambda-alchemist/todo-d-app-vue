import { createRouter, createWebHistory } from 'vue-router';
import HomeLandingVue from '@/view/HomeLanding.vue';
import TodoAppVue from '@/view/TodoApp.vue';
import AboutUsVue from '@/view/AboutUs.vue'

export const routes = [
	{
		id: 0,
		path: '/',
		name: 'Home',
		component: HomeLandingVue,
	},
	{
		id: 1,
		path: '/todo-d-app',
		name: 'Todo App',
		component: TodoAppVue,
	},
	{
		id: 2,
		path: '/about-us',
		name: 'About Us',
		component: AboutUsVue,
	},
]

export default createRouter({
	history: createWebHistory(),
	routes,
})
