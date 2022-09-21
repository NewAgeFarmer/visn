<template>
    <div class="vs-switch" ref="swi">
        <button @click="SwitchThemes" ref="groove">
            <div ref="btn">
                <slot></slot>
            </div>
        </button>
    </div>
</template>

<script>
export default {
    name: 'VsSwitch',
    props: {
        leftColor: String, rightColor: String, 
        width: String, radius: String, 
        bgopacity: String, 
        shadow: {
            type: Boolean,
            default: true,
        }, 
        edge: {
            type: Boolean,
            default: true,
        },
    },
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
            this.$refs.swi.style.setProperty("--left-color", this.leftColor)
        }
        if(this.rightColor) {
            this.$refs.swi.style.setProperty("--right-color", this.rightColor)
        }
        if(this.width) {
            this.$refs.swi.style.setProperty("--width", this.width)
            this.$refs.swi.style.setProperty("--width", this.width)
        }
        if(this.radius) {
            this.$refs.swi.style.setProperty("--radius", this.radius)
        }
        if(!this.shadow) {
            this.$refs.groove.style.boxShadow = 'none'
            this.$refs.btn.style.boxShadow = 'none'
        }
        if(!this.edge) {
            this.$refs.groove.style.border = 'none'
            this.$refs.swi.style.setProperty("--border-width", '0')
        }
    },
}
</script>


<style scoped>
.vs-switch {
    --width: 54px;
    --radius: 25px;
    --bg-opacity: 1;
    --left-color: rgba(41, 184, 41, 1);
    --right-color: rgba(255, 0, 0, 1);
    --border-width: 2px;
}
button {
    min-width: calc(var(--radius) * 1.5);
    min-height: 25px;
    width: var(--width);
    height: calc(var(--radius) + var(--border-width) * 2);
    padding: 0;
    background-color: var(--left-color);
    border-radius: var(--radius);
    border: var(--border-width) solid black;
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