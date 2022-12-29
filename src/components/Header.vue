<script setup >
import { useWindowSize } from '@vueuse/core'
import { reactive, ref, watch } from 'vue';
import FreeTrialButton from "./FreeTrialButton.vue"

const { width } = useWindowSize()
const headerNav = reactive({
  list: [
    {
      name:"首页",
      value:"Introduce"
    }, 
    {
      name:"产品矩阵",
      value:"Product"
    }, 
    {
      name:"解决方案",
      value:"Solution"
    }, 
    {
      name:"客户评价",
      value:"Evaluate"
    }, 
    {
      name:"登录/注册",
      value:"login"
    }
  ],
  active: 0
})
const isMenu = ref(false)

watch(width,()=>isMenu.value=false)

const handleNavClick = ({ value }) =>{
  if(value === "login") window.location.href = "http://baidu.com"
  console.log( value,document.querySelector(`#${value}`))
  document.querySelector(`#${value}`).scrollIntoView(true)
  headerNav.active = value
  isMenu.value = false
}

</script>

<template>
  <header class="flex shadow-sm z-20 h-[72px] items-center xl:px-[64px] px-4 sticky top-0 backdrop-blur-xl">
    <h1 class="flex items-center">
      <img class="xl:w-[100px] w-20" src="https://olading.com/static/images/oladLogo.png" alt="阿拉钉" />
      <h1 class="text-lg hidden lg:block font-bold ml-8">一体化智能人财管家</h1>
    </h1>

    <div class="flex-1" />

    <ul class=" hidden  lg:flex text-lg cursor-pointer ">
      <li class="px-6 hover:font-bold" @click="handleNavClick(item)" v-for="(item,index) in headerNav.list"
        :key="index" :class="{ 'font-bold':item.value==headerNav.active }">{{ item.name }}</li>
    </ul>
    <div class="w-[40px] h-[40px] lg:hidden block cursor-pointer" @click="isMenu=!isMenu">
      <img src="https://olading.com/static/image/menu.png" v-show="!isMenu" alt="" />
      <img src="https://olading.com/static/image/close.png" v-show="isMenu" alt="" />
    </div>

    <FreeTrialButton class="ml-5 hidden lg:block" />
  </header>

  <div class="fixed z-10 bg-white inset-0 px-14 flex flex-col pt-20" v-show="isMenu">
    <ul class="text-base cursor-pointer pt-4 divide-y-[0.5px] divide-solid divide-gray-200 flex-1">
      <li class="py-4 text-center hover:font-bold" @click="handleNavClick(item)" v-for="(item,index) in headerNav.list"
        :key="index" :class="{ 'font-bold':item.value==headerNav.active }">{{ item.name }}</li>
    </ul>
    <div class="flex items-center justify-center pb-80">
      <FreeTrialButton plain buttonWidth="300px" />
    </div>
  </div>
</template>