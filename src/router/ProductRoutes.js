import {ProductListPage} from '../components/content/pages/product'
import {ProductDetailPage} from '../components/content/pages/product'
import {ProductOrderPage} from '../components/content/pages/product'

const ProductRoutes = [
    { path: '', name : 'home', component: ProductListPage },
    { path: 'list', name:'product-list', component: ProductListPage },
    { path: 'detail', name:'product-detail', component: ProductDetailPage },
    { path: 'order', name:'product-order', component: ProductOrderPage },
];

export default ProductRoutes