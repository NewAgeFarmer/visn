<template>
    <div class="root" ref="root">
        <div class="btn">
            <slot>A button.</slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VsButton',
    props: ['width', 'height', 'fontSize', 'bgColor', 'hoverColor'],
    mounted() {
        if(this.width) this.$refs.root.style.setProperty('--width', this.width)
        if(this.height) this.$refs.root.style.setProperty('--height', this.height)
        if(this.fontSize) this.$refs.root.style.setProperty('--fontSize', this.fontSize)    
        if(this.bgColor) this.$refs.root.style.setProperty('--bgColor', this.bgColor)
        if(this.hoverColor) this.$refs.root.style.setProperty('--hoverColor', this.hoverColor)
    },
    methods: {
    },
//   props: {
//     type: String,
//   }
}
</script>

<style scoped>
.root {
    --width: 40px;
    --height: 32px;
    --fontSize: 16px;
    --bgColor: rgb(97, 97, 185);
    --hoverColor: rgb(161, 161, 216);
}
.btn {
    min-width: 20px;
    min-height: 16px;
    width: var(--width);
    height: var(--height);
    display: inline-block;
    padding: 4px 8px;
    background:  var(--bgColor);
    color: #fff;
    border-radius: calc(var(--height) * 0.25);
    /* display: flex; */
    text-align: center;
    line-height: var(--height);
    cursor: pointer;
    font-size: var(--fontSize);
}
.btn:hover {
    background: var(--hoverColor);
}
</style>