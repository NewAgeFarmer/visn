<template>
<div class="vs-dropdown-item">
    <div class="vs-dropdown-item-title" @click="showList">
        <slot>占位</slot>
    </div>
    <div class="vs-dropdown-item-list" ref="itemList">
        <ul>
            <li v-for="item in list" :key="item">
                {{item}}
            </li>
        </ul>
    </div>
</div>
</template>


<script>
export default {
    name: 'VsDropdownItem',
    props: [], 
    data() {
        return {
            list: ['全部商品', '新款商品', '活动商品'],
            show: false,
        }
    },
    methods: {
        showList() {
            this.show = !this.show
            // console.log(this.$refs.itemList.style.getPropertyValue('height'))
            if(this.show) {
                this.$refs.itemList.style.height = this.listHeight + 'px'
            } else {
                this.$refs.itemList.style.height = '0'
            }
        }
    },
    created() {
        console.log(this.list)
        this.listHeight = this.list.length * 44
    },
    mounted() {
        this.$refs.itemList.style.height = this.listHeight + 'px'
    }
}
</script>


<style scoped>
* {
    user-select: none;
}
.vs-dropdown-item {
    position: relative;
}
.vs-dropdown-item-title {
    text-align: center;
    background-color: FFF;
    line-height: 48px;
    font-size: 15px;
    position: relative;
}
.vs-dropdown-item-list {
    position: fixed;
    width: 100vw;
    height: 48px;
    text-align: center;
    background-color: red;
    line-height: 48px;
    font-size: 15px;
    left: 0;
    z-index: -1;
    /* right: 100vw; */
    overflow: hidden;
    transition-duration: .4s;
}
ul {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    padding: 0;
    line-height: 24px;
    font-size: 14px;
    border: 1px solid lightgray;
}
li {
    height: 44px;
    padding: 10px 16px;
    background-color: #FFF;
    box-sizing: border-box;
    position: relative;
}
li::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 16px;
    right: 16px;
    border-bottom: 1px solid rgba(0,0,0,0.4);
    transform: scaleY(0.5);
}
li:last-child::after {
    content: none;
}
</style>