<template>
  <div id="app">
    <v-btn
      class="btn"
      @click="showModal"
      width="100"
      color="primary"
      text-color="white"
      depressed
      id="contain"
      v-on="onOpen"
    >
      <i class="fas fa-plus" id="fa">create Ticket</i>
    </v-btn>
    <button type="button"></button>

    <Modal v-show="isModalVisible" @close="closeModal" />
  </div>
</template>

<script>
import Modal from "./Modal.vue";

export default {
  name: "App",
  components: {
    Modal,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>
<style>
.btn {
  width: 30px;
}
</style>
