<template>
    <div class="root" ref="groove">
        <button @click="SwitchThemes">
            <div ref="btn">
                <slot></slot>
            </div>
        </button>
    </div>
</template>

<script>
export default {
    name: 'VsSwitch',
//   props: {
//     type: String,
//   },
    props: ['leftColor', 'rightColor', 'width', 'radius', 'bgopacity'],
    data() {
        return {
            flag: false,
        }
    },
    methods: {
        SwitchThemes(ev) {
            this.flag = !this.flag
            if(this.flag) {
                ev.currentTarget.style.backgroundColor = 'var(--right-color)'
                this.$refs.btn.style.right = 0
            } else {
                ev.currentTarget.style.backgroundColor = 'var(--left-color)'
                this.$refs.btn.style.right = `calc(100% - var(--radius))`
            }
            this.$emit('getflag', this.flag)
        }
    },
    mounted() {
        // 修改一个 Dom 节点上的 CSS 变量
        if(this.leftColor) {
            this.$refs.groove.style.setProperty("--left-color", this.leftColor)
        }
        if(this.rightColor) {
            this.$refs.groove.style.setProperty("--right-color", this.rightColor)
        }
        if(this.width) {
            this.$refs.groove.style.setProperty("--width", this.width)
            this.$refs.groove.style.setProperty("--width", this.width)
        }
        if(this.radius) {
            this.$refs.groove.style.setProperty("--radius", this.radius)
        }
    },
}
</script>


<style scoped>
.root {
    --width: 54px;
    --radius: 25px;
    --bg-opacity: 1;
    --left-color: rgba(41, 184, 41, 1);
    --right-color: rgba(255, 0, 0, 1);
}
button {
    min-width: calc(var(--radius) * 1.5);
    min-height: 25px;
    width: var(--width);
    height: calc(var(--radius) + 4px);
    padding: 0;
    background-color: var(--left-color);
    border-radius: var(--radius);
    border: 2px solid black;
    transition-duration: 0.2s;
    cursor: pointer;
    position: relative;
    box-shadow: 0 0 5px black inset;
}
button:hover {
    border-color: lightgray;
}
button > div {
    width: var(--radius);
    height: var(--radius);
    border-radius: 50%;
    background-color: whitesmoke;
    transition-duration: 0.2s;
    position: absolute;
    top: 0;
    right: calc(100% - var(--radius));
    box-shadow: 0 0 2px black inset;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>