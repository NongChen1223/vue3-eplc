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
*{
    margin: 0;
    padding: 0;
}
.page-login{
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
        /* 
         CSS 代码块表示当输入框输入的值合法或者获得了焦点时，相邻的 span 元素就会应用以下样式
         即输入框输入合法值和获得焦点时。
        */
        input:valid~span,input:focus~span{
            color: #50c9c3;
            transform: translateX(20px) translateY(-7px);//向右平移20像素，向上平移7像素
            font-size: 0.65em;
            padding: 0 5px 0 5px;
            background: #09203f;
            letter-spacing: 0.1em;
        }
        input:valid input:focus{
            border: 1px solid #50c9c3;
         
        }
        span{
            position: absolute;
            top: 0;
            left: 0;
            padding: 15px;
            pointer-events: none;
            font-size: 1em;
            color: rgba(255,255,255,0.5);
            text-transform: uppercase;//标签内所以字母转为大写
            transition:0.3s;
        }

    }
}
</style>
  