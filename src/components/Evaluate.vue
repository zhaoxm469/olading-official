<script setup>
import { reactive, ref } from 'vue';

const list = reactive([
  {
    content: "使用薪税系统后，可以直接在一台电脑上批量填报个税，不需要使用多台电脑切换各地区税务系统操作。解决了我们各区域多城市不同公司主体的个税申报工作，极大程度缩减了报税花费的时间，提升我们财务部门的工作效率。",
    memberName: "西贝莜面村·人事经理",
    pic: "https://olading.com/static/images/xibeiImg.png",
    logo: "https://olading.com/static/images/xibei.png"
  },
  {
    content: "使用薪税系统后，可以直接在一台电脑上批量填报个税，不需要使用多台电脑切换各地区税务系统操作。解决了我们各区域多城市不同公司主体的个税申报工作，极大程度缩减了报税花费的时间，提升我们财务部门的工作效率。",
    memberName: "西贝莜面村·人事经理",
    pic: "https://olading.com/static/images/xibeiImg.png",
    logo: "https://olading.com/static/images/xibei.png"
  },
  {
    content: "使用薪税系统后，可以直接在一台电脑上批量填报个税，不需要使用多台电脑切换各地区税务系统操作。解决了我们各区域多城市不同公司主体的个税申报工作，极大程度缩减了报税花费的时间，提升我们财务部门的工作效率。",
    memberName: "西贝莜面村·人事经理",
    pic: "https://olading.com/static/images/xibeiImg.png",
    logo: "https://olading.com/static/images/xibei.png"
  }
])

const active = ref(0)

</script>

<template>
  <section class="xl:px-20 xl:mb-40 mb-4">
    <h1 class="text-center mb-3 font-bold text-[40px]">客户评价</h1>
    <p class="text-center text-sm">来自客户的真实评价</p>
    <div class="flex flex-col-reverse xl:flex-row xl:my-20 my-10  mx-10 xl:mx-0 " v-for="(item, index) in list" :key="index" v-show="index===active">
      <div class="xl:w-[700px] xl:mr-40">
        <img src="https://olading.com/static/images/yinhao.png" class="xl:w-10 xl:mb-4 mb-2 w-6" alt="">
        <p class="xl:text-xl text-base xl:leading-9 leading-6 ">{{ item.content }}</p>
        <div class="text-right xl:text-xl text-sm xl:mt-10 xl:font-bold text-gray-500">{{ item.memberName }}</div>
      </div>
      <div class="flex justify-center mb-10 xl:mb-0">
        <img :src="item.pic" alt="" class="xl:w-7/12 ">
      </div>
    </div>
    <ul class="flex xl:space-x-20 space-x-4 px-6 xl:px-0 justify-center">
      <li  v-for="(item, index) in list" :key="index" class=" flex justify-center items-center rounded-lg w-[230px] h-[100px]">
        <img :src="item.logo" alt="" />
      </li>
    </ul>
  </section>
</template>