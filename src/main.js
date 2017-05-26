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

var componentRoot = new Vue({
  data: function () {
    return {
      answer: null
    }
  },
  template:
    '<div>' +
    '<p>あなたが選んだ選択肢は {{ answer }}</p>' +
    '<button type="button" @click="setAnswer( true )">O</button>' +
    '<button type="button" @click="setAnswer( false )">X</button>' +
    '<div v-if="answer === true">' +
    '正解です' +
    '</div>' +
    '<div v-if="answer === false">' +
    '間違いです' +
    '</div>' +
    '</div>',
  methods: {
    setAnswer: function ( value ) {
      this.$data.answer = value;
    }
  }
});

componentRoot.$mount( '#MyAppRoot' );
