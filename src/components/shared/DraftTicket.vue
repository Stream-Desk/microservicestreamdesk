<template>
  <v-container grid-list-xs>
    <v-card :elevation="hover ? 24 : 3" class="mx-auto" width="600">
      <v-system-bar window color="primary">
        <span>Issue with Bugs</span>
        <v-spacer></v-spacer>
        <v-icon>mdi-minus</v-icon>
        <v-icon>mdi-close</v-icon>
      </v-system-bar>
      <v-card-text>
        <label for="subject" id="label1"> Subject </label>
        <input type="text" />
        <label for="category" id="label2"> Category </label>
        <input type="text" name="issues" list="issues" autocomplete="off" />
        <datalist id="issues">
          <option>Slow Updates</option>
          <option>Blue screen</option>
          <option>Bugs</option>
        </datalist>
        <label for="description" id="label3"> Decription </label>
        <textarea type="text" />
        <label for="attachment" id="label4"> Attachment </label>
        <i class="fas fa-cloud-upload-alt" id="fas"></i>
      </v-card-text>
      <v-system-bar window color="primary">
        <div>
          <v-btn color="blue" id="buton" class="fill" @click="onSending">
            Send</v-btn
          >
        </div>

        <v-divider class="mx-4" vertical></v-divider>
        <v-spacer></v-spacer>
        <v-divider class="mx-4" vertical></v-divider>
        <span>Saved</span>
        <v-icon>mdi-delete</v-icon>
      </v-system-bar>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    onSending() {},
  },
};
</script>

<style scoped>
#label1 {
  margin-inline-start: 5%;
}
#label2 {
  margin-inline-start: 5%;
}
#label3 {
  margin-inline-start: 5%;
}
#label4 {
  margin-inline-start: 5%;
}
input {
  border: 1px solid grey;
  border-radius: 3px;
  width: 90%;
  height: 30px;
  margin-bottom: 20px;
  margin-inline-start: 5%;
}
textarea {
  border: 1px solid grey;
  border-radius: 3px;
  width: 90%;
  height: 50px;
  margin-inline-start: 5%;
}
#buton {
  width: 50px;
  height: 30px;
  margin-bottom: 10px;
  margin-top: 10px;
  margin-right: 7%;
  color: white;
  border-radius: 18px;
  border: 1px solid transparent;
  cursor: pointer;
}
.fill:hover,
.fill:focus {
  box-shadow: inset 0 0 0 2em var(--hover);
}
btn {
  transition: 0.25s;
}
</style>