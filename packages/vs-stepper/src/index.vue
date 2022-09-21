<template>
<div :class="stepperClass">
    <button id="minus" @click="dec"></button>
    <input type="text" @input="checkLegal" v-model="num" placeholder="Multiple of 10" :disabled="disabled" :class="stepperClass"/>
    <button id="plus" @click="add"></button>
</div>
</template>



<script>
export default {
    name: 'VsStepper',
    props: {
        step: {
            default: 1,
        }, 
        min: {

        },  
        max: {

        },  
        placeholder: {
            type: String,
            default: '请输入检索内容',
        },
        initial: {
            default: 1,
        },
        integer: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            num: 1,
            stepperClass: {
                "vs-stepper": true,
                "vs-stepper-disabled": this.disabled,
            }
        }
    },
    methods: {
        dec() {
            if(this.disabled) return
            this.num -= this.onestep
            this.checkLegal()
        },
        add() {
            if(this.disabled) return
            this.num += this.onestep
            this.checkLegal()
        },
        checkLegal() {
            this.num = parseFloat(this.num)
            if(this.integer) {
                this.toInteger()
            }
            if(this.num > this.maximum) {
                this.num = this.maximum
            } else if(this.num < this.minimum) {
                this.num = this.minimum
            }
            this.$emit('change', this.num)
        },
        toInteger() {
            this.num = parseInt(this.num)
        },

    },
    created() {
        this.num = parseFloat(this.initial)
        this.onestep = parseFloat(this.step)
        this.maximum =  this.max ? parseFloat(this.max) : Infinity
        this.minimum =  this.min ? parseFloat(this.min) : 1
        
        this.checkLegal()
    },
    mounted() {
    },

}
</script>



<style scoped>
.vs-stepper {
    --color: #323233;
}
.vs-stepper-disabled {
    --color: #868688;
    -moz-user-select: none;         /* Firefox私有属性 */
    -webkit-user-select: none;      /* WebKit内核私有属性 */
    -ms-user-select: none;          /* IE私有属性(IE10及以后) */
    -khtml-user-select: none;       /* KHTML(早期浏览器)内核私有属性 */
    -o-user-select: none;           /* Opera私有属性 */
    user-select: none;              /* CSS3属性 */
}
.right {
    flex-grow: 1;
    text-align: right;
}
input[type='number'], input[type='text'] {
    width: 32px;
    height: 28px;
    border: 0;
    margin: 0 2px;
    padding: 0;
    text-align: center;
    background-color: #f2f3f5;
    vertical-align: top;
    color: var(--color);
}
button {
    margin: 0;
    padding: 0;
    border: 0;
    width: 28px;
    height: 28px;
    line-height: 28px;
    vertical-align: top;
    position: relative;
}
#minus::before {
    content: '';
    display: block;
    position: absolute;
    width: 14px;
    height: 2px;
    background-color: var(--color);
    left: 50%;
    transform: translateX(-50%);
}
#plus::before {
    content: '';
    display: block;
    position: absolute;
    width: 14px;
    height: 2px;
    background-color: var(--color);
    left: 50%;
    transform: translateX(-50%);
}
#plus::after {
    content: '';
    display: block;
    position: absolute;
    width: 2px;
    height: 14px;
    left: 50%;
    background-color: var(--color);
    transform: translate(-50%, -6px);
}
</style>