<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            @click="handleCityClick(item.name)"
            class="button-wrapper"
            v-for="item of hotCities"
            :key="item.id"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" :ref="key" :key="key" v-for="(item, key)  of cities">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            :key="innerItem.id"
            v-for="innerItem of item"
            @click="handleCityClick(innerItem.name)"
          >{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import {mapState,mapMutations} from 'vuex'
import Bscroll from "@better-scroll/core";
export default {
  name: "CityList",
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  computed: {
      ...mapState({
          currentCity: 'city'
      })
  },
  mounted() {
    setTimeout(() => {
      this.scroll = new Bscroll(this.$refs.wrapper);
    }, 200);
  },
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
      }
    }
  },
  methods: {
    handleCityClick(city) {
    //   this.$store.dispatch("changeCity", city);
        // this.$store.commit("changeCity", city);
        this.changeCity(city)
        this.$router.push('/')
    },
    ...mapMutations(['changeCity']) 
  }
};
</script>

<style lang="stylus" scoped="">
@import '~styles/varibles.styl';

.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:before {
    border-color: #ccc;
  }
}

.list {
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;

  .title {
    line-height: 0.54rem;
    background: #eee;
    padding-left: 0.2rem;
    color: #666666;
    font-size: 0.26rem;
  }

  .button-list {
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;

    .button-wrapper {
      float: left;
      width: 33.33%;

      .button {
        text-align: center;
        margin: 0.1rem;
        padding: 0.1rem 0;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
      }
    }
  }

  .item-list {
    .item {
      line-height: 0.76rem;
      color: #666666;
      padding-left: 0.2rem;
    }
  }
}
</style>