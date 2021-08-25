<template v-slot:draft>
  <alltickets>
    <slot></slot>
  </alltickets>
</template>

<script>
import Alltickets from "../All-tickets.vue";
export default {
  components: {
    Alltickets: Alltickets,
  },
};
</script>
