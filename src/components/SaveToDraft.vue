<template v-slot:save-draft>
  <v-btn
    rounded="pill"
    @click="onSave"
    id="btn"
    class="text-capitalize"
    variant="outlined"
    text-center
    >Save</v-btn
  >
  <v-dialog v-model="dialog">
    <v-container grid-list-xs>
      <v-card :elevation="hover ? 24 : 2" class="mx-auto my-12" max-width="300">
        <v-card-text id="save"> Ticket Saved in Drafts </v-card-text>
      </v-card>
    </v-container>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    onSave() {
      this.dialog = true;
    },
  },
};
</script>

<style scoped>
#save {
  text-align: center;
}
#btn {
  color: black;
  margin-bottom: 10px;
  margin-right: 2%;
  width: 100px;
  height: 33px;
  border: 1px solid rgb(204, 201, 201);
}
</style>
