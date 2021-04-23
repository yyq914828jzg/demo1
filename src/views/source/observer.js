//  Observer类会通过递归的方式把一个对象的所有属性都转化成可观测对象
import Dep from './dep.js';
export default class Observer {
    constructor(value) {
        this.value = value;
        //给value新增一个__ob__属性，值为该value的Observer实例
        //相当于为value打上标记,表示它已经被转化成响应式了，避免重复操作
       //  default(value,'__obj__',this)
       if(Array.isArray(value)){
           //当value为数组时的逻辑
       }else {
           this.walk(value);
       }
    }

    walk(obj) {
        const keys = Object.keys(obj);
        for(let i=0;i<keys.length;i++) {
           this.defineReactive(obj,keys[i])
        }
    }

    //使一个对象转化成可观测对象
    defineReactive(obj,key,val) {
       if(arguments.length === 2) {
           val = obj[key]
       };
       if(typeof val ==='object') {
           new Observer(val)
       };

       const dep = new Dep(); //实例化一个依赖管理器，生成一个依赖管理数组dep

       Object.defineProperty(obj,key,{
           enumerable: true,
           configurable: true,
           get() {
               console.log(`${key}属性被读取了`)
               dep.depend(); //在getter中收集依赖
               return val;
           },

           set(newVal) {
               if(val === newVal) {
                   return;
               }
               console.log(`${key}属性被设置了`)
               val = newVal;
               dep.notify() //在setter中通知依赖更新
           }
       })
    }
}