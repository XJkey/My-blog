import Vue from 'vue';
import zhCN from 'vee-validate/dist/locale/zh_CN'
import { localize } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import { ValidationObserver,ValidationProvider ,extend,setInteractionMode } from 'vee-validate';
setInteractionMode('lazy');
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});



localize('zhCN', zhCN);
