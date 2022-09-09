<template>
    <div class="vs-checkbox" ref="root">
        <div class="vs-checkbox_icon" @click="swtSelect">
            <i :class="classArr"></i>
        </div>
        <!-- <span class="iconfont icon-xuanzhongyuan"></span> -->
        <span class="vs-checkbox_label">
            <slot>复选框</slot>
        </span>
    </div>
</template>


<script>
export default {
    name: 'VsCheckbox',
    props: ['type'],
    data() {
        return {
            checked: false,
            classArr: ['vs-icon'],
        }
    }, 
    methods: {
        swtSelect() { 
            if(this.checked) {
                this.classArr.pop()
            } else {
                this.classArr.push(this.selectType)
            }
            this.checked = !this.checked
        }
    },
    created() {
        this.selectType = this.type === 'cross' ?  'anti-checked' : 'checked'
    },
    mounted() {

    },
}
</script>


<style scoped>
.vs-checkbox {
    margin-left: 20px;
    margin-bottom: 8px;
    height: 20px;
    line-height: 20px;
}
.vs-checkbox_icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    line-height: 20px;
    cursor: pointer;
    line-height: 20px;
    overflow: hidden;
}
.vs-icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid gray;
    border-radius: 50%;
    font-size: 16px;
    line-height: 20px;
    box-sizing: border-box;
}
.vs-icon::before {
    position: absolute;
    font-family: "iconfont" !important;
}
.checked {
    background-color: #1989FA;
}
.anti-checked {
    background-color: red;
}
.anti-checked::before {
    content: '\e6d7';
}
.checked::before {
    content: '\e6dc';
}
.vs-checkbox_label {
    margin-left: 8px;
    height: 20px;
    display: inline-block;
    vertical-align: top;
}
</style>