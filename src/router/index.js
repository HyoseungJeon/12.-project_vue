import VueRouter from 'vue-router'
import ProductContent from '../components/content/ProductContent.vue'
import MemberContent from '../components/content/MemberContent.vue'
import ProductRoutes from './ProductRoutes.js'
import MemberRoutes from './MemberRoutes.js'
import CustomerServicePage from '../components/pages/CustomerServicePage.vue'

const routes = [
    { path: '/', component: ProductContent,
        children: ProductRoutes
    },
    { path: '/member', component: MemberContent,
        children: MemberRoutes
    },
    { path: 'customer-service',name : 'customer-service', component: CustomerServicePage},
];

export default new VueRouter({
    routes:routes // `routes: routes`의 줄임
})