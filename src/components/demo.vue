
<script>
export default {
    render() {
        return(
            <div>1111
                {
                    this.$scopedSlots.aa({
                        names:'jiazhigang'
                    })
                }
            </div>
        )
    },
}
</script>