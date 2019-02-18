import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import article from '@/components/article/article.vue'
import video from '@/views/video.vue'
import quillEditor from '@/views/quill-editor.vue'
import articleDetail from '@/components/article/article-detail.vue'
import articleCate from '@/views/article-cate.vue'
import login from '@/views/login.vue'
Vue.use(Router)
export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
    children: [{
        path: '/article',
        alias:"/",
        name: 'article',
        component: article
      },
      {
        path: '/video',
        name: 'video',
        component: video
      },
      {
        path: '/quill',
        name: 'quill',
        component: quillEditor
      },
      {
        path: '/article-detail',
        name: 'article-detail',
        component: articleDetail
      },
      {
        path: '/article-cate',
        name: 'article-cate',
        component: articleCate
      }
    ]
  }, {
    path: '/login',
    name: 'login',
    component: login,
  }]
})