<template>
  <div class="swiperBannerModule">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547321741270&di=ef3931ed4d95fb9a69901c2939b8dadb&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fexp%2Fw%3D500%2Fsign%3Deb8d8df2293fb80e0cd161d706d02ffb%2F574e9258d109b3de76e665abc4bf6c81810a4c9c.jpg"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547321741270&di=ef3931ed4d95fb9a69901c2939b8dadb&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fexp%2Fw%3D500%2Fsign%3Deb8d8df2293fb80e0cd161d706d02ffb%2F574e9258d109b3de76e665abc4bf6c81810a4c9c.jpg"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547321741270&di=ef3931ed4d95fb9a69901c2939b8dadb&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fexp%2Fw%3D500%2Fsign%3Deb8d8df2293fb80e0cd161d706d02ffb%2F574e9258d109b3de76e665abc4bf6c81810a4c9c.jpg"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547321741270&di=ef3931ed4d95fb9a69901c2939b8dadb&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fexp%2Fw%3D500%2Fsign%3Deb8d8df2293fb80e0cd161d706d02ffb%2F574e9258d109b3de76e665abc4bf6c81810a4c9c.jpg"
            alt
          />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination toRight"></div>

      <!-- 如果需要导航按钮 -->
          <!-- <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div> -->

      <!-- 如果需要滚动条 -->
      <!-- <div class="swiper-scrollbar"></div> -->
    </div>需要npm install swiper --save -dev
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";
export default {
  name: "swiperBannerModule",
  data() {
    return {
      msg: "Banner"
    };
  },
  methods: {},
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      loop: true,
      autoplay: true,
      speed: 500,
      autoplay: {
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>


<style scoped>
/* swiper-pagination-bullet-active */
.swiper-slide > img {
  display: block;
  width: 100%;
}
.toRight {
  box-sizing: border-box;
  padding-left: 45%;
  /*margin-left:35%;*/
}
</style>