import SignUpPage from '../components/content/pages/member/SignUpPage.vue'
import MemberCartPage from '../components/content/pages/member/MemberCartPage.vue'
import MemberInfoPage from '../components/content/pages/member/MemberInfoPage.vue'
import SignInPage from '../components/content/pages/member/SignInPage.vue'

const MemberRoutes = [
    { path: '', component: SignUpPage },
    { path: 'signup',name : 'member-sign-up', component: SignUpPage },
    { path: 'info',name : 'member-info', component: MemberInfoPage },
    { path: 'cart',name : 'member-cart', component: MemberCartPage },
    { path: 'signin',name : 'member-sign-in', component: SignInPage },
];

export default MemberRoutes