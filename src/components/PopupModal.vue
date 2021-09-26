<template>
  <div id="app">
    <v-btn
      class="btn"
      @click="showModal"
      flat
      depressed
      id="contain"
      v-on="onOpen"
    >
      <i class="fas fa-plus" id="fa">Add Ticket</i>
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
