# vuex_demo
## 介绍
Vuex是一个专为vue.js应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。vuex也集成到vue的官网调试工具devtools extesion,提供了如零配置的time-travel调试、状态快照导入导出等高级调试功能。

## 简单的非父子组件通信可以用父组件代理

```jsx
var bus = new Vue();

bus.$emit('id-selected',1);

bus.$on('id-selected',function(id){

});
```


## 代码步骤
1. 安装vuex `npm install --save vuex`
2. 在main.js当中添加`import store from './store.js';`
3. 在new Vue的时候修改为

```jsx
new Vue({
  store,
  el: '#app',
  template: '<App/>',
  components: { App }
})
```

4. 创建store.js文件
```jsx
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {
    count:0
};

export default new Vuex.Store({
    state
})
```

Vuex使用单一状态树，用一个对象就包含了全部的应用层级状态。至此它便作为一个唯一数据源而存在。这也意味着，每个应用将仅仅包含一个store实例。单一状态树让我们能够直接定位任一特定的状态片段，在调试的过程中也能轻易的取得整个应用状态的快照。

5. 在App.vue当中使用

```jsx
  computed:{
    ...mapState(['count'])
  }
```

```jsx
<template>
  <div id="app">
    {{count}}
  </div>
</template>
```

6. 我们所有的状态都存在state里面，有些时候state也需要一些计算运算，这时候我们可以使用getters

```jsx
<script>
import Hello from './components/Hello'
import {mapState,mapGetters} from 'vuex';

export default {
  name: 'app',
  components: {
    Hello
  },
  computed:{
    ...mapGetters({getCount:'count'}),
    ...mapState(['count'])
  }
}
</script>
```

```jsx
<template>
  <div id="app">
    {{count}}
    {{getCount}}
  </div>
</template>
```

7. 用户通过事件操作改变state的值 --> 通过mutations直接改(适合一些同步的简单的情况下可以用)

```jsx
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {
    count:0
};
const getters = {
    count(state){
        return state.count + 10;
    }
}
const mutations = {
    increment(state,n){
        state.count+=n;
    }
};
export default new Vuex.Store({
    state,
    getters,
    mutations
})
```

```jsx
const mutations = {
    increment(state,n){
        state.count+=n;
    }
};
export default new Vuex.Store({
    state,
    getters,
    mutations
})
```

8. 我们应该通过dispatch --> actions来进行修改状态 --> 最终代码效果