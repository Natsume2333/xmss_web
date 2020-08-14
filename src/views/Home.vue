<template>
  <div class="home">
    <NavBar></NavBar>
      <div class="slideshow_box">
          <el-carousel class="slideshow" height="914px">
              <el-carousel-item class="slideshowItem" v-for="slideshow in slideshowList" :key="slideshow">
                  <!--        <img :src=slideshow.url style="width: 100% ; height: 914px">-->
                  <!--          <img src="../assets/img/home/lunbotu2.png" alt="">-->
                  <el-image
                          style="width: 100%; height: 914px"
                          :src=slideshow.url
                  ></el-image>
              </el-carousel-item>
          </el-carousel>
      </div>
      <div class="synopsis">
          <div class="synopsis_wenzi">
              <div class="synopsis_title">
                  <div class="icon">
                      <img src="../assets/img/home/homeIcon.png">
                  </div>
                  <div class="synopsis_title_box">
                      <span class="synopsis_title_zh">公司简介</span>
                      <span class="synopsis_title_en">COMPANY PROFILE</span>
                  </div>
              </div>
              <div class="synopsis_center">{{synopsis}}</div>
              <span  class="more"><span>了解更多</span> <i class="el-icon-caret-right"></i></span>
          </div>
      </div>
      <Bottom></Bottom>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Bottom from '@/components/Bottom.vue'
export default {
  name: 'Home',
  data() {
    return{
      slideshowList:[
        {
          url:require('../assets/img/home/lunbotu1.png'),
        },
        {
          url:require('../assets/img/home/lunbotu2.png'),
        },
        {
          url:require('../assets/img/home/lunbotu3.png'),
        }
      ],
        synopsis:"鑫梦盛世影视文化传播（深圳）有限公司于2020年3月在中国的科技前沿城市深圳成立，座落于深圳市南山区赤湾自贸区少帝路1号。东邻大南山，西靠小南山，海陆空交通十分便利公司园区占地面积68,000平方米，园区设有演艺人员培训中心、影视制作中心、传媒推广中心、科技娱乐体验中心、行政中心。 目前拥有国内一流的......"
    }
  },
  components: {
      NavBar,
      Bottom
  }
}
</script>
<style>
    .home{
        position: relative;
        z-index: 100;
    }
  .slideshow{
      background-color: black;
      position:absolute;
      z-index:-1;
  }
  .slideshowItem{
      height: 914px;
      width: 100%;
  }
    .synopsis{
        height: 556px;
        width: 100%;
        background-image:url(../assets/img/home/synopsisbc.png);
        background-repeat:no-repeat;
        background-size: 100% 556px;
    }
    .synopsis_title{
        display: flex;
        padding-left: 345px;
        align-items: center;
    }
    .synopsis_title_zh{
        color: white;
        font-size: 34px;
        padding-top: 54px;
    }
    .icon{
        padding-top: 50px;
        margin-right: 5px;
        margin-left: -5px;
    }
    .synopsis_center{
        padding-left: 360px;
        width: 497px;
        height: 110px;
        color: white;
        font-size: 14px;
        letter-spacing:2px;
        line-height: 20px;
    }
    .synopsis_wenzi{

    }
    .synopsis_title_box{
        display: flex;
        flex-direction: column;
    }
    .synopsis_title_en{
        padding-top: 18px;
        color: #f5f5f5;
    }
    .more{
        position: relative;
        left: 750px;
        color: white;
        width: auto;
        border: 1px #f5f5f5 solid;
    }
</style>
