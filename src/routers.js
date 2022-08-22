import SignUp from './components/SignUp.vue'
import LogIn from './components/LogIn.vue'
import DashBoard from './components/DashBoard.vue'
import MyFeed from './components/MyFeed.vue'
import ExploreView from './components/ExploreView.vue'
import CreatePost from './components/CreatePost.vue'
import ReadLater from './components/ReadLater.vue'

import {createRouter,createWebHistory} from 'vue-router'

const routes=[
  {
    name:'SignUp',
    component:SignUp,
    path:'/signup'

  },
  {
    name:'LogIn',
    component:LogIn,
    path:'/'

  },
  {
    name:'DashBoard',
    component:DashBoard,
    path:'/dashboard',
    children:[
    {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        name: 'MyFeed',
        path: '',
        component: MyFeed,
      },
        {
          name:'ExploreView',
          path:'/explore',
          component:ExploreView,
        },
        {
          name:'CreatePost',
          path:'/createpost',
          component:CreatePost,
        },
        {
          name:'ReadLater',
          path:'/readlater',
          component:ReadLater

        },

]
  },

]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

export default router;
