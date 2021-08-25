<template v-slot:refresh>
  <v-btn depressed id="contain" v-on="on" @click="onOpen">
    <i class="fas fa-refresh" id="fa"></i>
  </v-btn>
</template>

<style scoped>
#fa {
  padding: 5px;
  height: 35px;
  top: 223px;
  left: 150px;
  border-radius: 4px;
  color: rgb(0, 0, 0);
}
#fas {
  padding: 5px;
}
#contain {
  margin-left: 10%;
  width: 10px;
  margin-top: 20px;
  color: white;
  background-color: rgb(201, 201, 201);
}
</style>
