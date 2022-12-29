<script setup>
import Product from "./components/Product.vue"
import Evaluate from "./components/Evaluate.vue"
import FreeTrialButton from "./components/FreeTrialButton.vue";
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
import Introduce from "./components/Introduce.vue"
import Solution from "./components/Solution.vue"
import LogoList from "./components/LogoList.vue"

</script>

<template>
  <!-- 头部导航区域 -->
  <Header/>

  <!-- 首屏介绍 -->
  <Introduce id="Introduce" />

  <!-- 多个行业龙头企业选择的解决方案 -->
  <LogoList/>

  <!-- 产品矩阵 -->
  <Product id="Product" 
    imgUrl="https://olading.com/static/images/corePerson.png"
    title="核心人事" 
    des="强大的元数据管理能力，助力实现轻盈灵活的组织管理方式，赋能企业，实现自助化、移动化的入转调离流程。扫码入职、一键签约、灵活考勤，直观清晰的工作流大幅提升员工体验。"
  />
  <Product 
    imgDirection="left"
    imgUrl="https://olading.com/static/images/zhinengTax.gif"
    title="智能薪税" 
    des="数据经由精准设计，从考勤系统、社保系统和国税系统智能流向薪税系统。一键算薪、一键报税、一键代发、移动工资条，自动化机器人从繁琐的工资计算中解放人力。"
  />
  <Product 
    imgUrl="https://olading.com/static/images/performance.png"
    title="绩效管理" 
    des="融入企业战略解码，构建目标地图，绩效管理工具让经营管理者对战略落地、战略执行和战略修正一目了然。"
  />
  <Product 
    imgDirection="left"
    imgUrl="https://olading.com/static/images/training.png"
    title="企业培训" 
    des="数字化学习平台，融合线上线下培训场景；轻松制定培训计划，实时跟踪培训效果，精细化数据分析，大幅提升培训效率，支撑企业人才开发战略，打造学习型组织。"
  />
  <Product 
    imgUrl="https://olading.com/static/images/linghuo.png"
    title="灵工管理" 
    des="唯一具有银行资金监管能力的灵工管理，实现任务智能匹配、合同在线签署、资金监管安全、税收筹划和发票管理全流程线上化，助力企业配置雇佣和灵工全场景用工。"
  />

  <!-- 解决方案 -->
  <Solution id="Solution"/>

  <!-- 客户评价 -->
  <Evaluate id="Evaluate" />

  <!-- 众多优秀企业的信赖之选 -->
  <section class="xl:mb-40 mb-20 mt-20">
    <h1 class="xl:text-[40px] text-2xl text-center font-bold ">众多优秀企业的信赖之选</h1>
    <div class="flex justify-center items-center xl:my-10 my-4 mb-8 xl:text-xl text-base">
      <div class="mr-5  ">
        <span class="text-blue-600 mr-2">500+客户</span>
        <span>企业客户</span>
      </div>
      <div>
        <span class="text-blue-600 mr-2">500+客户</span>
        <span>企业客户</span>
      </div>
    </div>
    <div>
      <img class="animate-logo-move-1" src="https://olading.com/static/images/enters.png" alt="">
    </div>
  </section>

  <!-- 免费适用 -->
  <section class="text-center xl:pb-40 pb-20 mb-20 xl:text-4xl text-3xl border-b">
    <h1 class="font-bold xl:mb-5 mb-2">免费试用</h1>
    <h2 class="font-bold xl:mb-5 mb-2">阿拉钉一体化 HR SaaS</h2>
    <h3 class="text-blue-500 xl:text-2xl text-base mb-5 font-bold">仅需一步注册，还可以邀请你的小伙伴一起使用</h3>
    <div class="flex justify-center items-center px-[40px] mt-10 xl:mt-0">
      <FreeTrialButton class=" sm:w-[380px] w-10/12" input />
    </div>
  </section> 

  <!-- 底部 --> 
  <Footer />
</template>
