<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true
      },
      swiperList: [
        {
          id: "0001",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1812/c4/88b4449c546cf302.jpg_750x200_99f0e721.jpg"
        },
        {
          id: "0002",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1812/d4/d51b0de13bdaeb02.jpg_750x200_a16ebfe3.jpg"
        },
        {
          id: "0003",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1812/eb/806541e769362f02.jpg_750x200_23b71064.jpg"
        }
      ]
    };
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
  height: 0;
  padding-bottom: 26.25%;
  background: #eee;

  .swiper-pagination-bullet-active {
  }

  .swiper-img {
    width: 100%;
  }
}
</style>