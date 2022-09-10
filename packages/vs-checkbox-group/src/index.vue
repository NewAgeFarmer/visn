<template>
    <div class="vs-checkbox-group" ref="root">
        <slot></slot>
    </div>
</template>


<script>
export default {
    name: 'VsCheckboxGroup',
    props: ['type', 'shape', 'direction'],
    data() {
        return {

        }
    }, 
    methods: {

    },
    created() {
        this.selectType = this.type === 'cross' ?  'anti-checked' : 'checked'
        this.listDirection = this.direction === 'horizontal' ? 'flex' : ''
    },
    mounted() {
        this.outShape = this.shape === 'square' ? '0' : '50%'
        if(this.shape === 'square') {
            this.$refs.root.style.setProperty('--item-shape', this.outShape)
        }
        if(this.type === 'cross') {
            this.$refs.root.style.setProperty('--item-type', '"\\e6d7"')
            this.$refs.root.style.setProperty('--item-background', 'red')
            // this.$refs.root.setPropery('--checked-type', '"\\e6d7"')
            // this.$refs.root.setPropery('--checked-background', 'red')
            // this.$refs.root.setPropery('--checked-type', '"\\e6dc"')
            // this.$refs.root.setPropery('--checked-background', '#1989FA')
        }
        if(this.direction === 'horizontal') {
            this.$refs.root.style.display = 'flex'
            this.$refs.root.style.flexWrap = 'wrap'
        }
    },
}
</script>


<style scoped>
.vs-checkbox-group {
    --item-type: '\e6dc';
    --item-background: #1989FA;
    --item-shape: 50%;
}
.vs-checkbox {
    --checked-type: var(--item-type);
    --checked-background: var(--item-background);
    --shape: var(--item-shape);
}
</style>