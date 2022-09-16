<template>
    <div class="vs-checkbox" ref="root">
        <div class="vs-checkbox_icon" @click="swtSelect">
            <i :class="classArr" ref="icon"></i>
        </div>
        <span class="vs-checkbox_label">
            <slot></slot>
        </span>
    </div>
</template>


<script>
export default {
    name: 'VsCheckbox',
    props: {
        type: {
            type: String,
            default: 'tick',
        }, 
        shape: {
            type: String,
            default: 'square',
        }, 
        check: {
            type: Boolean,
            default: true,
        },
        name: {
            type: String,
            default: 'none',
        },
    },
    data() {
        return {
            classArr: ['vs-cb_icon'],
        }
    }, 
    inject: {
        checklist: {
            default: []
        }, 
        changeList: {
            default: function(){}
        },
    },
    methods: {
        checkboxInit() {

        },
        swtSelect() { 
            if(this.checked) {
                this.classArr = ['vs-cb_icon']
                // this.classArr.pop()
            } else {
                // this.classArr.push('checked')
                this.classArr = ['vs-cb_icon', 'checked']
            }

            this.checked = !this.checked
            console.log(this.checked, this.name)
            if(this.changeList) {
                this.changeList(this.name)
            }
            for(let v of this.checklist) {
                console.log(v.name, v.checked)
            }
        }
    },
    created() {
        if(this.$parent.$options.name === 'VsCheckboxGroup') {
            this.checked = this.checklist.filter(item => item.name===this.name)[0].checked
        } else {
            this.checked = this.check
        }
        this.selectType = this.type === 'cross' ?  'anti-checked' : 'checked'
        this.outShape = this.shape === 'square' ? '0' : 'round'
        this.classArr = this.checked ? ['vs-cb_icon', 'checked'] : this.classArr
    },
    mounted() {
        // if(this.$parent.$el.className.includes('vs-checkbox-group')) {
        //     this.checked = this.checklist.filter(item => item.name===this.name)[0].checked
        // } else {
        //     this.checked = this.check
        // }
        // console.log(this.checked);
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
        // console.log(this.name)
        // console.log(this.checklist)
    },
    computed: {
        // laob() {
        //     return this.checklist.filter(item => item.name===this.name)[0].checked
        // }
    },
    watch: {
        checklist: {
            deep: true,
            handler(oldVal, newVal) {

            // console.log(newVal)
            // deep: true,
            // handler(oldVal, newVal) {
                // console.log('old: ', oldVal.filter(item => item.name===this.name)[0].checked, 'new: ', newVal.filter(item => item.name===this.name)[0].checked)
                
                // console.log(this.checklist.filter(item => item.name===this.name)[0].checked)
            //     console.log(oldVal)
                // if(this.oldVal) {
                //     this.classArr.pop()
                //     console.log(1)
                // } else {
                //     this.classArr.push('checked')
                //     console.log(2)
                // }
                // this.checked = this.newVal.filter(item => item.name===this.name)[0].checked
                if(newVal.filter(item => item.name===this.name)[0].checked) {
                    this.classArr = ['vs-cb_icon', 'checked']
                } else {
                    this.classArr = ['vs-cb_icon']
                }
            }
            // return 
        }
    },
}
</script>


<style scoped>
@import url('../../../examples/assets/iconfont/iconfont.css');
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
    border-radius: var(--shape);
    border: 1px solid gray;
    box-sizing: border-box;
    overflow: hidden;
}
.vs-cb_icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    font-size: 15px;
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