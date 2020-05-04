<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        class="banner-img"
        :src="bannerImg"
        alt
      />
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number">
          <span class="iconfont tupian-icon">&#xe604;</span>{{gallaryImgs.length}}
        </div>
      </div>
    </div>
    <common-gallary @close='handlerGallaryClose' :imgs="gallaryImgs" v-show="showGallary"></common-gallary>
  </div>
</template>

<script type="text/javascript">
import CommonGallary from "@/common/gallary/Gallary.vue";
export default {
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  name: "Banner",
  components: {
    CommonGallary
  },
  methods: {
    handleBannerClick() {
      this.showGallary = true
    },
    handlerGallaryClose() {
      this.showGallary = false
    }
  },
  data() {
    return {
      showGallary: false,
     
    };
  }
};
</script>

<style lang="stylus" scoped="">
@import '~styles/varibles.styl';

.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

    .banner-title {
      flex: 1;
      font-size: 0.32rem;
      padding: 0 0.2rem;
    }

    .banner-number {
      height: 0.32rem;
      line-height: 0.32rem;
      margin-top: 0.14rem;
      padding: 0 0.4rem;
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.8);
      font-size: 0.24rem;

      .banner-icon {
        font-size: 0.24rem;
      }
    }
  }
}
</style>