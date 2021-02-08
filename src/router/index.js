import VueRouter from 'vue-router'
import {ProductContent} from '../components/content/'
import {MemberContent} from '../components/content/'
import ProductRoutes from './ProductRoutes.js'
import MemberRoutes from './MemberRoutes.js'
import {CustomerServicePage} from '../components/pages/'

const routes = [

    { path: '/', redirect: '/product', name : 'index'},
    { path: '/product', component: ProductContent,
        children: ProductRoutes
    },
    { path: '/member', component: MemberContent,
        children: MemberRoutes
    },
    { path: 'customer-service',name : 'customer-service', component: CustomerServicePage},
];

export default new VueRouter({
    //mode: 'history',
    routes:routes // `routes: routes`의 줄임
})