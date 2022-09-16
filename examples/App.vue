<template>
    <div>
        <!-- <vs-divider dashed width="4px" font-size="40px" color="darkred"></vs-divider> -->
        
        <!-- <div class="progress">
            <div class="progress-bar"></div>
            <vs-dragbox ref="dragbox" shape="circle" maxX='200' direction="x" disabled>
                <vs-icon icon='上传'></vs-icon>
            </vs-dragbox>
        </div> -->
        <!-- <vs-icon icon='上传'></vs-icon> -->

        <vs-checkbox-group type="tick" shape="round" direction="horizontal" :checked-list="checkedList">
            <vs-checkbox v-for="item in checkedList" :key="item.id" :name="item.name">{{item.name}}</vs-checkbox>
        </vs-checkbox-group>

        <!-- <vs-swipe-cell></vs-swipe-cell> -->

        <!-- <vs-dropdown-menu></vs-dropdown-menu> -->
        <!-- <vs-dropdown-item></vs-dropdown-item> -->

        <!-- <vs-search></vs-search> -->
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
        list: [
            {title:'首页', id:1}, {title:'设置', id:2}, {title:'商城', id:3}, {title:'我的', id:4}
        ],
        checkedList: [{
            name: 'a', checked: true,
        },{
            name: 'b', checked: false,
        },{
            name: 'c', checked: false,
        },{
            name: 'd', checked: true,
        }],
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
  created() {
  },
  mounted() {
    // let dragbox = this.$refs.dragbox
    // console.log(dragbox)
    // console.log(window.getComputedStyle(dragbox))
  },
}
</script>

<style>
    input {
        vertical-align: top;
    }
    .progress {
        width: 600px;
        height: 80px;
        background-color: green;
        position: relative;
    }
    .progress-bar {
        width: inherit;
        height: 20px;
        background-color: blue;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>
