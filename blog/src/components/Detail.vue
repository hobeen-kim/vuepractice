<template>
  <div>
    <h4>상세페이지</h4>
    <h5>{{ articles[$route.params.id].title }}</h5>
    <p>{{ articles[$route.params.id].content }}</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: {
    articles: Array,
  },
}
</script>

<style scoped>

</style>