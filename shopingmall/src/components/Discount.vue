<template>
  <div class="discount">
    <h4>지금 결제하면 {{ discountRate }}% 할인</h4>
  </div>
</template>

<script>
export default {
  name: "Discount",
  data() {
    return {
      discountRate: 30,
    }
  },
  mounted() {
    let timer = setInterval(() => {
      if(this.discountRate <= 0) {
        clearInterval(timer);
        this.$emit('closeDiscount')
        return;
      }
      this.discountRate--;
    }, 1000);
  },
}
</script>

<style scoped>

.discount {
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}

</style>