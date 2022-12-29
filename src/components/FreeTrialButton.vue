<script setup >
import { computed } from 'vue';

const { input,buttonWidth,plain } = defineProps({
  input:Boolean,
  plain:Boolean,
  buttonWidth:{
    type:String,
    default:"140px"
  }
})
const plainClass = computed(()=>{
  const base = " -ml-4 w-[140px] h-[48px] text-sm rounded-xl "
  const pClass = plain ? "bg-while border border-blue-500 text-blue-500" : "bg-blue-500 text-white hover:bg-blue-600 "
  return base+pClass
})
</script>

<template>
  <div class="flex">
    <input v-if="input" class="appearance-none outline-none text-base px-6 border border-gray-200 flex-1 rounded-xl" type="text" placeholder="请输入手机号"> 
    <button 
      :class="['w-['+buttonWidth+']',plainClass]" 
    >
      免费试用
    </button>
  </div>
</template>