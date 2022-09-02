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
    props: ['size', 'color', 'cycle'],
    methods: {
    },
    mounted() {
        this.radius = this.color ? this.color : 'skyblue'
        this.linecolor = this.size ? this.size : '16px'
        let time = this.cycle ? this.cycle : '0.5s'

        this.$refs.root.style.setProperty('--color', this.radius)
        this.$refs.root.style.setProperty('--size', this.linecolor)
        document.querySelector('.loading').style.animationDuration = time
    },
}
</script>


<style scoped>
.root {
    --size: 50px;
    --color: skyblue;
}
.loading {
    width: var(--size);
    height: var(--size);
    border: calc(var(--size) / 4) solid var(--color);
    border-top-color: rgba(67, 67, 177, 0);
    border-radius: 50%;
    animation: constant 0.5s infinite linear;
}
@keyframes constant {
    25% {transform: rotate(90deg);}
    50% {transform: rotate(180deg);}
    75% {transform: rotate(270deg);}
    100% {transform: rotate(360deg);}
}
</style>