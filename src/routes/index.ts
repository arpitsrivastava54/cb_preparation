import { lazy } from 'react'

export const routes = [
  {
    path: '/',
    title:"HomePage",
    component: lazy(() => import('../pages/home'))
  },
  {
    path: '/login',
    title:"LoginPage",
    component: lazy(() => import('../pages/login'))
  }, 
  {
    path: '/learn',
    title:"LearnPage",
    component: lazy(() => import('../pages/learn'))
  }, 
  {
    path: '*',
    title:"HomePage",
    component: lazy(() => import('../pages/home'))
  },
  {
    path: '/sidebar',
    title:"SideBar",
    component: lazy(() => import('../pages/sidebar'))
  },
  {
    path: '/tnc',
    title:"Terms",
    component: lazy(() => import('../pages/tnc'))
  },
  {
    path: '/footer',
    title:"Footer",
    component: lazy(() => import('../pages/footer'))
  },
  {
    path: '/frontpage',
    title:"Frontpage",
    component: lazy(() => import('../pages/frontpage'))
  },
]