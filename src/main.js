// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from './routes';
// import VueAwesomeSwiper from 'vue-awesome-swiper';
// import 'lib-flexible'

Vue.config.productionTip = false;
Vue.use((()=>import('vue-awesome-swiper'))());

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App: () => import('./App') },
	template: '<App/>'
})
