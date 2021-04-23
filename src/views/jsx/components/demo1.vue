
<script>
import child from './demo2.vue'
export default {
    data() {
        return {
            list: ['1','2','3'],
            active:'1',
        }
    },
    mounted () {
        this.$set(this.list,2,'555');
    },
    render(){
        return(
            <div>
                <h2>列表</h2>  
                <ul>
                    {this.list.map(el=>{
                        return <li class="aa" style={{color:el===this.active?'red':'blue'}} onClick={()=>this.btn(el)}>{el}</li>
                    })}
                </ul>
                <h2>插槽</h2>
                <child 
                    scopedSlots = {{
                        aa: scoped=>{
                            return <div>{scoped.names}</div>
                        },
                        bb: () => {
                            return <p>具名插销</p>
                        }
                    }}
                    on={{
                        click: this.$_click
                    }}
                    nativeOn={{
                        click: this.click2
                    }}>
                </child>
            </div>
        )
    },
    methods: {
        btn(el) {
            this.active = el;
        },
        $_click(val,val2){
            console.log(val,val2)
        },
        click2(){
        }
    },
}
</script>
<style lang="scss">
    .aa {
        font-size: 30px;
    }
</style>

