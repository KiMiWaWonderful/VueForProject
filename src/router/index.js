import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from "vue-router";
// import HelloWorld from '@/components/HelloWorld'

const Home = () => import('../views/home/Home')
const Message = () => import('../views/message/Message')
const Profile = () => import('../views/profile/Profile')
const AddCar = () => import('../views/car/AddCar')
const AddGroup = () => import('../views/car/AddGroup')
const CarList = () => import('../views/car/CarList')

Vue.use(VueRouter)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })

const routes = [
  {
    path: '',
      redirect: '/home',
    meta: {
      footShow:true,
    }
  },
  {
    path: '/home',
    component: Home,
    meta: {
      footShow:true,
    }
  },
  {
    path: '/message',
    component: Message,
    meta: {
      footShow:true,
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      footShow:true,
    }
  },
  {
    path: '/car/car_list',
    component: CarList,
    meta: {
      footShow:false,
    }
  },
  {
    path: '/car/add_car',
    component: AddCar
  },
  {
    path: '/car/add_group',
    component: AddGroup
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router

