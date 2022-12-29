<template> 
  <section class="flex xl:pt-[160px] justify-center xl:flex-row flex-col" :class="[imgDirectionClass]">
    <div class="flex flex-col justify-center px-20 w-full xl:w-[600px] flex-shrink-0">
      <h1 class="text-4xl font-bold mb-8 text-center xl:text-left">{{title}}</h1>
      <div class="text-base leading-8 text-gray-700">
        {{ des }}
      </div>
    </div>
    <div class="w-full xl:max-w-[800px] ">
      <img :src="imgUrl" />
    </div>
  </section>
</template>

<script setup>
import { computed, defineProps } from "vue"
const { title,des,imgUrl,imgDirection } = defineProps({
  title:String,
  des:String,
  imgUrl:String,
  imgDirection:String,
})
const imgDirectionClass = computed(()=> imgDirection === "left" ? "flex-row-reverse":"")

</script>