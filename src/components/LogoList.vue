<script setup >
import { computed } from "vue";
const logoList = Array(20).fill(1)
const logoListWrapWidth = computed(()=>logoList.length*(200+10)+"px")
</script>

<template>
<section class="bg-gray-50 mb-20">
    <h3 class="w-full text-center xl:py-12 py-6 text-base">多个行业龙头企业选择的解决方案</h3>
    <div class="w-full overflow-hidden ">
      <ul class="h-[110px] flex space-x-[10px] animate-logo-move" :style="{ width: logoListWrapWidth}" >
        <li v-for="(item,index) in logoList" :key="item" class="w-[200px]">
          <img src="https://olading.com/static/images/jiedian.png" alt="">
        </li>
      </ul>
    </div>
  </section>
</template>