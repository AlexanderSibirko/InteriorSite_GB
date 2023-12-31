import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogsView from '../views/BlogsView.vue'
import BlogDetailsView from '../views/BlogDetailsView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import PageNotFoundView from '../views/PageNotFoundView.vue'

const routes = [
   {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/blogs',
    name: 'BlogsView',
    component: BlogsView
  },
  {
    path: '/blogDetails/:id',
    name: 'BlogDetailsView',
    component: BlogDetailsView
  },
  {
    path: '/projects',
    name: 'ProjectsView',
    component: ProjectsView
  },
  {
    path: '/pagenotfound',
    name: 'PageNotFoundView',
    component: PageNotFoundView
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/pagenotfound'
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
