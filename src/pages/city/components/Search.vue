<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
    </div>
    <div v-show="keyword" class="search-content" ref="search">
      <ul>
        <li
          @click="handleCityClick(item.name)"
          class="search-item border-bottom"
          :key="item.id"
          v-for="item of list"
        >{{item.name}}</li>
        <li style="text-align: center" v-show="hasNoData" class="search-item border-bottom">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script type="text/javascript">
import Bscroll from "@better-scroll/core";
import { mapMutations } from "vuex";
export default {
  name: "CityHeader",
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null
    };
  },
  computed: {
    hasNoData() {
      return !this.list.length;
    }
  },
  methods: {
    handleCityClick(city) {
      // this.$store.commit("changeCity", city);
      this.changeCity(city)
      this.$router.push("/");
    },
    ...mapMutations(['changeCity'])
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search);
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
        this.$nextTick(() => {
          this.scroll.refresh();
        });
      }, 100);
    }
  }
};
</script>

<style lang="stylus" scoped="">
@import '~styles/varibles.styl';

.search {
  padding: 0 0.1rem;
  height: 0.72rem;
  background: $bgColor;

  .search-input {
    box-sizing: border-box;
    height: 0.62rem;
    width: 100%;
    line-height: 0.62rem;
    padding: 0 0.1rem;
    text-align: center;
    border-radius: 0.06rem;
    color: #666666;
  }
}

.search-content {
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eee;

  .search-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    background: #fff;
    color: #666;
  }
}
</style>