<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音" />
  </div>
</template>

<script type="text/javascript">
export default {
  name: "CityHeader"
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
</style>