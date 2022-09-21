<template>
    <div class="vs-divider" ref="root">
        <div class="toast" ref="toast"> 
            <slot></slot>
        </div>
    </div>
</template>


<script>
export default {
    name: 'VsDivider',
    props: {
        width: {
            type: String,
            default: '1px',
        }, 
        'font-size': {
            type: String,
        }, 
        'content-position': {
            type: String,
        },
        color: {
            type: String,
        },
        dashed: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {}
    },
    mounted() {
        this.$refs.root.style.setProperty('--font-size', this.fontSize ? this.fontSize : '18px')
        this.$refs.root.style.setProperty('--color', this.color ? this.color : 'black')
        this.$refs.root.style.setProperty('--style', this.dashed ? 'dashed' : 'solid')
        this.$refs.root.style.setProperty('--width', this.width ? this.width : '1px')

        let scaleLeft = 5

        if(this.contentPosition === 'left') {
            scaleLeft = 2
        } else if(this.contentPosition === 'right') {
            scaleLeft = 8
        }

        this.$refs.root.style.setProperty('--scale-left', scaleLeft)
        this.$refs.root.style.setProperty('--scale-right', 10 - scaleLeft)
    },
}
</script>


<style scoped>
.vs-divider {
    --font-size: 10px;
    --style: solid;
    --color: black;
    --scale-left: 5;
    --width: 1px;
    --scale-right: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 16px 0;
    padding: 0 20px;
    box-sizing: border-box;
    color: var(--color);
    font-size: var(--font-size);
}
.vs-divider::before, .vs-divider::after {
    content: ' ';
    border-bottom: var(--width) var(--color);
    border-bottom-style: var(--style);
}
.vs-divider::before {
    margin-right: 16px;
    flex-grow: var(--scale-left);
    /* flex-grow: 4; */
}
.vs-divider::after {
    margin-left: 16px;
    /* flex-grow: counter(sss); */
    flex-grow: var(--scale-right);
}
</style>