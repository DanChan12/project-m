import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress'

const MRoutes = [
    {
        path: '/',
        component: () => import('@/layout/index.vue'),
        redirect: '/home',
        children: [
            {
              name: 'home',
              path: 'home',
              component: () => import('@/views/Home/index.vue'),
              
            },
            {
                name: 'web',
                path: 'web',
                component: () => import('@/views/Product/web.vue'),
            },
            {
                name: 'cdn',
                path: 'cdn',
                component: () => import('@/views/Product/cdn.vue'),
            },
            {
                name: 'color',
                path: 'color',
                component: () => import('@/views/Product/color.vue'),
            },
            {
                name: 'contact',
                path: 'contact',
                component: () => import('@/views/Product/contact.vue'),
            },
            {
                name: 'live',
                path: 'live',
                component: () => import('@/views/Product/live.vue'),
            },
            {
                name: 'monitor',
                path: 'monitor',
                component: () => import('@/views/Product/monitor.vue'),
            },
            {
                name: 'metamask',
                path: 'metamask',
                component: () => import('@/views/Product/metamask.vue'),
            },
            {
                name: 'sport',
                path: 'sport',
                component: () => import('@/views/Product/sport.vue'),
            },
            {
                name: 'yime',
                path: 'yime',
                component: () => import('@/views/Product/yime.vue'),
            },
            {
                name: 'cooperate',
                path: 'cooperate',
                component: () => import('@/views/Cooperate/index.vue'),
            },
            {
                name: 'hatch',
                path: 'hatch',
                component: () => import('@/views/Hatch/index.vue'),
            },
            {
                name: 'brand',
                path: 'brand',
                component: () => import('@/views/Brand/index.vue'),
            },
            {
                name: 'about',
                path: 'about',
                component: () => import('@/views/About/index.vue'),
            },
            {
                name: 'demo',
                path: 'demo',
                component: () => import('@/views/Demo/index.vue'),
            },
        ]
    },
    {
        path: '/404',
        name: '404',
        component: () => import('@/views/NotFound/index.vue')
    },
    {
        path: '/:pathMatch(.*)',
        redirect: '/404'
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: MRoutes
})


router.beforeEach((_to, _from, next) => {
    NProgress.start()
    next()
  })
  
  router.afterEach(() => {
    NProgress.done()
  })

export default router