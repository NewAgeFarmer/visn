<template>
    <div id="root" ref="root">
        <div class="vs-search" ref="vs-search">
            <div class="vs-cell">
                <div class="left-icon" @click="search">
                    <i class="icon"></i>
                </div>
                <div class="ipt">
                    <input type="text" ref="ipt" :placeholder="holder" @input="input" :disabled="!this.able"/>
                </div>
                <div class="right-icon" @click="clear" v-show="clearIcon">
                    <i class="clear"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VsSearch',
    props: ['background', 'input_align', 'placeholder', 'disabled', 'watch'],
    data() {
        return {
            bgcolor: 'white',
            align: 'left',
            holder: '请输入搜索关键词',
            able: true,
            clearIcon: false,
            watchIpt: false,
        }
    },
    created() {
        if(this.disabled!==undefined || this.disabled===true) {
            this.able = false
        } else if(this.disabled === false) {
            this.able = true
        }

        this.holder = this.placeholder ? this.placeholder : this.holder
        this.align = this.input_align ? this.input_align : this.align
        this.bgcolor = this.background ? this.background : this.bgcolor
        this.watchIpt = this.watch ? this.watch : this.watchIpt

    },
    mounted() {
        this.$refs.root.style.backgroundColor = this.bgcolor
        this.$refs.ipt.style.textAlign = this.align
    },
    methods: {
        input(e) {
            if(this.watchIpt) {
                this.$emit('input', e.currentTarget.value)
            }
            this.clearIcon = (e.currentTarget.value.length > 0)
        },
        search(e) {
            this.$emit('search', e.currentTarget.value)
        },
        clear() {
            this.$refs.ipt.value = ''
        }
    },
    watch: {
    }
}
</script>

<style scoped>
#root {
    background-color: white;
    padding: 10px 12px;
    height: 54px;
    position: relative;
    box-sizing: border-box;
    /* --ipt-color: #323233; */
    --ipt-color: #f7f8fa;
    --bgcolor: #f7f8fa;
}
.vs-search {
    background-color: var(--ipt-color);
    position: absolute;
    top: 10px;
    bottom: 10px;
    left: 12px;
    right: 12px;
    border-radius: 34px;
    padding: 0 0 0 12px;
    overflow: hidden;
}
.vs-cell {
    display: flex;
    height: 100%;
    align-items: center;
}
.left-icon {
    width: 16px;
    height: 24px;
    margin-right: 10px;
    position: relative;
}
.left-icon > i::before {
    content: ' ';
    display: block;
    position: absolute;
    transform: translate(-25%, -25%);
    width: 32px;
    height: 48px;
    background-image: url('../../../examples/assets/搜索.svg');
    background-size: 32px 48px;
    z-index: 99999;
}
.ipt {
    flex-grow: 1;
    overflow: hidden;
}
input[type='text'] {
    display: block;
    width: 100%;
    font-size: 14px;
    border: 0;
    outline: none;
    text-align: center;
    background-color: var(--ipt-color);
}
.right-icon {
    position: absolute;
    width: 33px;
    height: 24px;
    right: -1px;
    background-color: var(--ipt-color);
    cursor: pointer;
}
.right-icon > i::before {
    content: ' ';
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    background: url('../../../examples/assets/清除.svg') no-repeat;
    background-size: 24px 24px;
    z-index: 99999;
}
</style>