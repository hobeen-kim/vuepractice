<script>
export default {
  name: "Modal",
  data() {
    return {
      month: 1
    }
  },
  watch: {
    month(input, prev) {
      if (input > 12) {
        alert('1년 이상 선택할 수 없습니다. ' + prev)

        this.month = 12
      }

      if (this.isNum(input) === false) {
        alert('숫자만 입력할 수 있습니다. ' + prev)

        this.month = prev
      }
    }
  },
  props: {
    oneRooms: {
      type: Array,
      required: true
    },
    clickedRoom: {
      type: Number,
      required: true
    },
    isModalOpen: {
      type: Boolean,
      required: true
    },
  },
  beforeUpdate() {
    if(this.month == 2) {
      alert('2개월은 선택할 수 없습니다. (1개월 또는 3개월 이상 가능)')
      this.month = '1'
    }
  },
  methods: {
    closeModal() {
      this.$emit('closeModal')
    },
    isNum(input) {
      const pattern = /^[0-9]*$/;
      return pattern.test(input);
    },

  }
}
</script>

<template>
  <div class="black-bg" v-if="isModalOpen === true">
    <div class="white-bg">
      <h4>{{ oneRooms[clickedRoom].title }}</h4>
      <img :src="oneRooms[clickedRoom].image" :alt="clickedRoom" class="modal-room-img">
      <p>{{ oneRooms[clickedRoom].content }}</p>
      <input v-model="month">
      <input type="range" min="1" max="12" v-model.number="month">
      <p>{{ month }}개월 선택함 : {{oneRooms[clickedRoom].price * month}}원</p>
      <button @click="closeModal">닫기</button>
    </div>
  </div>
</template>

<style scoped>

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  padding: 20px;
  position: fixed;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

.modal-room-img {
  width: 50%;
  border-radius: 10px;
}

</style>