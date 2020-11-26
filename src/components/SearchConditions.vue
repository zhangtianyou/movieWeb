<template>
  <div class="search-conditions-wrapper">
    <div class="demo">
        <div class="demo-warp">
            <div class="demo-flex" v-for="(v,k) in getList" :key="k">
                <span class="demo-title">{{v.title}}</span>
                <div class="demo-content">
                    <div class="demo-tab" :class="isShow ? 'demo-hide' : ''">
                        <span v-for="(val, key) in v.childer" :key="key" :class="{'demo-active': val.active}" @click="tabClick(val,key,k)">{{val.label}}</span>
                    </div>
                </div>
                <div class="demo-more" @click="isShow = !isShow" v-if="v.childer.length >= 14">更多</div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
  export default{
    name:'searchConditions',
    props: {
        getList: {
            type: Array,
            default: () => []
        }
    },
    data(){
      return {
        isShow: false,
        viewList:[]
      }
    },
    computed: {
        style() {
            return {
                width: `${this.width.replace(/%+/, '')}%`,
                height: `${this.height.replace(/px+/, '')}px`
            }
        }
    },
    methods:{
        tabClick(data, key, k) {
            // 添加 active ==> true 显示 `active样式`
            this.getList[k].childer.map(item => {
                item.active = false
            })
            this.getList[k].childer[key].active = true

            // 选中的数据
            let newArray = []
            this.getList.map(data => {
                data.childer.map(item => {
                    if (item.active == true) {
                        newArray.push(item)
                    }
                })
            })
            this.$emit('get-sel-data', newArray)
            this.$emit('set-time', 0, 1000, true)
        }
    }
  }
</script>
<style lang="scss">
.search-conditions-wrapper{
    .demo-flex {
        display: flex;
        margin-bottom: 15px;
    }
    .demo-flex:last-of-type {
        margin-bottom: 0;
    }
    .demo-title {
        flex-basis: 70px;
        margin-top: 5px;
    }
    .demo-content {
        display: flex;
        flex: 1;
    }
    .demo-tab {
        //flex: 1;
        margin-right: 15px;
        height: 35px;
        overflow: hidden;
    }
    .demo-tab span {
        display: inline-block;
        margin: 0 5px 15px 5px;
        cursor: pointer;
        padding: 5px 10px;
        color: #999999;
    }
    .demo-more {
        margin-top: 5px;
        cursor: pointer;
    }
    .demo-active {
        background-color: #09F;
        color: white !important;
        border-radius: 3px;
    }
    .demo-tab span:hover {
        background-color: #09F;
        color: white;
        border-radius: 3px;
    }
    .demo-hide {
        min-height: 35px;
        height: auto !important;
    }
}
</style>