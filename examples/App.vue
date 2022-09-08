<template>
    <div>
        <vs-search></vs-search>
        <!-- <vs-stepper></vs-stepper> -->
        <!-- <vs-nav></vs-nav> -->
        <!-- <vs-toast></vs-toast> -->
        <!-- <vs-button>
            <vs-loading :size="'16px'"></vs-loading>
        </vs-button> -->
    </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
        list: [{title:'首页'}, {title:'设置'}, {title:'商城'}, {title:'设置'}, {title:'商城'}, {title:'设置'}, {title:'商城'}],
        active: {
            color: 'red',
            bgcolor: 'blue',
        },
        normal: {
            color: 'green',
            bgcolor: 'yellow',
        },
    }
  },
  components: {
  },
  methods: {
  },
}
</script>

<style>
</style>
