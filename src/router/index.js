import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AboutUs from '../views/AboutUs'
import BriefIntroduction from '../views/BriefIntroduction'
import Business from '../views/Business'
import Case from '../views/Case'
import ContactMe from '../views/ContactMe'
import News from '../views/News'



Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
    {
      path: '/ContactMe',
      component: ContactMe
    },
    {
      path: '/Case',
      component: Case
    },
    {
      path: '/News',
      component: News
    },
    {
      path: '/Business',
      component: Business
    },
    {
      path: '/BriefIntroduction',
      component: BriefIntroduction
    },{
      path: '/AboutUs',
      component: AboutUs
    },




]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
