<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item" v-for="item of recommentList" :key="item.id">
        <div class="item-img-wrapper">
          <img
            class="item-img"
            :src="item.imgUrl"
            alt
          >
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
  <!-- <div class="icons">热销推荐</div> -->
</template>

<script type="text/javascript">
export default {
  name: "Recommennd",
  data() {
    return {
      recommentList: [
        {
          id: "001",
          imgUrl: "https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/38cd7a459e6d92cc4d87629645ac81fb_78_59.jpg",
          title: '我是标题',
          desc: '我是描述'
        },
        {
          id: "002",
          imgUrl: "https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/38cd7a459e6d92cc4d87629645ac81fb_78_59.jpg",
          title: '我是标题',
          desc: '我是描述'
        },
        {
          id: "003",
          imgUrl: "https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/38cd7a459e6d92cc4d87629645ac81fb_78_59.jpg",
          title: '我是标题',
          desc: '我是描述'
        },
        {
          id: "004",
          imgUrl: "https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/38cd7a459e6d92cc4d87629645ac81fb_78_59.jpg",
          title: '我是标题',
          desc: '我是描述'
        },
        {
          id: "005",
          imgUrl: "https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/38cd7a459e6d92cc4d87629645ac81fb_78_59.jpg",
          title: '我是标题',
          desc: '我是描述'
        },
      ]
    };
  }
};
</script>

<style lang="stylus" scoped="">
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

.title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background: #ccc;
  text-indent: 0.2rem;
}

.item {
  display: flex;
  height: 1.9rem;
  overflow: hidden;
  .item-img {
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }
  .item-info {
    flex: 1;
    padding: 0.1rem;
    min-width: 0;
    .item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
      ellipsis()
    }
    .item-desc {
      line-height: 0.4rem;
      color: #ccc;
      ellipsis()
    }
    .item-button {
      line-height: .44rem;
      margin-top: .16rem;
      background: #ff9300;
      padding: 0 .2rem;
      border-radius: .06rem;
      color: #fff;
    }
  }
}
</style>