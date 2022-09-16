<template>
    <div class="vs-checkbox-group" ref="root" @click.stop="getCheckList">
        <slot></slot>
        <!-- <button @click="selectAll">全选</button> -->
        <!-- <button @click="inverse">取反</button> -->
    </div>
</template>


<script>
export default {
    name: 'VsCheckboxGroup',
    props: {
        type: String, 
        shape: {
            type: String,
            default: 'round',
        }, 
        direction: String,
        checkedList: {
            type: Array,
            default: () => ([]),
        },
    },
    data() {
        return {
            checkList: this.checkedList,
        }
    }, 
    methods: {
        getCheckList() {
            // for(let v of this.checkList) {
            //     console.log(v.checked)
            // }
            // console.log(this.checkList)

            return this.checkList
        },
        selectAll() {
            for(let v of this.checkList) {
                console.log("ori: ", v.checked)
                v.checked = true
                console.log("selectAll: ", v.checked)
            }
        },
        inverse() {
            for(let v of this.checkList) {
                console.log(v.checked)
                v.checked = !v.checked
                console.log("inversed: ", v.checked)
            }
        },
        changeList(name) {
            let choosen = this.checkList.filter(item => item.name === name)[0]
            choosen.checked = !choosen.checked
        },
    },
    provide() {
        return {
            checklist: this.checkList,
            changeList: this.changeList,
        }
    },
    created() {
        this.selectType = this.type === 'cross' ?  'anti-checked' : 'checked'
        this.listDirection = this.direction === 'horizontal' ? 'flex' : ''
    },
    mounted() {
        this.outShape = this.shape === 'square' ? '0' : 'round'
        this.$refs.root.style.setProperty('--item-shape', "round")
        if(this.type === 'cross') {
            this.$refs.root.style.setProperty('--item-type', '"\\e6d7"')
            this.$refs.root.style.setProperty('--item-background', 'red')
            // this.$refs.root.setPropery('--checked-type', '"\\e6d7"')
            // this.$refs.root.setPropery('--checked-background', 'red')
            // this.$refs.root.setPropery('--checked-type', '"\\e6dc"')
            // this.$refs.root.setPropery('--checked-background', '#1989FA')
        }
        if(this.direction === 'horizontal') {
            this.$refs.root.style.display = 'flex'
            this.$refs.root.style.flexWrap = 'wrap'
        }
    
        // for(let v of this.checkList) {
        //     console.log(v.name, v.checked)
        // }
    },
    computed: {
    },
}
</script>


<style scoped>
.vs-checkbox-group {
    --item-type: '\e6dc';
    --item-background: #1989FA;
    --item-shape: 50%;
}
.vs-checkbox {
    --checked-type: var(--item-type);
    --checked-background: var(--item-background);
    --shape: var(--item-shape);
}
</style>