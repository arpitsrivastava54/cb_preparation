import { lazy } from 'react'

export const routes = [
  {
    path: '/',
    title:"HomePage",
    component: lazy(() => import('../pages/home'))
  },
  {
    path: '/signin',
    title:"SignInPage",
    component: lazy(() => import('../pages/signIn'))
  }, 
  {
    path: '/signup',
    title:"SignUpPage",
    component: lazy(() => import('../pages/signUp'))
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
]