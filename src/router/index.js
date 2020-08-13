import Vue from 'vue'
import Router from 'vue-router'
import Search from '/home/nebi/webtech/cardealer/src/components/Search.vue'
import Car from '/home/nebi/webtech/cardealer/src/components/Car.vue'
import Home from '/home/nebi/webtech/cardealer/src/components/Home.vue'
import NewCar from '/home/nebi/webtech/cardealer/src/components/NewCar.vue'



Vue.use(Router)
export default new Router({  
  mode: "history",
  routes: [
    {path:'/car' ,component:NewCar},
    {path: "/", component: Home,},
    {path: "/search", component: Search,},
    {path: "/car/id/:id", component: Car, props: true}
   
  ],
  
});