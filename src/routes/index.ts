import { lazy } from 'react'

export const routes = [
  {
    path: '/',
    title:"HomePage",
    component: lazy(() => import('../pages/home'))
  },
  {
    path: '/layout',
    title:"MainLayoutPage",
    component: lazy(() => import('../pages/mainLayoutPage'))
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
    path: '/terms-and-conditions',
    title:"LearnPage",
    component: lazy(() => import('../pages/termsAndConditions'))
  }, 
  {
    path: '/privacy-and-policy',
    title:"LearnPage",
    component: lazy(() => import('../pages/privacy'))
  }, 
  {
    path: '/refund-policy',
    title:"LearnPage",
    component: lazy(() => import('../pages/refund'))
  }, 
  {
    path: '*',
    title:"HomePage",
    component: lazy(() => import('../pages/home'))
  },
]