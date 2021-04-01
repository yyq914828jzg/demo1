
<script>
import demo from './demo.vue';
export default {
    data() {
        return {
            id:"1",
            list:['1','2','3'],
            cont:"测试"
        }
    },
    render() {
        return (
            <div>
                <demo
                    scopedSlots = {{
                        aa:scoped => {
                            return(
                                <div>{scoped.names}</div>
                            )
                        },
                        bb: scoped => {
                            
                        }
                    }}>
                </demo>
                <ul>
                    {this.list.map(el=>{
                        return <li 
                                    style={{color:el===this.id?'red':'blue'}}
                                    onClick={()=>this.btn(el)}>{el}</li>
                    })}
                </ul>
            </div>
        )
    },
    methods: {
        btn(el){
            this.id = el;
            console.log(el)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>