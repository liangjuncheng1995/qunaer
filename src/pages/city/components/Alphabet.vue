<template>
  <ul class="list">
    <li
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @touchstart="handleTouchStart"
      @click="handleLetterClick"
      class="item"
      :key="item"
      v-for="item of letters"
      :ref="item"
    >{{item}}</li>
  </ul>
</template>

<script type="text/javascript">
export default {
  name: "CityAlphabet",
  props: {
    cities: Object
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    }
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    };
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetTop; //a字母距离父元素的距离
  },
  methods: {
    handleLetterClick(e) {
      this.$emit("change", e.target.innerText);
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchEnd() {
      this.touchStatus = false;
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          const startY = this.startY;
          const touchY = e.touches[0].clientY - 79; //滑动结束后，该字母到父元素的距离
          const index = Math.floor((touchY - startY) / 20); //20是每一个字母的高度。该长度是a字母到滑动结束之后的字母的距离。
          if (index >= 0 && index < this.letters.length) {
            this.$emit("change", this.letters[index]);
          }
        }, 16);
      }
    }
  }
};
</script>

<style lang="stylus" scoped="">
@import '~styles/varibles.styl';

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;

  .item {
    line-height: 0.44rem;
    text-align: center;
    color: $bgColor;
  }
}
</style>