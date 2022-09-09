<template>
<div class="root">
    <div class="vs-dropdown-menu">
        <vs-dropdown-item></vs-dropdown-item>
        <vs-dropdown-item></vs-dropdown-item>
        <vs-dropdown-item></vs-dropdown-item>
        <vs-dropdown-item></vs-dropdown-item>
    </div>
</div>
</template>


<script>
export default {
    name: 'VsDropdownMenu',
    props: [], 
    data() {
        return {
        }
    },
    methods: {
    },
    mounted() {
    }
}
</script>


<style scoped>
* {
    user-select: none;
}
.root {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999999;
    box-shadow: 0px 20px 20px -20px rgba(0,0,0,0.4);
}
.vs-dropdown-menu {
    height: 48px;
    background-color: #fff;
    position: relative;
    display: flex;
}
.vs-dropdown-menu>div {
    flex-grow: 1;
}
.vs-dropdown-item::after {
    content: ' ';
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    height: 24px;
    border-right: 1px solid lightgray;
}
.vs-dropdown-item:last-child::after {
    content: none;
}
</style>