import Vue from 'vue'
import Router from 'vue-router'
// 
import Login from '../components/account/login/Login.vue'
import Shop from '../components/shop/Shop.vue'
import goodsDetail from '../components/shop/goods/Detail.vue'
import goodsList from '../components/shop/goods/List.vue'
import ordrerComplete from '../components/shop/order/Complete.vue'
import ordrerPay from '../components/shop/order/Pay.vue'
import ordrerSite from '../components/shop/order/Site.vue'
import Shopcart from '../components/shop/shopcart/Shopcart.vue'


Vue.use(Router)
let goods=[
  { name: 'goodsDetail', path: 'goods/detail/:id', component: goodsDetail },
  { name: 'goodsList', path: 'goods/list', component: goodsList },
]
let orders=[
  { name: 'ordrerComplete', path: 'order/complete', component: ordrerComplete },
  { name: 'ordrerPay', path: 'order/pay', component: ordrerPay },
  { name: 'ordrerSite', path: 'order/site', component: ordrerSite },
]
let shopcart=[
  { name: 'shopcart', path: 'shopcart', component: Shopcart },
]
export default new Router({
  routes: [
    // 登录
    { name:'login',path:'/login',component:Login},
    // 商品管理
    {name:'shop',path:'/',component:Shop,children:[...goods,...orders,...shopcart]}
  ]
})
