<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item of list" :key="item.id">
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
  props: {
    list: Array
  }
};
</script>

<style lang="stylus" scoped="">
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

.title {
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
}

.item-img-wrapper {
    height: 0;
    overflow: hidden;
    padding-bottom: 37.09%;
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