<template>
    <div class="vs-search" ref="vs-search">
        <div class="vs-search-container">
            <div class="vs-cell">
                <div class="left-icon" @click="search">
                    <i class="icon"></i>
                </div>
                <div class="ipt">
                    <input type="text" ref="ipt" :placeholder="placeholder" @input="input" :disabled="this.disabled"/>
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
    props: {
        background: {
            type: String,
            default: "red",
        }, 
        inputAlign: {
            type: String,
            default: "left",
        }, 
        placeholder: {
            type: String,
            default: "搜索框",
        }, 
        disabled: {
            type: Boolean,
            default: false,
        }, 
        watchInput: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            clearIcon: false,
        }
    },
    created() {
        console.log(this.disabled, this.inputAlign)
        this.holder = this.placeholder ? this.placeholder : this.holder
    },
    mounted() {
        this.$refs['vs-search'].style.backgroundColor = this.background
        this.$refs.ipt.style.textAlign = this.inputAlign
    },
    methods: {
        input(e) {
            if(this.disabled) return
            if(this.watchInput) {
                this.$emit('input', e.currentTarget.value)
                console.log(e.currentTarget.value)
            }
            this.clearIcon = (e.currentTarget.value.length > 0)
        },
        search(e) {
            this.$emit('search', e.currentTarget.value)
        },
        clear() {
            this.$refs.ipt.value = ''
            this.$emit('cancel')
        }
    },
    watch: {
    }
}
</script>

<style scoped>
.vs-search {
    background-color: white;
    padding: 10px 12px;
    height: 54px;
    position: relative;
    box-sizing: border-box;
    /* --ipt-color: #323233; */
    --ipt-color: #f7f8fa;
    --bgcolor: #f7f8fa;
}
.vs-search-container {
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
    padding-right: 40px;
    box-sizing: border-box;
}
.ipt > input[type='text'] {
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