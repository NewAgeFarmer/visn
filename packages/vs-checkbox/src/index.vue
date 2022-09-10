<template>
    <div class="vs-checkbox" ref="root">
        <div class="vs-checkbox_icon" @click="swtSelect">
            <i :class="classArr" ref="icon"></i>
        </div>
        <span class="vs-checkbox_label">
            <slot>复选框</slot>
        </span>
    </div>
</template>


<script>
export default {
    name: 'VsCheckbox',
    props: ['type', 'shape'],
    data() {
        return {
            checked: false,
            classArr: ['vs-cb_icon'],
        }
    }, 
    methods: {
        checkboxInit() {

        },
        swtSelect() { 
            if(this.checked) {
                this.classArr.pop()
            } else {
                this.classArr.push('checked')
            }
            this.checked = !this.checked
        }
    },
    created() {
        this.selectType = this.type === 'cross' ?  'anti-checked' : 'checked'
        this.outShape = this.shape === 'square' ? '0' : '50%'
    },
    mounted() {
        if(this.shape) {
            this.$refs.icon.style.borderRadius = this.outShape
        }
        if(this.type === 'cross') {
            this.$refs.root.style.setProperty('--checked-type', '"\\e6d7"')
            this.$refs.root.style.setProperty('--checked-background', 'red')
            // this.$refs.root.setPropery('--checked-type', '"\\e6d7"')
            // this.$refs.root.setPropery('--checked-background', 'red')
            // this.$refs.root.setPropery('--checked-type', '"\\e6dc"')
            // this.$refs.root.setPropery('--checked-background', '#1989FA')
        }
    },
}
</script>


<style scoped>
.vs-checkbox {
    --checked-type: '\e6dc';
    --checked-background: #1989FA;
    --shape: 50%;
    margin-left: 20px;
    margin-bottom: 8px;
    height: 20px;
    line-height: 20px;
}
.vs-checkbox_icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    cursor: pointer;
    line-height: 20px;
    overflow: hidden;
}
.vs-cb_icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid gray;
    border-radius: var(--shape);
    font-size: 16px;
    line-height: 20px;
    box-sizing: border-box;
}
.vs-cb_icon::before {
    position: absolute;
    font-family: "iconfont" !important;
    color: #fff;
}
.checked {
    background-color: var(--checked-background);
}
/* .anti-checked {
    background-color: red;
} */
/* .anti-checked::before {
    content: '\e6d7';
} */
.checked::before {
    /* counter-reset: cktype var(--checked-type); */
    /* content: counter(cktype); */
    content: var(--checked-type);
}
.vs-checkbox_label {
    margin-left: 8px;
    height: 20px;
    display: inline-block;
    vertical-align: top;
}
</style>