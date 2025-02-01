<script>

import oneRooms from './assets/oneroom.js';
import Discount from "@/components/Discount.vue";
import Modal from "@/components/Modal.vue";
import Card from "@/components/Card.vue";
import discount from "@/components/Discount.vue";

export default {
  name : 'App',
  data() {
    return {
      oneRoomsOriginal: [...oneRooms],
      oneRooms: oneRooms,
      clickedRoom: 0,
      isModalOpen: false,
      showDiscount: true,
      menus: ['Home', 'Products', 'About'],
      reportCounts: [0, 0, 0],
    }
  },
  methods: {
    increase(i) {
      this.reportCounts[i]++
    },
    priceSort() {
      this.oneRooms.sort((a, b) => a.price - b.price)
    },
    priceSortReverse() {
      this.oneRooms.sort((a, b) => b.price - a.price)
    },
    nameSort() {
      this.oneRooms.sort((a, b) => a.title.localeCompare(b.title))
    },
    sortBack() {
      this.oneRooms = [...this.oneRoomsOriginal]
    },
  },
  created() {

  },
  mounted() {
  },
  components: {
    Card : Card,
    Modal : Modal,
    Discount : Discount
  },

}
</script>

<template>
  <transition name="fade">
  <Modal @closeModal="isModalOpen = false" :oneRooms="oneRooms" :clickedRoom="clickedRoom" :isModalOpen="isModalOpen"/>
  </transition>

  <div class="menu">
    <a v-for="(menu, i) in menus" :key="i"> {{ menu }} </a>
  </div>

  <Discount @closeDiscount="showDiscount = false" v-if="showDiscount === true"/>

  <button @click="priceSort">가격순 정렬</button>
  <button @click="priceSortReverse">가격역순 정렬</button>
  <button @click="nameSort">이름순 정렬</button>
  <button @click="sortBack">되돌리기</button>

  <Card @openModal="isModalOpen = true; clickedRoom = $event" v-for="(oneRoom, i) in oneRooms" :key="i" :oneRoom="oneRoom"/>

</template>

<style>
body {
  margin: 0;
}

.fade-leave-from {
  opacity: 1;
}

.fade-leave-active {
  transition: all 0.3s;
}

.fade-leave-to {
  opacity: 0;
}

.fade-enter-from {
  transform: translateY(-100%);
}

.fade-enter-active {
  transition: all 0.3s;
}

.fade-enter-to {
  transform: translateY(0);
}

div {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  margin: 10px;
  cursor: pointer;
}

</style>