<template>
<footer class="bottomnav" ref="nav">
    <ul>
        <li v-for="item in navlist" :key="item.index" @click="now(item.index)" :class="{itemActive: nowindex==item.index}">
            {{item.title}}
        </li>
    </ul>
</footer>
</template>


<script>
export default {
    name: 'VsNav',
    props: ['list', 'height', 'normal', 'active',], 
    data() {
        return {
            navlist: [
                {title:'首页', index: 0}, {title:'设置', index: 1},
            ],
            navheight: '18vh',
            nowindex: 0,
            act: {
                color: 'white',
                bgcolor: 'gray',
            },
            nor: {
                color: 'white',
                bgcolor: '#bdbdbd',
            },
            // activeStyle: {
            //     itemActive: nowindex===1,
            // }
        }
    },
    methods: {
        now(index) {
            this.nowindex = index
        }
    },
    mounted() {
        this.navlist = this.list || this.navlist
        this.navheight = this.height || this.navheight
        this.act = this.active ||  this.act
        this.nor = this.normal || this.nor

        if(this.navlist.length > 5) {
            this.navlist = this.navlist.slice(0, 5)
        }

        this.$refs.nav.style.setProperty('--height', this.navheight)
        this.$refs.nav.style.setProperty('--color', this.nor.color)
        this.$refs.nav.style.setProperty('--bg-color', this.nor.bgcolor)
        this.$refs.nav.style.setProperty('--act-color', this.act.color)
        this.$refs.nav.style.setProperty('--act-bg-color', this.act.bgcolor)
        
        for(let key in this.navlist) {
            this.navlist[key].index = key
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
}
.bottomnav {
    --height: 8vh;
    --color: white;
    --bg-color: #bdbdbd;
    --act-color: white;
    --act-bg-color: gray;
    width: 100vw;
    height: var(--height);
    min-height: 40px;
    background-color: var(--bg-color);
    position: fixed; 
    left: 0;
    bottom: 0;
}
.bottomnav > ul {
    height: auto;
    display: flex;
    justify-content: space-around;
    padding: 0;
    margin: 0;
}
li {
    padding: 0;
    margin: 0;
    min-height: 40px;
    height: var(--height);
    line-height: var(--height);
    text-align: center;
    font-size: 1rem;
    color:  var(--color);;
    flex-grow: 1;
    list-style: none;
    cursor: pointer;
}
.itemActive {
    color: var(--act-color);
    background-color: var(--act-bg-color);
}
</style>