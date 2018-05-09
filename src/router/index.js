import Vue from 'vue'
import Router from 'vue-router'
import DragForm from '@/components/DragForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DragForm',
      component: DragForm
    }
  ]
})
