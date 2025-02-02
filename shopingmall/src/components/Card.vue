<script>
export default {
  name: "Card",
  props: {
    oneRoom: {
      type: Object,
      required: true
    },
  },
  methods: {
    openModal() {
      this.$emit('openModal', this.oneRoom.id)
    }
  }
}
</script>

<template>
  <div>
    <img :src="oneRoom.image" :alt="i" class="room-img">
    <h4 @click="openModal">{{ oneRoom.title }}</h4>
    <p>{{oneRoom.price}}원</p>
  </div>
</template>

<style scoped>

.room-img {
  width: 50%;
  border-radius: 10px;
  margin-top: 40px;
}

</style>