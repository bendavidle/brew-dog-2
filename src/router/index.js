import { createRouter, createWebHistory } from "vue-router";
import BeerView from "../views/Beer/BeerView.vue";
import BeerDetails from "../views/Beer/BeerDetails.vue";

const routes = [
	{
		path: "/",
		name: "BeerView",
		component: BeerView,
	},
	{
		path: "/beer/:id",
		name: "BeerDetails",
		component: BeerDetails,
		props: true,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
