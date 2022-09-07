<template>
<div id="root">
    <button id="minus" @click="dec"></button>
    <input type="text" @input="checkLegal" v-model="num" placeholder="Multiple of 10" />
    <button id="plus" @click="add"></button>
</div>
</template>



<script>
export default {
    name: 'VsStepper',
    props: ['step', 'min', 'max', 'placeholder'],
    data() {
        return {
            num: 1,
        }
    },
    methods: {
        dec() {
            this.num -= this.onestep
            this.checkLegal()
        },
        add() {
            this.num += this.onestep
            this.checkLegal()
        },
        checkLegal() {
            if(this.num > this.maximum) {
                this.num = this.maximum
            } else if(this.num < this.minimum) {
                this.num = this.minimum
            }
            this.$emit('change', this.num)
        },

    },
    created() {
        this.onestep = this.step ? this.step : 1
        this.maximum =  this.max ? this.max : 99
        this.minimum =  this.min ? this.min : 1
    },
    mounted() {
    },

}
</script>



<style scoped>
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
    background-color: #323233;
    left: 50%;
    transform: translateX(-50%);
}
#plus::before {
    content: '';
    display: block;
    position: absolute;
    width: 14px;
    height: 2px;
    background-color: #323233;
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
    background-color: #323233;
    transform: translate(-50%, -6px);
}
</style>