<script setup>
import FreeTrialButton from './FreeTrialButton.vue';
</script>
<template>
  <section class="flex flex-col xl:px-[64px] px-10 bg-gray-50 xl:flex-row items-center xl:items-start">
    <div class="flex flex-col xl:w-[500px] lg:w-[600px] flex-shrink-0">
      <h1 class="xl:text-5xl text-3xl font-bold pt-16 pb-12 text-center xl:text-left">一体化智能人财管家</h1>
      <div class="text-base xl:leading-9 leading-7 font-normal xl:text-gray-600 text-gray-700 ">
        强大的元数据、工作流、机器人流程自动化能力支撑的人财一体化智能企业管理服务平台，轻盈一致的操作体验，让员工伴随企业进入扫码入职、一键签约、一键审批、一键算薪、一键报税、扫票即报、自动审票的移动智能人事时代。
      </div>
      <FreeTrialButton input class="mt-12 sm:w-[380px] xl:mx-0 mx-auto w-full" />
    </div>
    <div class="flex flex-1 items-center justify-center py-10">
      <img class="w-full xl:w-10/12" src="https://olading.com/static/images/integration.png" alt="">
    </div>
  </section>
</template>