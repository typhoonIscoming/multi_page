import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Newpage from '@/pages/test/pages/newpage'
import Third from '@/components/thirdPage'

Vue.use(Router)
console.log(123)
export default new Router({
 	mode: 'history',
  	base: '/test',
  	routes: [
    	{
      		path: '/',
      		name: 'Third',
      		component: Third
    	}
  	]
})