// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })

var StarIcon = Vue.extend({
  props: {
    size: {
      type: Number,
      default: 20
    }
  },
  template:
    '<svg :width="size" :height="size" viewBox="0 0 16 16">' +
    '<path fill="#FBC02D" d="M16 6.2l-5.3-1.12-2.7-4.69v13.01l4.94 2.21-.57-5.39 3.63-4.02zm0 0"/>' +
    '<path fill="#FDD835" d="M5.3 5.09l-5.3 1.11 3.63 4.02-.57 5.39 4.94-2.21v-13.01l-2.7 4.7zm0 0"/>' +
    '</svg>'
});

var AbsoluteNumber = Vue.extend({
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  template:
    '<div>{{ Math.abs( value ) }}</div>'
});

var componentRoot = new Vue({

  template: '<div>' +
    '<star-icon></star-icon>' +
    'hello!' +
    '<star-icon :size="40"></star-icon>' +
    '<star-icon :size="60"></star-icon>' +
    '<absolute-number :value="100"></absolute-number>' +
    '<absolute-number :value="-50"></absolute-number>' +
    '</div>',
  components: {
    AbsoluteNumber: AbsoluteNumber,
    StarIcon: StarIcon
  }

});

componentRoot.$mount( '#MyAppRoot' );
