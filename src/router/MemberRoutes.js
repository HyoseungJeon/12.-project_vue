import {SignUpPage} from '../components/content/pages/member/'
import {MemberCartPage} from '../components/content/pages/member/'
import {MemberInfoPage} from '../components/content/pages/member/'
import {SignInPage} from '../components/content/pages/member/'

const MemberRoutes = [
    { path: '', component: SignUpPage },
    { path: 'signup',name : 'member-sign-up', component: SignUpPage },
    { path: 'info',name : 'member-info', component: MemberInfoPage },
    { path: 'cart',name : 'member-cart', component: MemberCartPage },
    { path: 'signin',name : 'member-sign-in', component: SignInPage },
];

export default MemberRoutes