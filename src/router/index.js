import { createRouter, createWebHistory } from "vue-router";
import BeerView from "../views/Beer/BeerView.vue";

const routes = [
	{
		path: "/",
		name: "BeerView",
		component: BeerView,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
