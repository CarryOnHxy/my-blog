import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import article from './views/article.vue'
import video from './views/video.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/article',
      name: 'article',
      component: article
    },
    {
      path: '/video',
      name: 'video',
      component: video
    }
  ]
})
