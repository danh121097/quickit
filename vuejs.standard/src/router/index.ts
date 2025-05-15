import { setupLayouts } from 'virtual:generated-layouts';
import { createRouter, createWebHistory } from 'vue-router';
import generatedRoutes from '~pages';
import NotFound from '../pages/[...all].vue';

const routes = setupLayouts(generatedRoutes);

// Ensure we have a proper catch-all route at the end
const hasNotFoundRoute = routes.some(
  (route) => route.path === '/:pathMatch(.*)*' || route.path === '/:all(.*)',
);

if (!hasNotFoundRoute) {
  routes.push({
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  });
}

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { left: 0, top: 0, behavior: 'smooth' };
  },
});

router.beforeEach(async (_to, _from, next) => {
  // Add any global navigation guards here
  return next();
});

export default router;
