<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content"></div>
  </div>
</template>

<script type="text/javascript">
import DetailBanner from "./components/Banner";
import DetailHeader from "./components/Header";
export default {
  name: "detail",
  components: {
    DetailBanner,
    DetailHeader
  },

  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped="">
.content {
  height: 50rem;
}
</style>