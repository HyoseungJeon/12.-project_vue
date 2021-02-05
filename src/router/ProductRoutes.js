import ProductListPage from '../components/content/pages/product/ProductListPage.vue'

const ProductRoutes = [
    { path: '', name : 'home', component: ProductListPage },
    { path: 'list', name:'product-list', component: ProductListPage },
];

export default ProductRoutes