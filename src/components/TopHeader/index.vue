<template>
    <div class="top-header">
        <div class="top-header-left">
            <img src="../../assets/onePlus/one_plus_title.jpeg" alt="" class="one-plus-icon">
        </div>
        <div class="top-header-middle">
            <div class="top-header-middle-model">
                手机
                <div class="top-header-middle-model-new">
                    new
                </div>
            </div>
            <div class="top-header-middle-model">
                一加手表
                <div class="top-header-middle-model-new">
                    new
                </div>
            </div>
            <div class="top-header-middle-model">配件</div>
            <div class="top-header-middle-model">官方商城</div>
            <div class="top-header-middle-model">品牌</div>
            <div class="top-header-middle-model">服务</div>
            <div class="top-header-middle-model">论坛</div>
            <div class="top-header-middle-model">零售店</div>
        </div>
        <div class="top-header-right">
            <img src="../../assets/onePlus/login.jpeg" alt="" class="one-plus-login">
        </div>
    </div>
</template>
<script setup lang="ts">

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
            &-new {
                border-radius: 5px;
                border: 1px solid #000;
                margin-left: 10px;
                font-size: 12px;
                line-height: 12px;
            }
        }
        &-model:hover {
            border-bottom: 2px solid red;
            // position: absolute;
        } 
    }
    &-right {
        .one-plus-login {
            width: 30px;
        }
    }
}
</style>