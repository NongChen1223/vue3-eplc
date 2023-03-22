<template>
    <div class="page-login">
        <h2>WELCOME</h2>
        <div class="input-box">
            <input type="text" required="required">
            <span>Username or email</span>
        </div> 
        <div class="input-box">
            <input type="password" required="required">
            <span>password</span>
        </div>
        <div class="button-box">
            <button>LOGIN</button>
        </div> 
    </div>
</template>
<script lang="ts" setup>
import { reactive, toRefs, onMounted } from "vue"
import { ElMessage } from "element-plus";
const form = reactive({
    Email: "",
    password: "",
    isAgree: 0,
});
//登录接口
function login() {
    console.log('412121')
}


onMounted(() => {
    console.log('44545')
   
})

</script>
  
<style lang="scss" scoped>
.page-login{
    padding: 50px;
    // height: 400px;
    background: #09203f;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    user-select: none;//禁止用户选中文本
    gap: 50px;
    h2{
        color: white;
    }
    .input-box{
        position: relative;
        width:300px;
        input{
            width: 100%;
            padding: 15px;
            border:1px solid rgba(255,255,255,0.5);
            background: #09203f;
            border-radius: 5px;
            outline: none;//移除表单元素的轮廓线
            color:white;
            font-size: 1em;
            transition: 0.3s;
        }
        input:valid~span,input:focus~span{
            color: #09203f;
            transform: translateX(20px) translateY(-7px);
            font-size: 0.65em;
            padding: 10px 5px 0 0;
        }
        span{
            position: absolute;
            left: 0;
            padding: 10px 5px 0 0 ;
            pointer-events: none;
            font-size: 1em;
            color: rgba(255,255,255,0.5);
            text-transform: uppercase;//标签内所以字母转为大写
            transition:0.3s;
        }

    }
}
</style>
  