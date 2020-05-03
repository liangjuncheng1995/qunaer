<template>
  <div>
    <home-header ></home-header>
    <home-swiper :list="SwiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-Recommend :list="recommendList"></home-Recommend>
    <home-Weekend :list="weekendList"></home-Weekend>
  </div>
</template>

<script type="text/javascript">
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeRecommend from "./components/Recommend";
import HomeWeekend from "./components/Weekend";
import axios from "axios";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data() {
    return {
      SwiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    };
  },
  mounted() {
    this.getHomeInfo();
  },
  methods: {
    getHomeInfo() {
      axios.get("/api/index.json").then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.SwiperList = data.swiperList;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList;
      }
    }
  }
};
</script>

<style type="text/css">
.home {
  font-size: 50px;
}
</style>