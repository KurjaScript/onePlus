<template>
    <div class="top-header">
        <div class="top-header-left">
            <img src="../../assets/onePlus/one_plus_title.jpeg" alt="" class="one-plus-icon">
        </div>
        <div class="top-header-middle">
            <div class="top-header-middle-model" v-for="(item, index) in detailList" :key="index" @mouseenter="handleToDetail(item.component)">
                <div class="top-header-middle-model-name">{{ item.name }}</div>
                <div v-if="item.new" class="top-header-middle-model-new">new</div>
            </div>
        </div>
        <div class="top-header-right">
            <img src="../../assets/onePlus/login.jpeg" alt="" class="one-plus-login">
        </div>
    </div>
    <div class="detail">
        <transition name="move" mode="out-in">
            <keep-alive>
                <component :is="currentComponent"></component>
            </keep-alive>
        </transition>
    </div>
    
</template>
<script lang="ts">
export default defineComponent({
    components: {
        'Accessories': defineAsyncComponent(() => import('./Accessories/index.vue')),
        'MobilePhone': defineAsyncComponent(() => import('./MobilePhone/index.vue')),
        'OnePlusWatch': defineAsyncComponent(() => import('./OnePlusWatch/index.vue'))
    }
})
</script>
<script setup lang="ts">
import { ref, reactive, defineAsyncComponent, defineComponent } from 'vue'
const currentComponent = ref<string>('')
const handleToDetail = (component: string) => {
    currentComponent.value = component
}


type detail = {
    name: string,
    component: string,
    new: boolean,
}
const detailList = reactive<detail[]>([
    {
        name: '手机',
        component: 'MobilePhone',
        new: true
    },{
        name: '一加手表',
        component: 'OnePlusWatch',
        new: true
    },{
        name: '配件',
        component: 'Accessories',
        new: false
    },{
        name: '官方商城',
        component: '',
        new: false
    },{
        name: '品牌',
        component: '',
        new: false
    },{
        name: '服务',
        component: '',
        new: false
    },{
        name: '论坛',
        component: '',
        new: false
    },{
        name: '零售店',
        component: '',
        new: false
    }
])
</script>

<style lang="less" scoped>
.top-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-left {
        
        .one-plus-icon {
            width: 160px;
            // height: 20px;
        }
    }
    &-middle {
        display: flex;
        justify-content: space-between;
        &-model {
            // margin-left: 20px;
            // margin-right: 20px;
            display: flex;
            cursor: pointer;
            font-weight: 400;
            font-size: 16px;
            display: flex;
            align-items: center;
            padding: 20px;
            box-sizing: border-box;
            &-name {
                color: #000;
                text-decoration: none;
            }
            &-new {
                border-radius: 5px;
                border: 1px solid #000;
                margin-left: 10px;
                font-size: 12px;
                line-height: 12px;
            }
        }
        &-model:hover {
            background-image: linear-gradient(90deg, red, red);
            background-size: 100% 2px;
            background-repeat: no-repeat;
            background-position: 0 100%;
        } 
    }
    &-right {
        .one-plus-login {
            width: 30px;
        }
    }
}
</style>