import Home from '@/views/Home.vue'
import article from '@/components/article/article.vue'
import video from '@/views/video.vue'
import quillEditor from '@/views/quill-editor.vue'
import articleDetail from '@/components/article/article-detail.vue'
import articleCate from '@/views/article-cate.vue'
import login from '@/views/login.vue'
import {judgeLoginState} from '@/lib/util';
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
                queryKey:route.query.queryKey
            })
        },
        {
            path: '/video',
            name: 'video',
            component: video
        },
        {
            path: '/quill',
            name: 'quill',
            component: quillEditor,
            beforeEnter: (to,from,next) =>{
                if(judgeLoginState()) next()
                else {
                    alert('请先登录');
                    history.go(-1);
                }
            }
        },
        {
            path: '/article-detail',
            name: 'article-detail',
            component: articleDetail,
            props: route => ({
                articleId: route.query['article_id']
            })
        },
        {
            path: '/article-cate',
            name: 'article-cate',
            component: articleCate
        }, {
            path: '/video-editor',
            name: 'video-editor',
            component: () => import('@/views/video-editor.vue') ,//lazy-load
            beforeEnter: (to,from,next) =>{
                if(judgeLoginState()) next();
                else {
                    alert('请先登录');
                    history.go(-1);
                }
            }

        }
    ],
    props:()=> ({loginState:judgeLoginState()})
}, {
    path: '/login',
    name: 'login',
    component: login,
}]