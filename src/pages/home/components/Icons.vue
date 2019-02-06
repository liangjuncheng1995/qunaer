<template>
  <div class="icons">
    <swiper>
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
  data() {
    return {
      iconsList: [
        {
          id: "0001",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc: "景点门票"
        },
        {
          id: "0002",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
          desc: "广州必游"
        },
        {
          id: "0003",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
          desc: "动植物园"
        },
        {
          id: "0004",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png",
          desc: "游乐场"
        },
        {
          id: "0005",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png",
          desc: "珠江夜游"
        },
        {
          id: "0006",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png",
          desc: "泡温泉"
        },
        {
          id: "0007",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
          desc: "一日游"
        },
        {
          id: "0008",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png",
          desc: "展馆展览"
        },
        {
          id: "0009",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png",
          desc: "玩转长隆"
        },
        {
          id: "0010",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png",
          desc: "广州旧时光"
        }
      ]
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.iconsList.forEach((item, index) => {
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