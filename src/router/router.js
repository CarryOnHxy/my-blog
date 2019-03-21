import Home from '@/views/Home.vue'
import article from '@/components/article/article.vue'
import video from '@/views/video.vue'
import quillEditor from '@/views/admin/article/quill-editor.vue'
import articleDetail from '@/components/article/article-detail.vue'
import articleCate from '@/views/article-cate.vue'
import login from '@/views/login.vue'
import Vue from 'vue'
import {
    judgeLoginState
} from '@/lib/util';
export const routes = [{
    path: '/', 
    name: 'home',
    component: Home,
    children: [{
            path: '/article',
            alias: "/",
            name: 'article',
            component: article,
            props: route => ({
                categroryId: route.query.categroryId,
                isSearched: route.query.isSearched,
                queryKey: route.query.queryKey
            })
        },
        {
            path: '/video',
            name: 'video',
            component: video
        },
        {
            path: '/article-detail',
            name: 'article-detail',
            component: articleDetail,
            props: route => ({
                articleId: Number(route.query['article_id'])
            })
        },
        {
            path: '/article-cate',
            name: 'article-cate',
            component: articleCate
        }
    ],
    props: () => ({
        loginState: judgeLoginState()
    })
}, {
    path: '/login',
    name: 'login',
    component: login,
}, {
    name: 'admin',
    path: '/admin',
    component: Home,
    children: [{
        path: 'article-admin',
        name: 'article-admin',
        alias: '/',
        beforeEnter: (to, from, next) => checkLogin(to, from, next),

        component: () => import('@/views/admin/article/article-admin.vue'), //lazy-load
    }, {
        path: 'video-admin',
        name: 'video-admin',
        component: () => import('@/views/admin/video/video-admin.vue'), //lazy-load
    }, {
        path: 'music-admin',
        name: 'music-admin',
        beforeEnter: (to, from, next) => checkLogin(to, from, next),
        component: () => import('@/views/admin/music/music-admin.vue'), //lazy-load
    }, {
        path: 'video-editor',
        name: 'video-editor',
        component: () => import('@/views/admin/video/video-editor.vue'), //lazy-load
        beforeEnter: (to, from, next) => checkLogin(to, from, next),
        props:route=> ({videoId:route.query.videoId,isEdit:route.query.isEdit})

    }, {
        name: 'music-editor',
        path: 'music-editor',
        component: () => import('@/views/admin/music/music-editor.vue'),
        props:route=> ({musicId:route.query.musicId,isEdit:route.query.isEdit}),
        beforeEnter: (to, from, next) => checkLogin(to, from, next),

    }, {
        name: 'article-editor',
        path: 'article-editor',
        component: quillEditor,
        beforeEnter: (to, from, next) => checkLogin(to, from, next),
        props:route=> ({articleId:route.query.articleId,isEdit:route.query.isEdit})
    }],
    props: () => ({
        loginState: judgeLoginState()
    })
}]

function checkLogin(to, from, next) {
    if (judgeLoginState()) next()
    else {
        new Vue().$message({message:'请先登陆',type:'error'});
        history.go(-1);
    }
}