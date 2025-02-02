<template>
    <div v-for="(article, i) in articles" :key="i">
      <h5 @click="$router.push('/detail/' + i)">{{ article.title }}</h5>
      <router-view :article="article"></router-view>
      <p>{{ article.date }}</p>
    </div>
</template>

<script>
export default {
  name: "List",
  props: {
    articles: Array,
  }
}
</script>

<style scoped>

</style>