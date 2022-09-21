<template>
<footer class="vs-tabbar" ref="tabbar">
    <ul>
        <li v-for="item in tablist" :key="item.index" @click="now(item.index)" :class="{itemActive: nowindex==item.index}">
            <div class="vs-tabbar-content">
                <div class="vs-tabbar-icon" v-if="icon"><vs-icon size="28px" :icon="item.icon"></vs-icon></div>
                <div class="vs-tabbar-title">{{item.title}}</div>
            </div>
        </li>
    </ul>
</footer>
</template>


<script>
import VsIcon from '../../vs-icon'
// import '../../../examples/assets/iconfont/iconfont.css'
export default {
    name: 'VsTabbar',
    props: {
        list: {
            type: Array,
            default: () => [ {title:'首页', index: 0, icon: 'homie'}, {title:'设置', index: 1, icon: 'home'}, {title:'我的', index: 2, icon: '搜索'} ]
        },
        height: {
            type: String,
            default: "10vh",
        },
        active: {
            type: Object,
            default: ()=>({
                color: "white",
                bgcolor: "black",
            }),
        },
        normal: {
            type: Object,
            default: ()=>({
                color: "black",
                bgcolor: "white",
            }),
        },
        icon: {
            type: Boolean,
            default: false,
        },
    },
    components: {
        VsIcon,
    },
    data() {
        return {
            tablist: [],
            nowindex: 0,
        }
    },
    methods: {
        now(index) {
            this.nowindex = index
        }
    },
    mounted() {
        this.tablist = this.list

        if(this.tablist.length > 5) {
            this.tablist = this.tablist.slice(0, 5)
        }

        this.$refs.tabbar.style.setProperty('--height', this.height)
        this.$refs.tabbar.style.setProperty('--color', this.normal.color)
        this.$refs.tabbar.style.setProperty('--bg-color', this.normal.bgcolor)
        this.$refs.tabbar.style.setProperty('--act-color', this.active.color)
        this.$refs.tabbar.style.setProperty('--act-bg-color', this.active.bgcolor)
        
        for(let key in this.tablist) {
            this.tablist[key].index = key
        }

        this.now(0)
        this.nowindex = 0
    }
}
</script>


<style scoped>
* {
    user-select: none;
}
ul {
    margin: 0;
    padding: 0;
    border-top: 1px solid black;
}
.vs-tabbar {
    --height: 8vh;
    --color: white;
    --bg-color: #bdbdbd;
    --act-color: white;
    --act-bg-color: gray;
    width: 100vw;
    min-height: 40px;
    background-color: var(--bg-color);
    position: fixed; 
    left: 0;
    bottom: 0;
}
.vs-tabbar > ul {
    height: auto;
    display: flex;
    justify-content: space-around;
    padding: 0;
    margin: 0;
}
.vs-tabbar > ul > li {
    padding: 0;
    margin: 0;
    min-height: 40px;
    height: var(--height);
    font-size: 1rem;
    color: var(--color);;
    flex-grow: 1;
    list-style: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}
.itemActive {
    color: var(--act-color) !important;
    background-color: var(--act-bg-color) !important;
}
.vs-tabbar-content {
    display: flex;
    flex-direction: column;
    height: 60%;
    justify-content: center;
    align-items: center;
}
.vs-tabbar-title {
    flex-grow: 2;
    display: flex;
    justify-content: center;
    align-items: center;
}
.vs-tabbar-icon {
    flex-grow: 5;
    display: flex;
    justify-content: center;
    align-items: center;
}
.vs-icon {
    --color: var(--color);
}
</style>