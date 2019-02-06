<template>
  <div>
    <div class="title">周末去哪儿</div>
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
        </div>
      </li>
    </ul>
  </div>
  <!-- <div class="icons">热销推荐</div> -->
</template>

<script type="text/javascript">
export default {
  name: "HomeWeekend",
  data() {
    return {
      recommentList: [
        {
          id: "001",
          imgUrl: "http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg",
          title: '我是标题',
          desc: '我是描述'
        },
        {
          id: "002",
          imgUrl: "http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg",
          title: '我是标题',
          desc: '我是描述'
        },
        {
          id: "003",
          imgUrl: "http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg",
          title: '我是标题',
          desc: '我是描述'
        },
        {
          id: "004",
          imgUrl: "http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg",
          title: '我是标题',
          desc: '我是描述'
        },
        {
          id: "005",
          imgUrl: "http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg",
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
  background: #eee;
  text-indent: 0.2rem;
}

.item-img-wrapper {
    height: 0;
    overflow: hidden;
    padding-bottom: 33.9%;
    .item-img {
        width: 100%;
    }
}
.item-info {
    padding: 0.1rem;
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
}


</style>