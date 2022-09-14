<template>
    <div :class="{ 'vs-dragbox': true, 'disabled': disabled }" ref="root" @mousedown="onwebdrag" @touchstart="onmobiledrag">
        <slot></slot>
    </div>
</template>


<script>
export default {
    name: 'VsDragbox',
    props:{
        "width": {
            type: String,
            // required: true,
        },
        "height": {
            type: String,
            // required: true,
        },
        "color": {
            type: String,
            // default: 18,
        },
        "shape": {
            type: String,
        },
        "direction": {
            type: String,
        },
        "disabled": {
            type: Boolean,
            default: false,
        },
        "maxX" : {
            // type: Number,
        },
        "maxY": {
            // type: Number,
        }
    },
    data() {
        return {
        }
    },
    methods: {
        drag(e) {
            let diffX = 0
            let diffY = 0

            if((parseFloat(this.style.left.slice(0, -2)) - this.originalLeft >= this['max_x'])) {
                if(e.movementX > 0) diffX = 0
                else diffX = e.movementX
            } else if((parseFloat(this.style.left.slice(0, -2)) - this.originalLeft <= 0) && this['max_x']) {
                console.log(55555);
                if(e.movementX < 0) diffX = 0
                else diffX = e.movementX
            } else {
                console.log(parseFloat(this.style.left.slice(0, -2)) - this.originalLeft >= this['max_x']);
                diffX = e.movementX
            }

            if((parseFloat(this.style.top.slice(0, -2)) - this.originalTop >= this['max_y'])) {
                if(e.movementY > 0) diffY = 0
                else diffY = e.movementY
            } else if((parseFloat(this.style.top.slice(0, -2)) - this.originalTop <= 0) && this['max_y']) {
                console.log(55555);
                if(e.movementY < 0) diffY = 0
                else diffY = e.movementY
            } else {
                console.log(parseFloat(this.style.top.slice(0, -2)) - this.originalTop >= this['max_y']);
                diffY = e.movementY
            }

            // console.log(parseFloat(this.style.left.slice(0, -2)) - this.originalLeft > this['max_x']);
            if(this.direction === 'x') {
                this.el.style.left = parseFloat(this.style.left.slice(0, -2)) + diffX + 'px'
            } else if(this.direction === 'y') {
                this.el.style.top =  parseFloat(this.style.top.slice(0, -2)) + diffY + 'px'
            } else {
                this.el.style.left = parseFloat(this.style.left.slice(0, -2)) + diffX + 'px'
                this.el.style.top =  parseFloat(this.style.top.slice(0, -2)) + diffY + 'px'
            }

        },
        mobiledrag(e) {
            if(this.direction === 'x') {
                this.el.style.left = this.lastLeft + e.touches[0].pageX - this.lastX + 'px'
            } else if(this.direction === 'y') {
                this.el.style.top = this.lastTop + e.touches[0].pageY - this.lastY + 'px'
            } else {
                this.el.style.left = this.lastLeft + e.touches[0].pageX - this.lastX + 'px'
                this.el.style.top = this.lastTop + e.touches[0].pageY - this.lastY + 'px'
            }
        },
        onwebdrag(e) {
            if(this.disabled) return

            this.lastLeft = parseFloat(this.style.left.slice(0, -2))
            this.lastTop = parseFloat(this.style.top.slice(0, -2))
            // this.$refs.root.style.left = '1200px'
            // this.$refs.root.style.cursor = 'grabbing'

            document.addEventListener('mousemove', this.drag)

            document.addEventListener('mouseup', ()=>{
                // this.el.style.cursor = 'grab'
                document.removeEventListener('mousemove', this.drag)
            })
        },
        onmobiledrag(e) {
            if(this.disabled) return

            this.lastLeft = parseFloat(this.style.left.slice(0, -2))
            this.lastTop = parseFloat(this.style.top.slice(0, -2))
            this.lastX = e.touches[0].pageX
            this.lastY = e.touches[0].pageY

            document.addEventListener('touchmove', this.mobiledrag)
            document.addEventListener('touchend', ()=>{
                document.removeEventListener('touchmove', this.mobiledrag)
            })
        }
    },
    mounted() {
        console.log(this.disabled, this.shape);
        
        this.el = this.$refs.root

        this.el.style.backgroundColor = this.color ? this.color : 'red'
        this.el.style.width = this.width ? this.width : '80px'
        this.el.style.height = this.height ? this.height : '80px'
        this.el.style.borderRadius = this.shape ? '50%' : '0'

        this.style = window.getComputedStyle(this.el)
        this.max_x = this.maxX ? parseFloat(this.maxX) : undefined
        this.max_y = this.maxY ? parseFloat(this.maxY) : undefined

        this.originalLeft = parseFloat(this.style.left.slice(0, -2))
        this.originalTop = parseFloat(this.style.top.slice(0, -2))
    },
}
</script>


<style scoped>
.vs-dragbox {
    --width: 200px;
    --height: 200px;
    --background: red;

    width: 80px;
    height: 80px;
    background-color: red;
    border-radius: 0;
    cursor: grab;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.disabled {
    filter: brightness(0.8);
    cursor: not-allowed;
}
</style>