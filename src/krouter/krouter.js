// import Vue from 'vue';
let Vue;
class VueRouter {
    constructor(options){
        this.options = options;
        console.log(333)
        console.log(this.options)
        //创建一个路由path和router的映射
        this.routerMap = {};

        //将来当前路径current需要响应式
        this.app = new Vue({
            data: {
                current: '/'
            }
        })
    }

    init(){
        this.bindEvents();

        //解析路由配置
        this.createRouterMap(this.options);

        //创建router-link和router-view
        this.initComponents();
    }
    bindEvents(){
        window.addEventListener('hashchange',this.onHashChange.bind(this))
        window.addEventListener('loader',this.onHashChange.bind(this))
    }

    createRouterMap(options){
        options.routes.forEach(item => {
            this.routerMap[item.path] = item;
        })
    }

    initComponents(){
        //声明两个全局组件
        Vue.component('router-link',{
            props: {
                to: String
            },
            render(h){
                return h('a',{attrs:{href:'#'+this.to}},this.$slots.default)

                // return(
                //     <a href={this.to}>{this.$slots.default}</a>
                // )
            }
        })

        Vue.component('router-view',{
            render:(h) => {
                const Comp = this.routerMap[this.app.current].component;
                return h(Comp)
            }
        })
    }
    onHashChange(){
        this.app.current = window.location.hash.slice(1) || '/'
    }

}

//把vuerouter变成插件
VueRouter.install =function (_Vue){
    Vue = _Vue;//这里保存，上面使用
    // Vue.
    // 混入任务
    Vue.mixin({
        beforeCreate() {
            //这里的代码将来会在外面初始化的时候被调用
            // 这里就实现了Vue的扩展
            //
           
            if(this.$options.router){
                Vue.prototype.$router = this.$options.router;
                this.$options.router.init();
            }
            
        },
    })
}

export default VueRouter


