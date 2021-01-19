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

//实例方法
var data={a:0}
var app9=new Vue({
  el:'#app9',
  data:data
})

app9.$watch('a',function(newValue,oldValue){
  // 这个回调将在 `vm.a` 改变后调用
  this.a=newValue+oldValue+'1'

})

//span中使用v-html后span会被替换成HTML
var Profile1 = Vue.extend({
  //render: h => h(App),

  data: function () {
    return {
      rawHtml : '<span style="color:red">this should be red</span>'
    }
  }
})
// 创建 Profile 实例，并挂载到一个元素上。
new Profile1().$mount('#app10')
//v-on绑定事件
var app11=new Vue({
  el:'#app11',
  methods:{
    dothis:function (){
      alert(1111)
    }
  }
})
//v-if条件渲染
var app11=new Vue({
  el:'#app12',
  data:{
    awesome:false
  }
})

//用 v-for 把一个数组对应为一组元素
var app13 = new Vue({
  el: '#app13',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})
//v-for还支持参数，当前遍历项中的索引，
var app14 = new Vue({
  el: '#app14',
  data: {
    parent:'parent',
    items: [
      { message: 'obj0' },
      { message: 'obj1' }
    ]
  }
})
//也可以用v-for循环遍历对象中的property,需要提供键值参数名,顺序不能颠倒，value在前，name在后，如有index,在最后
var app15 = new Vue({
  el: '#app15',
  data: {

    object:{
      name:'zhangsan',
      value:'the value'
    }
  }
})
//例如 filter()、concat() 和 slice()。它们不会变更原始数组，而总是返回一个新数组
var app16 = new Vue({
  el: '#app16',
  data: {
    items: [
      1,4,3,2,5
    ]
  },
  computed: {
    countitems: function () {
      return this.items.filter(function (item) {
        return item % 2 === 0
      })
    }
  }
})

//在v-for嵌套中使用方法，v-for也支持整数，如num in 100
var app17 = new Vue({
  el: '#app17',
  data: {
    items:[
      [1,4,3,2,5],[6, 7, 8, 9, 10]
]
  },
  methods: {
    even: function (numbers11) {
      return numbers11.filter(function (number) {
        return number % 2 === 0
      })
    }
  }
})
//嵌套使用v-if和v-for
var app18= new Vue({
  el:'#app18',
  data:{
    todos:[]
  }
})

Vue.component('todo-item', {
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">Remove</button>\
    </li>\
  ',
  props: ['title']
})

new Vue({
  el: '#todo-list-example',
  data: {
    newTodoText: '',
    todos: [
      {
        id: 1,
        title: 'Do the dishes',
      },
      {
        id: 2,
        title: 'Take out the trash',
      },
      {
        id: 3,
        title: 'Mow the lawn'
      }
    ],
    nextTodoId: 4
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  }
})
//v-on 监听事件处理简单逻辑
new Vue({
    el:"#app19",
  data:{
      counter:0
  }
})

//通过方法处理v-on监听事件
new Vue({
  el:"#app20",
  data:{
  name:'the vue.js'
  },
  methods:{
    greet:function(event11){
      alert('output：'+this.name)
      if(event11){//所绑定元素
        alert(event11.target.tagName)
      }
    }
  }
})
//通过$event参数阻止默认事件，warn方法无参数则直接用event
new Vue({
  el:"#app21",
  methods: {
    warn: function (message, event) {
      // 现在我们可以访问原生事件对象

      if (event) {
        event.preventDefault()
      }
      alert(message)
    }
  }
})
//按键修饰符
//esc,enter,
new Vue({
  el:"#app22",
  methods: {
    submit: function () {
      // 现在我们可以访问原生事件对象


      alert('enter ke up')
    }
  }
})
//exact修饰符，有且只有Ctrl被按下才行
new Vue({
  el:"#app23",
  methods: {
    onClick: function () {
      alert('app23 on click')
    }
  }
})
//按键绑定
new Vue({
  el:"#app24",
  data:{
    message:""
  }

})
//单个复选框绑定
new Vue({
  el:"#app25",
  data:{
    checked:""

  }

})
//多个复选框绑定
new Vue({
  el:"#app26",
  data:{

    checkedNames:[]
  }

})
//表单修饰符lazy
new Vue({
  el:"#app27",
  data:{

    msg:""
  }

})
//自定义组件
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})

new Vue({ el: '#components-demo' })

//监听子组件事件


Vue.component('blog-post1', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button  v-on:click="$emit('enlarge-text')">
        Enlarge text
      </button>
      <div v-html="post.content"></div>
    </div>
  `
})
new Vue({
  el: '#blog-posts-events-demo',
  data: {
    posts: ['title'],
    postFontSize: 1
  }
})