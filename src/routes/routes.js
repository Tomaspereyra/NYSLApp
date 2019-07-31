import DashboardLayout from '../layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../pages/NotFoundPage.vue'

// Admin pages
import Overview from 'src/pages/Overview.vue'
import UserProfile from 'src/pages/UserProfile.vue'
import TableList from 'src/pages/TableList.vue'
import Typography from 'src/pages/Typography.vue'
import Icons from 'src/pages/Icons.vue'
import Maps from 'src/pages/Maps.vue'
import Notifications from 'src/pages/Notifications.vue'
import Upgrade from 'src/pages/Upgrade.vue'
import Home from 'src/pages/Home.vue'
import About from 'src/pages/About.vue'
import Registration from 'src/pages/Registration.vue'
import Games from 'src/pages/Games.vue'
import Game from 'src/pages/Game.vue'
import Login from 'src/pages/Login.vue'
const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/home'
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/',
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
      {
        path:'home',
        name:'Home',
        component: Home

      },
      {
        path:'about',
        name:'About',
        component:About

      },
      {
        path:'registration',
        name:'Registration',
        component:Registration
      },
      {
        path:'games',
        name:'Games',
        component: Games
      },{
        path:'game',
        name:'Game',
        component: Game
      },
      {
        path:'login',
        name:'Login',
        component:Login

      },
      {
        path: 'user',
        name: 'User',
        component: UserProfile
      },
      {
        path: 'table-list',
        name: 'Table List',
        component: TableList
      },
      {
        path: 'typography',
        name: 'Typography',
        component: Typography
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'Maps',
        component: Maps
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      },
      {
        path: 'upgrade',
        name: 'Upgrade to PRO',
        component: Upgrade
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
