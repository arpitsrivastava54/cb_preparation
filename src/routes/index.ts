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
]