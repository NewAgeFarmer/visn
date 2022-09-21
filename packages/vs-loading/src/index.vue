<template>
    <div class="root" ref="root">
        <div class="loading"></div>
    </div>
</template>


<script>

export default {
    name: 'VsLoading',
    data() {
        return {
            radius: '',
            linecolor: '',
        }
    },
    props: ['size', 'color', 'speed', ''],
    methods: {
    },
    mounted() {
        this.linecolor = this.color ? this.color : 'skyblue'
        this.radius = this.size ? this.size : '16px'
        switch(this.speed) {
            case 'fast':
                this.time = '0.4s'
                break
            case 'mid':
                this.time = '1s'
                break
            case 'slow':
                this.time = '2s'
                break
        }
        // console.log(this.speed)
        let time = this.speed ? this.speed : '0.5s'

        this.$refs.root.style.setProperty('--color', this.linecolor)
        this.$refs.root.style.setProperty('--size', this.radius)
        this.$refs.root.style.setProperty('--time', this.time)
        document.querySelector('.loading').style.animationDuration = time
    },
}
</script>


<style scoped>
.root {
    --size: 50px;
    --color: skyblue;
    --time: 0.5s;
}
.loading {
    width: var(--size);
    height: var(--size);
    border: calc(var(--size) / 4) solid var(--color);
    border-top-color: rgba(67, 67, 177, 0);
    border-radius: 50%;
    animation: constant var(--time) infinite linear;
}
@keyframes constant {
    25% {transform: rotate(90deg);}
    50% {transform: rotate(180deg);}
    75% {transform: rotate(270deg);}
    100% {transform: rotate(360deg);}
}
</style>