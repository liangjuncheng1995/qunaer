<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script type="text/javascript">
import DetailBanner from "./components/Banner";
import DetailHeader from "./components/Header";
import DetailList from "./components/List";
export default {
  name: "detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },

  data() {
    return {
      list: [
        {
          title: "成人票",
          children: [
            {
              title: "成人三管联票",
              children: [{
                title: '成人三管联调- 某家的连锁店'
              }]
            },
            {
              title: "成人五管联票"
            }
          ]
        },
        {
          title: "学生票"
        },
        {
          title: "儿童票"
        },
        {
          title: "特惠票"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped="">
.content {
  height: 50rem;
}
</style>