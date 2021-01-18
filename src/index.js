// import Vue from 'vue'
// import App from './App.vue'


Vue.config.productionTip = false

/*new Vue({
  render: h => h(App),
}).$mount('#app')*/

var Profile = Vue.extend({
  //render: h => h(App),
  template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
  data: function () {
    return {
      firstName: 'Walter11',
      lastName: 'White22',
      alias: 'Heisenberg33'
    }
  }
})
// 创建 Profile 实例，并挂载到一个元素上。
new Profile().$mount('#app')

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: '页面加载于 ' + new Date().toLocaleString()
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: '学习 JavaScript' },
      { text: '学习 Vue' },
      { text: '整个牛项目' }
    ]
  }
})
//反转事件
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
//表单双向绑定
var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})
//自定义组件
Vue.component(
    'todo-item', {
    props:['todo'],
    template:'<li>{{todo.val}}</li>'
})

var app7=new Vue({
  el:'#ol',
  data:{
    list:[
      {id:0,val:'demo01'},
      {id:1,val:'demo02'},
      {id:2,val:'demo03'}
    ]
  }
})


var data={a:0}
var app8=new Vue({
  el:'#app8',
  data:data
})

app8.$watch({
  a(oldValue,newValue){
    alert(oldValue);
    alert(newValue);
  }
})

