<template>
    <div class="vs-checkbox-group" ref="root">
        <slot :text="greetingMessage" :count="1"></slot>
    </div>
</template>


<script>
export default {
    name: 'VsCheckboxGroup',
    props: ['type'],
    data() {
        return {

        }
    }, 
    methods: {

    },
    created() {
        this.selectType = this.type === 'cross' ?  'anti-checked' : 'checked'
    },
    mounted() {

    },
}
</script>


<style scoped>
.vs-checkbox-group {
    display: flex;
}
.vs-checkbox {

}
</style>