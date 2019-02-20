<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <!-- <swiper-slide>
				<div class="icon">
					<div class="icon-img">
						<img class="icon-img-content" src="https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png">
					</div>
					<p class="icon-desc">热门景点</p>
				</div>
      </swiper-slide>-->
    </swiper>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "HomeIcons",
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages() {
      const pages = [];
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  },
  components: {}
};
</script>

<style lang="stylus" scoped="">
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

.icons >>> .swiper-container {
  height: 0;
  padding-bottom: 50%;
}
.icons {
  margin-top:.2rem;
  .icon {
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    .icon-img {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0.44rem;
      right: 0;
      box-sizing: border-box;
      padding: 0.1rem;

      .icon-img-content {
        height: 100%;
        display: block;
        margin: 0 auto;
      }
    }

    .icon-desc {
      position: absolute;
      left: 0;
      bottom: 0.2rem;
      right: 0;
      line-height: 0.44rem;
      height: 0.44rem;
      color: $darkTextColor;
      text-align: center;
      ellipsis();
    }
  }
}
</style>