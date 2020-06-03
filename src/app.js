import "core-js/stable/promise";
import "regenerator-runtime/runtime";

import Vue from 'vue';
import Hello from './hello.vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue(Hello).$mount('#app');
});