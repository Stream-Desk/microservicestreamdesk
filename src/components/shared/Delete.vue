<template v-slot:delete>
  <v-btn depressed small id="contain" v-on="on" @click="onOpen">
    <i class="fas fa-trash" id="fa"></i>
  </v-btn>
</template>

<style scoped>
#fa {
  padding: 5px;
  height: 35px;
  top: 223px;
  left: 173px;
  border-radius: 4px;
  color: rgb(201, 5, 5);
}
#fas {
  padding: 5px;
}
#contain {
  margin-left: -20%;
  width: 20px;
  margin-top: 20px;
  color: white;
  background-color: rgb(255, 255, 255);
}
</style>
