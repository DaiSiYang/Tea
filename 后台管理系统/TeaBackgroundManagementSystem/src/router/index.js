import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/login',
            component: () => import('@/views/Login/index.vue'),
            meta: {requiresAuth: false}  // 登入页面不需要验证
        },
        {
            path: '/register',
            component: () => import('@/views/Register/index.vue'),
            meta: {requiresAuth: false}  // 注册页面不需要验证
        },
        {
            path: '/',
            redirect: '/login',
            meta: {requiresAuth: false}  // 登入页面不需要验证
        },
        {
            path: '/home',
            component: () => import('@/views/Home/index.vue'),
            meta: {requiresAuth: true},
            children: [
                {
                    path: '',
                    meta: {requiresAuth: true},
                    redirect: '/home/user/Alluser'
                },
                {
                    path: '/home/user/Info',
                    component: () => import('@/views/User/Info.vue'),
                    meta: {requiresAuth: true}
                },
                {
                    path: '/home/user/Alluser',
                    component: () => import('@/views/User/Alluser.vue'),
                    meta: {requiresAuth: true}
                },
                {
                    path: '/home/Content/classify',
                    component: () => import('@/views/Content/Classify.vue'),
                    meta: {requiresAuth: true}
                },
                {
                    path: '/home/Content/Commodity',
                    component: () => import('@/views/Content/Commodity.vue'),
                    meta: {requiresAuth: true}
                },
                {
                    path: '/home/Content/Essay',
                    component: () => import('@/views/Content/Essay.vue'),
                    meta: {requiresAuth: true}
                },
                {
                    path: '/home/Content/Essay/comments/:id',
                    component: () => import('@/views/Content/Comments.vue'),
                    meta: {requiresAuth: true}
                }
            ]
        }
    ]
});
router.beforeEach((to, from, next) => {
    // 获取 Token
    const token = localStorage.getItem('token');

    // 判断目标路由是否需要登录验证
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // 如果需要验证并且没有 Token，跳转到登录页面
        if (!token) {
            next({path: '/login'});  // 重定向到登录页面
        } else {
            next();  // 继续访问目标路由
        }
    } else {
        next();  // 如果不需要验证，直接访问目标路由
    }
})
export default router
