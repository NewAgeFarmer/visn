<template>
    <div class="vs-swipe-cell" ref="root" @mousedown="drag" @mousemove="translation" @mouseup="loose">
        <div class="vs-swipe-cell-left">添加</div>
        <div class="vs-swipe-cell-mid">单元格</div>
        <div class="vs-swipe-cell-right">删除</div>
    </div>
</template>


<script>
export default {
    name: 'VsSwipeCell',
    props: [],
    data() {
        return {
            initX: 0,
            moveX: 0,
            nowX: 0,
            dragFlag: false,
        }
    }, 
    methods: {
        drag(e) {
            this.dragFlag = true
            this.initX = e.clientX
            console.log(e.clientX)
        },
        loose(e) {
            // this.dragFlag = false
            // this.nowX = e.clientX - this.initX
            // // this.nowX = this.nowX + (e.clientX - this.initX) < 0 ? -60 : 60
            // if(this.nowX > -60 && this.nowX <)
            // console.log(this.$refs.root.offsetX)
            // console.log(this.nowX)

            // this.$refs.root.style.transform = `translateX(${this.nowX}px)`
        },
        translation(e) {
            if(this.dragFlag) {
                this.$refs.root.style.transform = `translateX(${e.clientX - this.initX}px)`
            }
        },
    },
    created() {},
    mounted() {
        // this.$refs.root.addEventListener('' , )
    },
}
</script>


<style scoped>
.vs-swipe-cell {
    position: absolute;
    left: 0;
    width: 100vw;
    height: 44px;
    cursor: grab;
    transform: translateX(0);
    transition-duration: .4s;
}
.vs-swipe-cell-left, .vs-swipe-cell-right {
    width: 60px;
    position: absolute;
    top: 0;
    bottom: 0;
    background-color: red;
    z-index: 999;
}
.vs-swipe-cell-mid  {
    width: 100vw;
    padding: 10px 16px;
    position: absolute;
    top: 0;
    bottom: 0;
    background-color: green;
}
.vs-swipe-cell-left {
    left: -60px;
}
.vs-swipe-cell-right {
    right: -60px;
    background-color: blue;
}
</style>