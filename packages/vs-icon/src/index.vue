<template>
    <div class="vs-icon" ref="root">
        <i class="vs-icon_font iconfont"></i>
        <span>
            <slot></slot>
        </span>
    </div>
</template>


<script>
import iconfont from '../../../examples/assets/iconfont/iconfont.json'
export default {
    name: 'VsIcon',
    props: ['size', 'color', 'icon'],
    data() {
        return {
            menu: iconfont.glyphs,
        }
    },
    mounted() {
        if(this.size)
            this.$refs.root.style.setProperty('--size', this.size)
        if(this.color)
            this.$refs.root.style.setProperty('--color', this.color)
        if(this.icon) {
            this.res = this.menu.filter((item)=> item.name === this.icon)
            if(this.res.length!==0) {
                this.res = "'\\" + this.res[0].unicode + "'"
                this.$refs.root.style.setProperty('--icon', this.res)
            }
        }
    },
}
</script>


<style scoped>
.vs-icon {
    --icon: '\e6e0';
    --size: 24px;
    --color: black;
    display: inline-block;
    height: var(--size);
    line-height: var(--size);
    margin: 0 4px;
}
h1 {
    display: inline;
}
.vs-icon_font {
    display: inline-block;
    width: var(--size);
    height: var(--size);
    color: var(--color);
    background-color: transparent;
}
.vs-icon_font::before {
    content: var(--icon);
    font-size: var(--size);
    line-height: var(--size);
    position: absolute;
}
.vs-icon > span {
    display: inline-block;
    height: var(--size);
    line-height: var(--size);
    vertical-align: top;
}
</style>