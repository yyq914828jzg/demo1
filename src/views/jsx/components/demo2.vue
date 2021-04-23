
<script>
export default {
    data() {
        return {
            obj: {
                class:"dd",
                attrs: {
                    id:"aa",
                },
                
                onClick: this.btn
            }
        }
    },
    render() {
        return(
            <div onClick={this.faBtn}>
                <div {...this.obj}></div>
                {
                    this.$scopedSlots.aa({
                        names:'jiazhigang'
                    })
                }
                <div 
                    on={{
                        '!click': this.btn
                    }}>
                    {
                        this.$scopedSlots.bb()
                    }
                </div>
            </div>
        )
    },
    methods: {
        btn(e) {
            e.stopPropagation()
            this.$mymessage({
                type:'warning',
                content:"cuocuocuo",
                duration:40000
            })
            this.$emit('click',1,2)
        },
        faBtn(){
            alert(2)
        }
    },
}
</script>

<style lang="scss" scoped>

</style>