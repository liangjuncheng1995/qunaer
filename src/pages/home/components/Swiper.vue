<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "HomeSwiper",
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true
      }
    };
  },
  computed: {
    showSwiper() {
      return this.list.length;
    }
  }
};
</script>

<style lang="stylus" scoped="">
.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff;
}

.wrapper {
  width: 100%;
  overflow: hidden;
  height: 0.4rem;
  padding-bottom: 26.25%;
  background: #eee;

  .swiper-pagination-bullet-active {
  }

  .swiper-img {
    width: 100%;
  }
}
</style>