import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/stores',
      name: 'stores',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/Stores.vue')
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('./views/Account.vue'),
      children: [{
          path: '/account/login',
          component: () => import('./views/Login.vue')
        },
        {
          path: '/account/register',
          component: () => import('./views/Register.vue')
        },
        {
          path: '/account/rewards',
          component: () => import('./views/Rewards.vue')
        },
      ],
      redirect: '/account/login'
    },
    {
      path: '/menu/',
      name: 'menu',
      component: () => import('./views/Menu.vue'),
      // children: [{
      //     path: 'beverages',
      //     component: () => import('./views/Alllist.vue')
      //   },
      // ]
    },
    {
      path: '/menu/beverages',
      component: () => import('./views/Alllist.vue'),
      children: [{
          path: 'all',
          component: () => import('./components/Beverages_one.vue')
        },
        {
          path: 'modern-mixology',
          component: () => import('./components/Beverages_one.vue')
        },
        {
          path: 'espresso',
          component: () => import('./components/Beverages_one.vue')
        },
        {
          path: 'frappuccino-blended-beverage',
          component: () => import('./components/Beverages_one.vue')
        },
        {
          path: 'teavana',
          component: () => import('./components/Beverages_one.vue')
        },
        {
          path: 'signature-chocolate-beverage',
          component: () => import('./views/Alllist.vue')
        },
      ], redirect: '/menu/beverages/all'
    }
  ]
})